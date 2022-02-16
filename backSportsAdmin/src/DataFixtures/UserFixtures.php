<?php

namespace App\DataFixtures;

// src/DataFixtures/AppFixtures.php
use App\Entity\User;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    // ...
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setEmail('admin@admin.fr');

        $password = $this->hasher->hashPassword($user, 'pass_1234');
        $birthdate = new DateTime();
       

        $user->setPassword($password);
        $user->setLastname('Doe');
        $user->setFirstname('John');
        $user->setRoles(['ROLE_ADMIN']);
        $user->setBirthdate($birthdate);
        $user->setAddress('rue des École');
        

        $manager->persist($user);
        $manager->flush();
    }
}
