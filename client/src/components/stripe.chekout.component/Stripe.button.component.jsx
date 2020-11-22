import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hd6VDDxAX8ghbPPSn8rA1agCDNP4J8CS8mhOOx5E9kzGAhlaRW8BVhLsZyoVE0xN4r4vyub9koRH97DfSpmw3Gl00UsnQTiUc';
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert('Payment Succesful');
        console.log(res);
      })
      .catch((error) => {
        console.log('payment error', JSON.parse(error));
        alert('somenthing wrong with the payment please check the credit cart');
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`your price total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
