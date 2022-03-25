<?php

namespace App\Repository;

use App\Entity\UserField;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserField|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserField|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserField[]    findAll()
 * @method UserField[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserFieldRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserField::class);
    }

    // /**
    //  * @return UserField[] Returns an array of UserField objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserField
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
