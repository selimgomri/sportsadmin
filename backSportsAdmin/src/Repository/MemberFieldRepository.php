<?php

namespace App\Repository;

use App\Entity\MemberField;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MemberField|null find($id, $lockMode = null, $lockVersion = null)
 * @method MemberField|null findOneBy(array $criteria, array $orderBy = null)
 * @method MemberField[]    findAll()
 * @method MemberField[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MemberFieldRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MemberField::class);
    }

    // /**
    //  * @return MemberField[] Returns an array of MemberField objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MemberField
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
