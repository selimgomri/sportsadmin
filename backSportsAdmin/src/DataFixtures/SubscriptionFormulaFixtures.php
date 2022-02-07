<?php

namespace App\DataFixtures;

use App\Entity\SubscriptionFormula;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SubscriptionFormulaFixtures extends Fixture
{
    public const SUBSCRIPTIONFORMULA_REFERENCE = 'subscriptionFormula-id';

    public function load(ObjectManager $manager): void
    {
        $createdDate = new \DateTime(10 / 10 / 2017);
        $updatedDate = new \DateTime(10 / 10 / 2019);

        $formula = new SubscriptionFormula();
        $formula->setName('1 an');
        $formula->setAmount(129.5);
        $formula->setCreatedAt($createdDate);
        $formula->setUpdatedAt($updatedDate);

        $this->setReference(self::SUBSCRIPTIONFORMULA_REFERENCE, $formula);

        $manager->persist($formula);

        $manager->flush();
    }
}