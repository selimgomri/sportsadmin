<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\UserImage;
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
        $uploadedFile = $request->files->get('image');

        if (!$uploadedFile) {
            throw new BadRequestHttpException('image is required');
        }
        $userImage = new UserImage();
        $userImage->setImage($uploadedFile);
        $userImage->setPath($uploadedFile->getClientOriginalName());
        $userImage->setUser($data);
        $data->addPhoto($userImage);

        return $data;
    }
}
