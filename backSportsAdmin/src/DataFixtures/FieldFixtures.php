<?php

namespace App\DataFixtures;

use App\DataFixtures\ClubFixtures;
use App\Entity\Field;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class FieldFixtures extends Fixture implements DependentFixtureInterface
{
    public const FIELD_REFERENCE = 'field-id';

    public function load(ObjectManager $manager): void
    {
        $field = new Field();

        $field->setLabel("titre");
        $field->setType("text");
        $field->setChoice(["options"]);
        $field->setRequired(0);
        $field->setPosition(1);

        $field->setClubId($this->getReference(ClubFixtures::CLUB_REFERENCE));
        $this->setReference(self::FIELD_REFERENCE, $field);

        $manager->persist($field);

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            ClubFixtures::class,
        );
    }
}