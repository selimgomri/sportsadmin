<?php

namespace App\DataFixtures;

use App\DataFixtures\GuardianFixtures;
use App\DataFixtures\SubscriptionFixtures;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture implements DependentFixtureInterface
{
    public const USER_REFERENCE = 'user-durand';

    public function load(ObjectManager $manager): void
    {
        $birthdate = new \DateTime(1996);

        $user = new User();

        $user->setLastname("dupond");
        $user->setFirstname("denis");
        $user->setBirthdate($birthdate);
        $user->setCategoryLevel(['admin']);
        $user->setEmail("dupond@gmail.com");
        $user->setPhone("0102030405");
        $user->setGender("m");
        $user->setLicenseNumber("123a456b789c");
        $user->setPassword("abcabcdd");
        $user->setRoles(['admin']);

        $this->setReference(self::USER_REFERENCE, $user);

        $user->setGuardianId($this->getReference(GuardianFixtures::GUARDIAN_REFERENCE));
        $user->setSubscriptionId($this->getReference(SubscriptionFixtures::SUBSCRIPTION_REFERENCE));

        $manager->persist($user);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            GuardianFixtures::class,
            SubscriptionFixtures::class,
        );
    }
}