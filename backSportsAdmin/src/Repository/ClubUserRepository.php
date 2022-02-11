<?php

namespace App\Repository;

use App\Entity\ClubUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ClubUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method ClubUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method ClubUser[]    findAll()
 * @method ClubUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClubUserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ClubUser::class);
    }

    // /**
    //  * @return ClubUser[] Returns an array of ClubUser objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ClubUser
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
