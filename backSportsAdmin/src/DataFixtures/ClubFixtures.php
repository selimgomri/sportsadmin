<?php

namespace App\DataFixtures;

use App\DataFixtures\SportFixtures;
use App\Entity\Club;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ClubFixtures extends Fixture implements DependentFixtureInterface
{
    public const CLUB_REFERENCE = 'club-id';

    public function load(ObjectManager $manager): void
    {

        $name = "le club des cinq";
        $address = "2 rue du bouquin";
        $primary = "bleu";
        $secondary = "jaune";

        $club = new Club();
        $club->setName($name);
        $club->setAddress($address);
        $club->setPrimarycolor($primary);
        $club->setSecondarycolor($secondary);

        $club->setSportId($this->getReference(SportFixtures::SPORT_REFERENCE));

        $this->setReference(self::CLUB_REFERENCE, $club);

        $manager->persist($club);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            SportFixtures::class,
        );
    }
}