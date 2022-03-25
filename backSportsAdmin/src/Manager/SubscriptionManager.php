<?php

namespace App\Manager;

use App\Entity\Invoice;
use App\Entity\Subscription;
use App\Entity\User;
use App\Services\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class SubscriptionManager
{
    /**
     * @var EntityManagerInterface
     */
    protected $em;

    /**
     * @var StripeService
     */
    protected $stripeService;

    /**
     * @param EntityManagerInterface $entityManager
     * @param StripeService $stripeService
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        StripeService $stripeService
    ) {
        $this->em = $entityManager;
        $this->stripeService = $stripeService;
    }

    public function getSubscriptions()
    {
        return $this->em->getRepository(Subscription::class)
            ->findAll();
    }

    /**
     * @param User $user
     * @return mixed
     */
    public function countSoldeInvoice(User $user)
    {
        return $this->em->getRepository(Invoice::class)
            ->countSoldeInvoice($user);
    }

    public function getInvoices(User $user)
    {
        return $this->em->getRepository(Invoice::class)
            ->findByUser($user);
    }

    public function intentSecret(Subscription $subscription)
    {
        $intent = $this->stripeService->paymentIntent($subscription);

        return $intent['client_secret'] ?? null;
    }

    /**
     * @param array $stripeParameter
     * @param Subscription $subscription
     * @return array|null
     */
    public function stripe(array $stripeParameter, Subscription $subscription)
    {
        $resource = null;
        $data = $this->stripeService->stripe($stripeParameter, $subscription);

        if($data) {
            $resource = [
                'stripeBrand' => $data['charges']['data'][0]['payment_method_details']['card']['brand'],
                'stripeLast4' => $data['charges']['data'][0]['payment_method_details']['card']['last4'],
                'stripeId' => $data['charges']['data'][0]['id'],
                'stripeStatus' => $data['charges']['data'][0]['status'],
                'stripeToken' => $data['client_secret']
            ];
        }

        return $resource;
    }

    /**
     * @param array $resource
     * @param Subscription $subscription
     * @param User $user
     */
    public function createInvoice(array $resource, Subscription $subscription, User $user)
    {
        $invoice = new Invoice();
        $invoice->setUser($user);
        $invoice->setSubscription($subscription);
        $invoice->setPrice($subscription->getPrice());
        $invoice->setReference(uniqid('', false));
        $invoice->setBrandStripe($resource['stripeBrand']);
        $invoice->setLast4Stripe($resource['stripeLast4']);
        $invoice->setIdChargeStripe($resource['stripeId']);
        $invoice->setStripeToken($resource['stripeToken']);
        $invoice->setStatusStripe($resource['stripeStatus']);
        $invoice->setUpdatedAt(new \Datetime());
        $invoice->setCreatedAt(new \Datetime());
        $this->em->persist($invoice);
        $this->em->flush();
    }
}