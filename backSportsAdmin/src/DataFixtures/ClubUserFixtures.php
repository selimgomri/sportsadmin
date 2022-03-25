<?php

namespace App\DataFixtures;

use App\DataFixtures\ClubFixtures;
use App\DataFixtures\UserFixtures;
use App\Entity\ClubUser;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ClubUserFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $clubMember = new ClubUser();

        $clubMember->setClub($this->getReference(ClubFixtures::CLUB_REFERENCE));
        $clubMember->setUser($this->getReference(UserFixtures::USER_REFERENCE));

        $manager->persist($clubMember);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            ClubFixtures::class,
            UserFixtures::class,
        );
    }
}