<?php

namespace App\DataFixtures;

use App\Entity\Guardian;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker;

class GuardianFixtures extends Fixture
{
    public const GUARDIAN_REFERENCE = 'guardian-id';

    public function load(ObjectManager $manager): void
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($count = 0; $count < 5; $count++) {

            $guardian = new Guardian();
            $guardian->setLastname($faker->lastName);
            $guardian->setFirstname($faker->firstName);
            $guardian->setAddress($faker->address);
            $guardian->setEmail($faker->freeEmail);
            $guardian->setPhone($faker->phoneNumber);

            $this->setReference(self::GUARDIAN_REFERENCE, $guardian);

            $manager->persist($guardian);
        }
        $manager->flush();
    }
}