import React from 'react';

import './stripe-button.styles.scss';

import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({price}) => {

    const PriceForStripe = price * 100;
    const PublishableKey = 'pk_test_51HNXL7BQs1T5AHRD00tW14lKLy8kgUayYcyEzh219Q4LWl8TDnOX2cazvYOPp1arEuP89KvMTDCs2BPbHlyoajg300jzJafXWy';
    const onToken = (token)=>{
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name= 'Crown Clothing Ltd.'
        shippingAddress
        billingAddress
        Image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={PriceForStripe}
        panellabel='Pay Now'
        token= {onToken}
        stripeKey={PublishableKey}
        />
    );

}

export default StripeButton;