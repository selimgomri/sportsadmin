<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ClubRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\Api\ClubLogoAction;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: ClubRepository::class)]
#[ApiResource(
    normalizationContext: [ 'groups' => ['read_club'] ],
    itemOperations:[
        'get',
        'logo' => [
            'method' => 'POST',
            'path' => 'clubs/{id}/logo',
            'controller' => ClubLogoAction::class,
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
        ]
    ]
)]
/**
 * @Vich\Uploadable
 */
class Club
{
    use TimestampableEntity;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read_club'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['read_club'])]
    private $name;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['read_club'])]
    private $address;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['read_club'])]
    private $primarycolor;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['read_club'])]
    private $secondarycolor;

    #[ORM\ManyToOne(targetEntity: Sport::class, inversedBy: 'clubs')]
    #[Groups(['read_club'])]
    private $sport;

    #[ORM\OneToMany(mappedBy: 'club', targetEntity: ClubUser::class)]
    private $clubUsers;

    #[ORM\OneToMany(mappedBy: 'club', targetEntity: Field::class)]
    #[Groups(['read_club'])]
    private $fields;

    #[ORM\OneToMany(mappedBy: 'club', targetEntity: Invoice::class)]
    private $invoices;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['read_club'])]
    private $logo;

    /**
     * @Vich\UploadableField(mapping="logo", fileNameProperty="logo")
     */
    public ?File $file = null;

    public function __construct()
    {
        $this->clubUsers = new ArrayCollection();
        $this->fields = new ArrayCollection();
        $this->invoices = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPrimarycolor(): ?string
    {
        return $this->primarycolor;
    }

    public function setPrimarycolor(string $primarycolor): self
    {
        $this->primarycolor = $primarycolor;

        return $this;
    }

    public function getSecondarycolor(): ?string
    {
        return $this->secondarycolor;
    }

    public function setSecondarycolor(string $secondarycolor): self
    {
        $this->secondarycolor = $secondarycolor;

        return $this;
    }

    public function getSport(): ?Sport
    {
        return $this->sport;
    }

    public function setSport(?Sport $sport): self
    {
        $this->sport = $sport;

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
            $clubUser->setClub($this);
        }

        return $this;
    }

    public function removeClubUser(ClubUser $clubUser): self
    {
        if ($this->clubUsers->removeElement($clubUser)) {
            // set the owning side to null (unless already changed)
            if ($clubUser->getClub() === $this) {
                $clubUser->setClub(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Field[]
     */
    public function getFields(): Collection
    {
        return $this->fields;
    }

    public function addField(Field $field): self
    {
        if (!$this->fields->contains($field)) {
            $this->fields[] = $field;
            $field->setClub($this);
        }

        return $this;
    }

    public function removeField(Field $field): self
    {
        if ($this->fields->removeElement($field)) {
            // set the owning side to null (unless already changed)
            if ($field->getClub() === $this) {
                $field->setClub(null);
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
            $invoice->setClub($this);
        }

        return $this;
    }

    public function removeInvoice(Invoice $invoice): self
    {
        if ($this->invoices->removeElement($invoice)) {
            // set the owning side to null (unless already changed)
            if ($invoice->getClub() === $this) {
                $invoice->setClub(null);
            }
        }

        return $this;
    }

    public function getLogo(): string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

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
