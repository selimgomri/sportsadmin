<?php

namespace App\DataFixtures;

use App\DataFixtures\FieldFixtures;
use App\DataFixtures\MemberFixtures;
use App\DataFixtures\UserFixtures;
use App\Entity\MemberField;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class MemberFieldFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $createdDate = new \DateTime(10 / 10 / 2017);
        $updatedDate = new \DateTime(10 / 10 / 2019);

        $entree = new MemberField();

        $entree->setValue("hello");
        $entree->setCreatedAt($createdDate);
        $entree->setUpdatedAt($updatedDate);

        $entree->setMemberId($this->getReference(MemberFixtures::MEMBER_REFERENCE));
        $entree->setFieldId($this->getReference(FieldFixtures::FIELD_REFERENCE));
        $entree->setUserId($this->getReference(UserFixtures::USER_REFERENCE));

        $manager->persist($entree);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            MemberFixtures::class,
            FieldFixtures::class,
            UserFixtures::class,
        );
    }
}