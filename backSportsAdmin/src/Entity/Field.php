<?php

namespace App\Entity;

use App\Repository\FieldRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FieldRepository::class)]
class Field
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $label;

    #[ORM\Column(type: 'string', length: 255)]
    private $type;

    #[ORM\Column(type: 'json', nullable: true)]
    private $choice = [];

    #[ORM\Column(type: 'boolean')]
    private $required;

    #[ORM\Column(type: 'integer')]
    private $position;

    #[ORM\ManyToOne(targetEntity: club::class, inversedBy: 'fields')]
    private $club_id;

    #[ORM\OneToMany(mappedBy: 'field_id', targetEntity: MemberField::class)]
    private $memberFields;

    public function __construct()
    {
        $this->memberFields = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getChoice(): ?array
    {
        return $this->choice;
    }

    public function setChoice(?array $choice): self
    {
        $this->choice = $choice;

        return $this;
    }

    public function getRequired(): ?bool
    {
        return $this->required;
    }

    public function setRequired(bool $required): self
    {
        $this->required = $required;

        return $this;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(int $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getClubId(): ?club
    {
        return $this->club_id;
    }

    public function setClubId(?club $club_id): self
    {
        $this->club_id = $club_id;

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
            $memberField->setFieldId($this);
        }

        return $this;
    }

    public function removeMemberField(MemberField $memberField): self
    {
        if ($this->memberFields->removeElement($memberField)) {
            // set the owning side to null (unless already changed)
            if ($memberField->getFieldId() === $this) {
                $memberField->setFieldId(null);
            }
        }

        return $this;
    }
}
