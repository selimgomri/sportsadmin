<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ClubRepository;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;

#[ORM\Entity(repositoryClass: ClubRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read_tag' ]],
    denormalizationContext: ['groups' => ['write_tag']]
)]
#[ApiFilter(OrderFilter::class, properties: ['id', 'name'], arguments: ['orderParameterName' => 'order'])]
class Club
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read_tag'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['read_tag', 'write_tag'])]
    private $name;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $logo;

    #[ORM\Column(type: 'string', length: 255)]
    private $address;

    #[ORM\Column(type: 'string', length: 255)]
    private $primarycolor;

    #[ORM\Column(type: 'string', length: 255)]
    private $secondarycolor;

    #[ORM\ManyToOne(targetEntity: sport::class, inversedBy: 'clubs')]
    #[ORM\JoinColumn(nullable: false)]
    private $sport_id;

    #[ORM\OneToMany(mappedBy: 'club_id', targetEntity: Field::class)]
    private $fields;

    #[ORM\OneToMany(mappedBy: 'club_id', targetEntity: Invoice::class)]
    private $invoices;

    #[ORM\OneToMany(mappedBy: 'club_id', targetEntity: ClubMember::class)]
    private $clubMembers;

    public function __construct()
    {
        $this->fields = new ArrayCollection();
        $this->invoices = new ArrayCollection();
        $this->clubMembers = new ArrayCollection();
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

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(?string $logo): self
    {
        $this->logo = $logo;

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

    public function getSportId(): ?sport
    {
        return $this->sport_id;
    }

    public function setSportId(?sport $sport_id): self
    {
        $this->sport_id = $sport_id;

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
            $field->setClubId($this);
        }

        return $this;
    }

    public function removeField(Field $field): self
    {
        if ($this->fields->removeElement($field)) {
            // set the owning side to null (unless already changed)
            if ($field->getClubId() === $this) {
                $field->setClubId(null);
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
            $invoice->setClubId($this);
        }

        return $this;
    }

    public function removeInvoice(Invoice $invoice): self
    {
        if ($this->invoices->removeElement($invoice)) {
            // set the owning side to null (unless already changed)
            if ($invoice->getClubId() === $this) {
                $invoice->setClubId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ClubMember[]
     */
    public function getClubMembers(): Collection
    {
        return $this->clubMembers;
    }

    public function addClubMember(ClubMember $clubMember): self
    {
        if (!$this->clubMembers->contains($clubMember)) {
            $this->clubMembers[] = $clubMember;
            $clubMember->setClubId($this);
        }

        return $this;
    }

    public function removeClubMember(ClubMember $clubMember): self
    {
        if ($this->clubMembers->removeElement($clubMember)) {
            // set the owning side to null (unless already changed)
            if ($clubMember->getClubId() === $this) {
                $clubMember->setClubId(null);
            }
        }

        return $this;
    }
}
