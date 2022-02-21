<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\User;
use App\DataFixtures\GuardianFixtures;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\SubscriptionFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture implements DependentFixtureInterface
{
    public const USER_REFERENCE = 'user-durand';
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

   
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        $user = new User();
        $user->setEmail('admin@admin.fr');

        $password = $this->hasher->hashPassword($user, '123456');
        
       

        $user->setPassword($password);
        $user->setLastname($faker->lastName);
        $user->setFirstname($faker->firstNameMale);
        $user->setRoles(['ROLE_ADMIN']);
        $user->setBirthdate($faker->dateTimeBetween('-70years', '-18years'));
        $user->setAddress($faker->address);
        $user->setLicenseNumber(123456789);
        $user->setPhone("0102030405");
        $user->setSexe("Masculin");
        $manager->persist($user);

        for ($i = 0; $i < 3; $i++) {
            $user = new User();
            $user->setEmail('member' . $i . '@member.fr');

            $password = $this->hasher->hashPassword($user, '123456');

            $user->setPassword($password);
            $user->setLastname($faker->lastName);
            $user->setFirstname($faker->firstNameFemale);
            $user->setRoles(['ROLE_USER']);
            $user->setBirthdate($faker->dateTimeBetween('-70years', '-15years'));
            $user->setAddress($faker->address);
            $user->setLicenseNumber(123456789);
            $user->setPhone("0102030405");
            $user->setSexe("Feminin");

            $manager->persist($user);
        }

        for ($i = 0; $i < 3; $i++) {
            $user = new User();
            $user->setEmail('user' . $i . '@user.fr');

            $password = $this->hasher->hashPassword($user, '123456');
        
       

            $user->setPassword($password);
            $user->setLastname($faker->lastName);
            $user->setFirstname($faker->firstNameMale);
            $user->setRoles(['ROLE_USER']);
            $user->setBirthdate($faker->dateTimeBetween('-70years', '-15years'));
            $user->setAddress($faker->address);
            $user->setLicenseNumber(123456789);
            $user->setPhone("0102030405");
            $user->setSexe("Masculin");

            $manager->persist($user);
        }

        $this->setReference(self::USER_REFERENCE, $user);

        $user->setGuardian($this->getReference(GuardianFixtures::GUARDIAN_REFERENCE));
        $user->setSubscription($this->getReference(SubscriptionFixtures::SUBSCRIPTION_REFERENCE));

        
        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            GuardianFixtures::class,
            SubscriptionFixtures::class,
        );
    }
}
