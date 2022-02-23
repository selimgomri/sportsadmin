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

        for ($i=0;$i<10;$i++) {
            $formula = new SubscriptionFormula();
            $formula->setName($i);
            $formula->setAmount(100+$i);
            $formula->setDurationInMonths($i);

            $this->setReference(self::SUBSCRIPTIONFORMULA_REFERENCE, $formula);

            $manager->persist($formula);
        }

        $manager->flush();
    }
}