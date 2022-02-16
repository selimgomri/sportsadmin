<?php

namespace App\DataFixtures;

use App\DataFixtures\UserFixtures;
use App\Entity\Document;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class DocumentFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {

        $doc = new Document();
        $doc->setType("facture");
        $doc->setName("juin 2021");

        $doc->setUser($this->getReference(UserFixtures::USER_REFERENCE));

        $manager->persist($doc);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
        );
    }
}