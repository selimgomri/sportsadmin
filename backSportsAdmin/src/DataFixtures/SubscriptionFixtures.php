<?php

namespace App\DataFixtures;

use App\DataFixtures\SubscriptionFormulaFixtures;
use App\Entity\Subscription;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class SubscriptionFixtures extends Fixture implements DependentFixtureInterface
{
    public const SUBSCRIPTION_REFERENCE = 'subscription-id';

    public function load(ObjectManager $manager): void
    {
        $start = new \DateTime(2020);
        $end = new \DateTime(10 / 10 / 2021);

        $subscription = new Subscription();
        $subscription->setType("annuelle");
        $subscription->setAmount(129.5);
        $subscription->setStartDate($start);
        $subscription->setEndDate($end);

        $this->setReference(self::SUBSCRIPTION_REFERENCE, $subscription);
        $subscription->setsubscriptionFormula($this->getReference(SubscriptionFormulaFixtures::SUBSCRIPTIONFORMULA_REFERENCE));

        $manager->persist($subscription);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            SubscriptionFormulaFixtures::class,
        );
    }
}