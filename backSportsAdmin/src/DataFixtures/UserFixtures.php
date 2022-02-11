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
        $user->setCategoryLevel(['pro']);
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

        $birthdate2 = new \DateTime(1999);

        $user2 = new User();

        $user2->setLastname("durand");
        $user2->setFirstname("henry");
        $user2->setBirthdate($birthdate2);
        $user2->setCategoryLevel(['amateur']);
        $user2->setEmail("durand@gmail.com");
        $user2->setPhone("0607080910");
        $user2->setGender("m");
        $user2->setLicenseNumber("124a458b780c");
        $user2->setPassword("abcabcee");
        $user2->setRoles(['user']);

        $this->setReference(self::USER_REFERENCE, $user2);

        $user2->setGuardianId($this->getReference(GuardianFixtures::GUARDIAN_REFERENCE));
        $user2->setSubscriptionId($this->getReference(SubscriptionFixtures::SUBSCRIPTION_REFERENCE));

        $manager->persist($user2);

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