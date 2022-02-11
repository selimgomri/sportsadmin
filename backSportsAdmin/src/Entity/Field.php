<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FieldRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FieldRepository::class)]
#[ApiResource]
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

    #[ORM\Column(type: 'integer', nullable: true)]
    private $position;

    #[ORM\ManyToOne(targetEntity: Club::class, inversedBy: 'fields')]
    private $club;

    #[ORM\OneToMany(mappedBy: 'field', targetEntity: UserField::class)]
    private $userFields;

    public function __construct()
    {
        $this->userFields = new ArrayCollection();
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

    public function setPosition(?int $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getClub(): ?Club
    {
        return $this->club;
    }

    public function setClub(?Club $club): self
    {
        $this->club = $club;

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
            $userField->setField($this);
        }

        return $this;
    }

    public function removeUserField(UserField $userField): self
    {
        if ($this->userFields->removeElement($userField)) {
            // set the owning side to null (unless already changed)
            if ($userField->getField() === $this) {
                $userField->setField(null);
            }
        }

        return $this;
    }
}
