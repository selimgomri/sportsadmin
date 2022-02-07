<?php

namespace App\DataFixtures;

use App\DataFixtures\ClubFixtures;
use App\DataFixtures\MemberFixtures;
use App\DataFixtures\UserFixtures;
use App\Entity\ClubMember;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ClubMemberFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $clubMember = new ClubMember();

        $clubMember->setClubId($this->getReference(ClubFixtures::CLUB_REFERENCE));
        $clubMember->setUserId($this->getReference(UserFixtures::USER_REFERENCE));
        $clubMember->setMemberId($this->getReference(MemberFixtures::MEMBER_REFERENCE));

        $manager->persist($clubMember);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            ClubFixtures::class,
            MemberFixtures::class,
            UserFixtures::class,
        );
    }
}