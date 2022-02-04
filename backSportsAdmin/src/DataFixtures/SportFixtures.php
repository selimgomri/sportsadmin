<?php

namespace App\DataFixtures;

use App\Entity\Sport;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SportFixtures extends Fixture
{
    public const SPORT_REFERENCE = 'sport-id';

    public function load(ObjectManager $manager): void
    {
        $sport = new Sport();
        $sport->setName("rugby");

        $this->addReference(self::SPORT_REFERENCE, $sport);

        $manager->persist($sport);

        $manager->flush();
    }
}