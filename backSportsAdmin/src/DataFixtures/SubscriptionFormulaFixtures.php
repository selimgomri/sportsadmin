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

        $formula = new SubscriptionFormula();
        $formula->setName('1 an');
        $formula->setAmount(129);

        $this->setReference(self::SUBSCRIPTIONFORMULA_REFERENCE, $formula);

        $manager->persist($formula);

        $manager->flush();
    }
}