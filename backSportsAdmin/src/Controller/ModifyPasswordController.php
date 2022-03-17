<?php

namespace App\Controller;

use App\Entity\ChangePassword;
use App\Form\ModifyPasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class ModifyPasswordController extends AbstractController
{

    public function __construct(EntityManagerInterface $em)
    {
        $this->entityManager = $em;
    }

    #[Route('/modify', name:'modify')]
    public function edit(Request $request, UserPasswordHasherInterface $passwordEncoder)
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();
        $changePassword = new ChangePassword();        
        // rattachement du formulaire avec la class changePassword
        $form = $this->createForm(ModifyPasswordType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $newpwd = $form->get('Password')['first']->getData();

            $newEncodedPassword = $passwordEncoder->hashPassword($user, $newpwd);
            $user->setPassword($newEncodedPassword);

            $this->entityManager->flush();
            $this->addFlash('notice', 'Votre mot de passe à bien été changé !');

            return $this->redirectToRoute('home');
        }

        return $this->render('modify_password/modify.html.twig', array(
            'modifyForm' => $form->createView(),
            'user' => $user,
        ));
    }
}