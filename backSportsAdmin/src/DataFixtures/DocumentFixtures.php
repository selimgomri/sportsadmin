<?php

namespace App\DataFixtures;

use App\DataFixtures\MemberFixtures;
use App\DataFixtures\UserFixtures;
use App\Entity\Document;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class DocumentFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $createdDate = new \DateTime(10 / 10 / 2017);
        $updatedDate = new \DateTime(10 / 10 / 2019);

        $doc = new Document();
        $doc->setType("facture");
        $doc->setName("juin 2021");
        $doc->setCreatedAt($createdDate);
        $doc->setUpdatedAt($updatedDate);

        $doc->setMemberId($this->getReference(MemberFixtures::MEMBER_REFERENCE));
        $doc->setUserId($this->getReference(UserFixtures::USER_REFERENCE));

        $manager->persist($doc);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            MemberFixtures::class,
            UserFixtures::class,
        );
    }
}