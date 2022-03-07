<?php

namespace App\Controller\Api;

use App\Entity\Club;
use App\Entity\Logo;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

#[AsController]
final class ClubLogoAction extends AbstractController
{
    public function __invoke(club $data, Request $request): Club
    {
        $uploadedFile = $request->files->get('file');

        if (!$uploadedFile) {
            throw new BadRequestHttpException('image is required');
        }

        $data->setFile($uploadedFile);

        return $data;
    }
}
