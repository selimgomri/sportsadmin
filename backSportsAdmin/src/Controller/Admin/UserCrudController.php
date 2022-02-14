<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    
    public function configureFields(string $pageUser): iterable
    {
        yield Field::new('email');
        yield Field::new('lastname');
        yield Field::new('firstname');
        yield Field::new('birthdate');
        yield Field::new('address');
    }
}
