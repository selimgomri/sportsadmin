<?php

namespace App\Services;

use App\Entity\Subscription;

class StripeService
{
    private $privateKey;

    public function __construct()
    {
        if($_ENV['APP_ENV']  === 'dev') {
            $this->privateKey = $_ENV['STRIPE_SECRET_KEY_TEST'];
        } else {
            $this->privateKey = $_ENV['STRIPE_SECRET_KEY_LIVE'];
        }
    }

    /**
     * @param Subscription $subscription
     * @return \Stripe\PaymentIntent
     * @throws \Stripe\Exception\ApiErrorException
     */
    public function paymentIntent(Subscription $subscription)
    {
        \Stripe\Stripe::setApiKey($this->privateKey);

        return \Stripe\PaymentIntent::create([
            'amount' => $subscription->getAmount() * 100, //stripe price calculation method
            'currency' => '€',
            'payment_method_types' => ['card']
        ]);
    }

    public function paiement(
        $amount,
        $currency,
        $description,
        array $stripeParameter
    )
    {
        \Stripe\Stripe::setApiKey($this->privateKey);
        $payment_intent = null;

        if(isset($stripeParameter['stripeIntentId'])) {
            $payment_intent = \Stripe\PaymentIntent::retrieve($stripeParameter['stripeIntentId']);
        }

        if($stripeParameter['stripeIntentStatus'] === 'succeeded') {
            //TODO
        } else {
            $payment_intent->cancel();
        }

        return $payment_intent;
    }

    /**
     * @param array $stripeParameter
     * @param Subscription $subscription
     * @return \Stripe\PaymentIntent|null
     */
    public function stripe(array $stripeParameter, Subscription $subscription)
    {
        return $this->paiement(
            $subscription->getAmount() * 100,
            '€',
            $subscription->getType(),
            $stripeParameter
        );
    }
}