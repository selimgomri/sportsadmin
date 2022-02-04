<?php

namespace App\DataFixtures;

use App\DataFixtures\GuardianFixtures;
use App\DataFixtures\SubscriptionFixtures;
use App\Entity\Member;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class MemberFixtures extends Fixture implements DependentFixtureInterface
{
    public const MEMBER_REFERENCE = 'member-id';

    public function load(ObjectManager $manager): void
    {
        $birthdate = new \DateTime(10 / 10 / 1996);

        for ($count = 0; $count < 20; $count++) {
            $member = new Member();

            $member->setLastname("dupond");
            $member->setFirstname("denis");
            $member->setBirthdate($birthdate);
            $member->setAddress("chateau moulinsart");
            $member->setEmail("dupond@gmail");
            $member->setPhone("0102030405");
            $member->setGender("m");
            $member->setLicenseNumber("123a456b789c");
            $member->setPassword("abcabcdd");
            $member->setRole(['admin']);

            $member->setParentId($this->getReference(GuardianFixtures::GUARDIAN_REFERENCE));
            $member->setSubscriptionId($this->getReference(SubscriptionFixtures::SUBSCRIPTION_REFERENCE));

            $this->addReference(self::MEMBER_REFERENCE, $member);

            $manager->persist($member);
        }
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