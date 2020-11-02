import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hd6VDDxAX8ghbPPSn8rA1agCDNP4J8CS8mhOOx5E9kzGAhlaRW8BVhLsZyoVE0xN4r4vyub9koRH97DfSpmw3Gl00UsnQTiUc';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful');
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
