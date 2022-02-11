<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ClubRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ClubRepository::class)]
#[ApiResource]
class Club
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $logo;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $address;

    #[ORM\Column(type: 'string', length: 255)]
    private $primarycolor;

    #[ORM\Column(type: 'string', length: 255)]
    private $secondarycolor;

    #[ORM\ManyToOne(targetEntity: Sport::class, inversedBy: 'clubs')]
    private $sport;

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
}
