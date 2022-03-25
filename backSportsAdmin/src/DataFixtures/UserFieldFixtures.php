<?php

namespace App\DataFixtures;

use App\DataFixtures\FieldFixtures;
use App\DataFixtures\UserFixtures;
use App\Entity\UserField;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class UserFieldFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {

        $entree = new UserField();

        $entree->setValue("hello");

        $entree->setField($this->getReference(FieldFixtures::FIELD_REFERENCE));
        $entree->setUser($this->getReference(UserFixtures::USER_REFERENCE));

        $manager->persist($entree);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            FieldFixtures::class,
            UserFixtures::class,
        );
    }
}