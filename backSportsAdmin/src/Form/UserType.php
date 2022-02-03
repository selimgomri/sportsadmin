<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            ->add('roles', CollectionType::class, [
                'entry_type' => ChoiceType::class,
                'allow_add' => true,
                'entry_options' => ['choices' => [
                    'ROLE_ADMIN' => 'ROLE_ADMIN',
                    'ROLE_USER' => 'ROLE_USER',
                ]
]
                
            ])
            ->add('password')
            ->add('lastname')
            ->add('firstname')
            ->add('birthdate')
            ->add('phone')
            ->add('license_number')
            ->add('gender')
            ->add('category_level')
            ->add('guardian_id')
            ->add('subscription_id')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
