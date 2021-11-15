import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Jvxl2SDx6Qk1g6dVfppgnvEw11wEmj21YV1NSBiR9BpdsATRRXTd40GLDrwP7t6Xw6bBSz98lAbRKhFjWkXrsLo00iIqlWIiE';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label="PAY NOW"
      name="Diamond Clothing Ltd."
      billingAddress
      shippingAddress
      image="file:///C:/Users/anasm/OneDrive/Desktop/React%20Course/diamond-clothing/src/assets/diamond.svg"
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
