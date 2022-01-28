<?php

namespace App\Entity;

use App\Repository\MemberFieldRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MemberFieldRepository::class)]
class MemberField
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: member::class, inversedBy: 'memberFields')]
    private $member_id;

    #[ORM\ManyToOne(targetEntity: field::class, inversedBy: 'memberFields')]
    private $field_id;

    #[ORM\Column(type: 'string', length: 255)]
    private $value;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created_at;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updated_at;

    #[ORM\ManyToOne(targetEntity: user::class, inversedBy: 'memberfields')]
    private $user_id;

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

    public function getFieldId(): ?field
    {
        return $this->field_id;
    }

    public function setFieldId(?field $field_id): self
    {
        $this->field_id = $field_id;

        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(?\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

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
