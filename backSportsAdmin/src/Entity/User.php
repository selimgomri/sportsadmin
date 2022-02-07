<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private $email;

    #[ORM\Column(type: 'json')]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    private $password;

    #[ORM\Column(type: 'string', length: 255)]
    private $lastname;

    #[ORM\Column(type: 'string', length: 255)]
    private $firstname;

    #[ORM\Column(type: 'date')]
    private $birthdate;

    #[ORM\Column(type: 'string', length: 30)]
    private $phone;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $license_number;

    #[ORM\ManyToOne(targetEntity: Guardian::class, inversedBy: 'users')]
    private $guardian_id;

    #[ORM\ManyToOne(targetEntity: Subscription::class, inversedBy: 'users')]
    private $subscription_id;

    #[ORM\OneToMany(mappedBy: 'user_id', targetEntity: Document::class)]
    private $documents;

    #[ORM\OneToMany(mappedBy: 'user_id', targetEntity: Invoice::class)]
    private $invoices;

    #[ORM\OneToMany(mappedBy: 'user_id', targetEntity: Clubmember::class)]
    private $clubmembers;

    #[ORM\OneToMany(mappedBy: 'user_id', targetEntity: Memberfield::class)]
    private $memberfields;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $gender;

    #[ORM\Column(type: 'json', nullable: true)]
    private $category_level = [];

    public function __construct()
    {
        $this->documents = new ArrayCollection();
        $this->invoices = new ArrayCollection();
        $this->clubmembers = new ArrayCollection();
        $this->memberfields = new ArrayCollection();
    }

    public function getId(): ?int
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
     * @return string the hashed password for this user
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

    public function setBirthdate(\DateTimeInterface $birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getLicenseNumber(): ?string
    {
        return $this->license_number;
    }

    public function setLicenseNumber(?string $license_number): self
    {
        $this->license_number = $license_number;

        return $this;
    }

    public function getGuardianId(): ?guardian
    {
        return $this->guardian_id;
    }

    public function setGuardianId(?guardian $guardian_id): self
    {
        $this->guardian_id = $guardian_id;

        return $this;
    }

    public function getSubscriptionId(): ?subscription
    {
        return $this->subscription_id;
    }

    public function setSubscriptionId(?subscription $subscription_id): self
    {
        $this->subscription_id = $subscription_id;

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
            $document->setUserId($this);
        }

        return $this;
    }

    public function removeDocument(Document $document): self
    {
        if ($this->documents->removeElement($document)) {
            // set the owning side to null (unless already changed)
            if ($document->getUserId() === $this) {
                $document->setUserId(null);
            }
        }

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
            $invoice->setUserId($this);
        }

        return $this;
    }

    public function removeInvoice(Invoice $invoice): self
    {
        if ($this->invoices->removeElement($invoice)) {
            // set the owning side to null (unless already changed)
            if ($invoice->getUserId() === $this) {
                $invoice->setUserId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Clubmember[]
     */
    public function getClubmembers(): Collection
    {
        return $this->clubmembers;
    }

    public function addClubmember(Clubmember $clubmember): self
    {
        if (!$this->clubmembers->contains($clubmember)) {
            $this->clubmembers[] = $clubmember;
            $clubmember->setUserId($this);
        }

        return $this;
    }

    public function removeClubmember(Clubmember $clubmember): self
    {
        if ($this->clubmembers->removeElement($clubmember)) {
            // set the owning side to null (unless already changed)
            if ($clubmember->getUserId() === $this) {
                $clubmember->setUserId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Memberfield[]
     */
    public function getMemberfields(): Collection
    {
        return $this->memberfields;
    }

    public function addMemberfield(Memberfield $memberfield): self
    {
        if (!$this->memberfields->contains($memberfield)) {
            $this->memberfields[] = $memberfield;
            $memberfield->setUserId($this);
        }

        return $this;
    }

    public function removeMemberfield(Memberfield $memberfield): self
    {
        if ($this->memberfields->removeElement($memberfield)) {
            // set the owning side to null (unless already changed)
            if ($memberfield->getUserId() === $this) {
                $memberfield->setUserId(null);
            }
        }

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(?string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getCategoryLevel(): ?array
    {
        return $this->category_level;
    }

    public function setCategoryLevel(?array $category_level): self
    {
        $this->category_level = $category_level;

        return $this;
    }
}
