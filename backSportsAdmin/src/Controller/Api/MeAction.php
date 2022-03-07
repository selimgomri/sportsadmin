<?php

namespace App\Controller\Api;

use Symfony\Component\SerializerInterface;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\SerializerInterface as SerializerSerializerInterface;

#[AsController]
class MeAction extends AbstractController
{
    public function __construct(private Security $security, private SerializerSerializerInterface $serializer)
    {
    }

    public function __invoke(): User
    {
        return $this->security->getUser();
    }
}
