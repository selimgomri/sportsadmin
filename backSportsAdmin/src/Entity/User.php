<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\ExistsFilter;
use App\Controller\Api\MeAction;
use Doctrine\Common\Collections\ArrayCollection;
use App\Controller\Api\UserImageAction;
use App\Filter\SimpleSearchFilter;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass:UserRepository::class)]
#[ApiResource(
    security:'is_granted("ROLE_USER")',
    collectionOperations:[
        'get',
        'post',
    ],
    itemOperations:[
        'me' => [
            'pagination_enabled' => false,
            'method' => 'GET',
            'path' => '/me',
            'controller' => MeAction::class,
            'read' => false,
            'normalization_context' => ['groups' => ['read_profile']],
        ],

        'get' => ['security' => 'is_granted("ROLE_ADMIN") or (is_granted("ROLE_USER") and user.getId() == object.getId())'],
        'put'=> [ 'security' => 'is_granted("ROLE_ADMIN") or (is_granted("ROLE_USER") and user.getId() == object.getId())'],
        'delete' => ['security' => 'is_granted("ROLE_ADMIN") or (is_granted("ROLE_USER") and user.getId() == object.getId())'],
        'user_image' => [
            'method' => 'POST',
            'path' => '/users/{id}/photo',
            'controller' => UserImageAction::class,
            'deserialize' => false,
            'openapi_context' => [
                'requestBody' => [
                    'content' => [
                        'multipart/form-data' => [
                            'schema' => [
                                'type' => 'object',
                                'properties' => [
                                    'file' => [
                                        'type' => 'string',
                                        'format' => 'binary',
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
            ],

        ],

    ]
)]
/**
 * @Vich\Uploadable
 */
// api/src/Filter/SimpleSearchFilter.php
#[ApiFilter(SimpleSearchFilter::class, properties:["firstname", "lastname", "licenseNumber" ])]
#[ApiFilter(ExistsFilter::class, properties: ['licenseNumber'])]

class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    use TimestampableEntity;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type:'integer')]
    #[Groups(['read_profile'])]
    private $id;

    #[ORM\Column(type:'string', length:180, unique:true)]
    #[Groups(['read_profile'])]
    private $email;

    #[ORM\Column(type:'json')]
    #[Groups(['read_profile'])]
    private $roles = [];

    #[ORM\Column(type:'string')]
    private $password;

    #[ORM\Column(type:'string', length:255)]
    #[Groups(['read_profile'])]
    private $lastname;

    #[ORM\Column(type:'string', length:255)]
    #[Groups(['read_profile'])]
    private $firstname;

    #[ORM\Column(type:'date')]
    #[Groups(['read_profile'])]
    private $birthdate;

    #[ORM\Column(type:'string', length:255, nullable:true)]
    #[Groups(['read_profile'])]
    private $address;

    #[ORM\Column(type:'string', length:255, nullable:true)]
    #[Groups(['read_profile'])]
    private $phone;

    #[ORM\Column(type:'string', length:255, nullable:true)]
    private $licenseNumber;

    #[ORM\Column(type:'string', length:255, nullable:true)]
    private $category;

    #[ORM\ManyToOne(targetEntity:Guardian::class, inversedBy:'users')]
    private $guardian;

    #[ORM\OneToMany(mappedBy:'user', targetEntity:ClubUser::class)]
    private $clubUsers;

    #[ORM\OneToMany(mappedBy:'user', targetEntity:Document::class)]
    private $documents;

    #[ORM\ManyToOne(targetEntity:Subscription::class, inversedBy:'users')]
    private $subscription;

    #[ORM\OneToMany(mappedBy:'user', targetEntity:Invoice::class)]
    private $invoices;

    #[ORM\OneToMany(mappedBy:'user', targetEntity:UserField::class)]
    private $userFields;

    #[ORM\Column(type:'string', length:255)]
    #[Groups(['read_profile'])]
    private $sexe;

    #[ORM\Column(type:'string', length:255, nullable:true)]
    #[Groups(["read_profile", "read_detail_profile"])]
    private $photo;

    /**
     * @Vich\UploadableField(mapping="user_image", fileNameProperty="photo")
     */
    public ? File $file = null;

    public function __construct()
    {
        $this->clubUsers = new ArrayCollection();
        $this->documents = new ArrayCollection();
        $this->invoices = new ArrayCollection();
        $this->userFields = new ArrayCollection();
    }

    public function getId() : ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
    // $this->plainPassword = null;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getBirthdate(): ?\DateTimeInterface
    {
        return $this->birthdate;
    }

    public function setBirthdate(\DateTimeInterface$birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getLicenseNumber(): ?string
    {
        return $this->licenseNumber;
    }

    public function setLicenseNumber(?string $licenseNumber): self
    {
        $this->licenseNumber = $licenseNumber;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(?string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getGuardian(): ?Guardian
    {
        return $this->guardian;
    }

    public function setGuardian(?Guardian $guardian): self
    {
        $this->guardian = $guardian;

        return $this;
    }

    /**
     * @return Collection|ClubUser[]
     */
    public function getClubUsers(): Collection
    {
        return $this->clubUsers;
    }

    public function addClubUser(ClubUser $clubUser): self
    {
        if (!$this->clubUsers->contains($clubUser)) {
            $this->clubUsers[] = $clubUser;
            $clubUser->setUser($this);
        }

        return $this;
    }

    public function removeClubUser(ClubUser $clubUser): self
    {
        if ($this->clubUsers->removeElement($clubUser)) {
            // the owning side to null (unless already changed)
            if ($clubUser->getUser() === $this) {
                $clubUser->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Document[]
     */
    public function getDocuments(): Collection
    {
        return $this->documents;
    }

    public function addDocument(Document $document): self
    {
        if (!$this->documents->contains($document)) {
            $this->documents[] = $document;
            $document->setUser($this);
        }

        return $this;
    }

    public function removeDocument(Document $document): self
    {
        if ($this->documents->removeElement($document)) {
            // set the owning side to null (unless already changed)
            if ($document->getUser() === $this) {
                $document->setUser(null);
            }
        }

        return $this;
    }

    public function getSubscription(): ?Subscription
    {
        return $this->subscription;
    }

    public function setSubscription(?Subscription $subscription): self
    {
        $this->subscription = $subscription;

        return $this;
    }

    /**
     * @return Collection|Invoice[]
     */
    public function getInvoices(): Collection
    {
        return $this->invoices;
    }

    public function addInvoice(Invoice $invoice): self
    {
        if (!$this->invoices->contains($invoice)) {
            $this->invoices[] = $invoice;
            $invoice->setUser($this);
        }

        return $this;
    }

    public function removeInvoice(Invoice $invoice): self
    {
        if ($this->invoices->removeElement($invoice)) {
            // set the owning side to null (unless already changed)
            if ($invoice->getUser() === $this) {
                $invoice->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|UserField[]
     */
    public function getUserFields(): Collection
    {
        return $this->userFields;
    }

    public function addUserField(UserField $userField): self
    {
        if (!$this->userFields->contains($userField)) {
            $this->userFields[] = $userField;
            $userField->setUser($this);
        }

        return $this;
    }

    public function removeUserField(UserField $userField): self
    {
        if ($this->userFields->removeElement($userField)) {
            // set the owning side to null (unless already changed)
            if ($userField->getUser() === $this) {
                $userField->setUser(null);
            }
        }

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->sexe;
    }

    public function setSexe(string $sexe): self
    {
        $this->sexe = $sexe;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
     */
    public function setFile(?File $file = null): void
    {
        $this->file = $file;

        if (null !== $file) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getFile(): ?File
    {
        return $this->file;
    }
}