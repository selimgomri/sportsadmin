<?php

namespace App\DataFixtures;

use App\DataFixtures\ClubFixtures;
use App\DataFixtures\UserFixtures;
use App\Entity\Invoice;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class InvoiceFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTime(10 / 10 / 2021);

        $invoice = new Invoice();

        $invoice->setDate($date);
        $invoice->setPricePaid(129.50);

        $invoice->setUser($this->getReference(UserFixtures::USER_REFERENCE));
        $invoice->setClub($this->getReference(ClubFixtures::CLUB_REFERENCE));

        $manager->persist($invoice);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            ClubFixtures::class,
        );
    }
}