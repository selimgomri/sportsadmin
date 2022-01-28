<?php

namespace App\Entity;

use App\Repository\InvoiceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InvoiceRepository::class)]
class Invoice
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: member::class, inversedBy: 'invoices')]
    private $member_id;

    #[ORM\Column(type: 'date')]
    private $date;

    #[ORM\Column(type: 'float')]
    private $price_paid;

    #[ORM\ManyToOne(targetEntity: club::class, inversedBy: 'invoices')]
    private $club_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMemberId(): ?member
    {
        return $this->member_id;
    }

    public function setMemberId(?member $member_id): self
    {
        $this->member_id = $member_id;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getPricePaid(): ?float
    {
        return $this->price_paid;
    }

    public function setPricePaid(float $price_paid): self
    {
        $this->price_paid = $price_paid;

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
}
