<?php

namespace App\Repository;

use App\Entity\TestSimple;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TestSimple|null find($id, $lockMode = null, $lockVersion = null)
 * @method TestSimple|null findOneBy(array $criteria, array $orderBy = null)
 * @method TestSimple[]    findAll()
 * @method TestSimple[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TestSimpleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TestSimple::class);
    }

    // /**
    //  * @return TestSimple[] Returns an array of TestSimple objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TestSimple
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
