<?php

namespace App\Entity;

use App\Repository\ClubMemberRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ClubMemberRepository::class)]
class ClubMember
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: club::class, inversedBy: 'clubMembers')]
    private $club_id;

    #[ORM\ManyToOne(targetEntity: member::class, inversedBy: 'clubMembers')]
    private $member_id;

    #[ORM\ManyToOne(targetEntity: user::class, inversedBy: 'clubmembers')]
    private $user_id;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getMemberId(): ?member
    {
        return $this->member_id;
    }

    public function setMemberId(?member $member_id): self
    {
        $this->member_id = $member_id;

        return $this;
    }

    public function getUserId(): ?user
    {
        return $this->user_id;
    }

    public function setUserId(?user $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }
}
