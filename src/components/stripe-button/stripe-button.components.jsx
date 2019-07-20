import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// This is because we are not going to have digital payments actually sent through our backend.
const onToken = (token) => {
    console.log(token)
    alert('Paid')
}

const SripeCheckedoutButton = ({ price }) => {
    const priceForStripe = price * 100; // stripe accepts in cents only
    const publicKey = 'pk_test_4AiImrkGT93qdZ0Poeb2ExsH00PegOxn7o' // devs, change this to your pub. key from stripe
    return(
    <div>
        <StripeCheckout 
        label='Pay'
        name='CRWN Streetwear'
        img= 'https://svgshare.com/i/CUz.svg'
        description={`Your Total Is $${ price }`}
        amount = { priceForStripe }
        shippingAddress
        billingAddress
        panelLabel ='Pay Now'
        token={onToken}
        stripeKey={publicKey}
        /> 
    </div>
)}
export default SripeCheckedoutButton;