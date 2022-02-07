<?php

namespace App\Entity;

use App\Repository\MemberRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MemberRepository::class)]
class Member
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $lastname;

    #[ORM\Column(type: 'string', length: 255)]
    private $firstname;

    #[ORM\Column(type: 'date')]
    private $birthdate;

    #[ORM\Column(type: 'string', length: 255)]
    private $address;

    #[ORM\Column(type: 'string', length: 255)]
    private $email;

    #[ORM\Column(type: 'integer')]
    private $phone;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $gender;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $license_number;

    #[ORM\Column(type: 'string', length: 255)]
    private $password;

    #[ORM\Column(type: 'array')]
    private $role = [];

    #[ORM\OneToMany(mappedBy: 'member_id', targetEntity: Document::class)]
    private $documents;

    #[ORM\OneToMany(mappedBy: 'member_id', targetEntity: Invoice::class)]
    private $invoices;

    #[ORM\ManyToOne(targetEntity: Guardian::class, inversedBy: 'members')]
    private $parent_id;

    #[ORM\ManyToOne(targetEntity: subscription::class, inversedBy: 'members')]
    private $subscription_id;

    #[ORM\OneToMany(mappedBy: 'member_id', targetEntity: ClubMember::class)]
    private $clubMembers;

    #[ORM\OneToMany(mappedBy: 'member_id', targetEntity: MemberField::class)]
    private $memberFields;

    public function __construct()
    {
        $this->documents = new ArrayCollection();
        $this->invoices = new ArrayCollection();
        $this->clubMembers = new ArrayCollection();
        $this->memberFields = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
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

    public function getPhone(): ?int
    {
        return $this->phone;
    }

    public function setPhone(int $phone): self
    {
        $this->phone = $phone;

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

    public function getLicenseNumber(): ?string
    {
        return $this->license_number;
    }

    public function setLicenseNumber(?string $license_number): self
    {
        $this->license_number = $license_number;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getRole(): ?array
    {
        return $this->role;
    }

    public function setRole(array $role): self
    {
        $this->role = $role;

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
            $document->setMemberId($this);
        }

        return $this;
    }

    public function removeDocument(Document $document): self
    {
        if ($this->documents->removeElement($document)) {
            // set the owning side to null (unless already changed)
            if ($document->getMemberId() === $this) {
                $document->setMemberId(null);
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
            $invoice->setMemberId($this);
        }

        return $this;
    }

    public function removeInvoice(Invoice $invoice): self
    {
        if ($this->invoices->removeElement($invoice)) {
            // set the owning side to null (unless already changed)
            if ($invoice->getMemberId() === $this) {
                $invoice->setMemberId(null);
            }
        }

        return $this;
    }

    public function getParentId(): ?guardian
    {
        return $this->parent_id;
    }

    public function setParentId(?guardian $parent_id): self
    {
        $this->parent_id = $parent_id;

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
            $clubMember->setMemberId($this);
        }

        return $this;
    }

    public function removeClubMember(ClubMember $clubMember): self
    {
        if ($this->clubMembers->removeElement($clubMember)) {
            // set the owning side to null (unless already changed)
            if ($clubMember->getMemberId() === $this) {
                $clubMember->setMemberId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|MemberField[]
     */
    public function getMemberFields(): Collection
    {
        return $this->memberFields;
    }

    public function addMemberField(MemberField $memberField): self
    {
        if (!$this->memberFields->contains($memberField)) {
            $this->memberFields[] = $memberField;
            $memberField->setMemberId($this);
        }

        return $this;
    }

    public function removeMemberField(MemberField $memberField): self
    {
        if ($this->memberFields->removeElement($memberField)) {
            // set the owning side to null (unless already changed)
            if ($memberField->getMemberId() === $this) {
                $memberField->setMemberId(null);
            }
        }

        return $this;
    }
}
