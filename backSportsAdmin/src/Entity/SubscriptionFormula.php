<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SubscriptionFormulaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SubscriptionFormulaRepository::class)]
#[ApiResource]
class SubscriptionFormula
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $amount;

    #[ORM\OneToMany(mappedBy: 'subscription_formula', targetEntity: Subscription::class)]
    private $start_date;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $durationInMonths;

    public function __construct()
    {
        $this->start_date = new ArrayCollection();
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

    public function getAmount(): ?int
    {
        return $this->amount;
    }

    public function setAmount(?int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * @return Collection|Subscription[]
     */
    public function getStartDate(): Collection
    {
        return $this->start_date;
    }

    public function addStartDate(Subscription $startDate): self
    {
        if (!$this->start_date->contains($startDate)) {
            $this->start_date[] = $startDate;
            $startDate->setSubscriptionFormula($this);
        }

        return $this;
    }

    public function removeStartDate(Subscription $startDate): self
    {
        if ($this->start_date->removeElement($startDate)) {
            // set the owning side to null (unless already changed)
            if ($startDate->getSubscriptionFormula() === $this) {
                $startDate->setSubscriptionFormula(null);
            }
        }

        return $this;
    }

    public function getDurationInMonths(): ?int
    {
        return $this->durationInMonths;
    }

    public function setDurationInMonths(?int $durationInMonths): self
    {
        $this->durationInMonths = $durationInMonths;

        return $this;
    }
}
