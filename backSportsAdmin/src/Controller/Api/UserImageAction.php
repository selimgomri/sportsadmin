<?php

namespace App\Controller\Api;

use App\Entity\User;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

#[AsController]
final class UserImageAction extends AbstractController
{
    public function __invoke(User $data, Request $request): User
    {
        $uploadedFile = $request->files->get('file');

        if (!$uploadedFile) {
            throw new BadRequestHttpException('image is required');
        }
        $data->setFile($uploadedFile);

        return $data;
    }
}
