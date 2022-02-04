<?php

namespace App\DataFixtures;

use App\Entity\Guardian;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class GuardianFixtures extends Fixture
{
    public const GUARDIAN_REFERENCE = 'guardian-id';

    public function load(ObjectManager $manager): void
    {
        $createdDate = new \DateTime(10 / 10 / 2017);
        $updatedDate = new \DateTime(10 / 10 / 2019);

        for ($count = 0; $count < 5; $count++) {

            $guardian = new Guardian();
            $guardian->setLastname("dupond");
            $guardian->setFirstname("denis");
            $guardian->setAddress("chateau moulinsart");
            $guardian->setEmail("dupond@gmail");
            $guardian->setPhone("0102030405");
            $guardian->setCreatedAt($createdDate);
            $guardian->setUpdatedAt($updatedDate);

            $this->addReference(self::GUARDIAN_REFERENCE, $guardian);

            $manager->persist($guardian);
        }
        $manager->flush();
    }
}