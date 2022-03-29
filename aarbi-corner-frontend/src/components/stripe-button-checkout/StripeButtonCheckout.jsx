import StripeCheckout from "react-stripe-checkout";

const StripeButtonCheckout = ({ price }) => {
  let stripePayment = price * 100; //In stripe payment is in cents so converted dollars to cents
  let stripeKey =
    "pk_test_51KVCCcGUf8tmHKAl0pBWOQ7kO8cSz8F9eFmZyKyvuEcfT8cTllfJpcnP6MxF63AWmAcdXWeWNQxnxMhZswxZe8pg00PFc9eg9I";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Aarbi Corner"
      billingAddress
      shippingAddress
      description={`The Total Payable amount is $${price}`}
      amount={stripePayment}
      panelLabel="Pay Now"
      stripeKey={stripeKey}
      token={onToken}
    />
  );
};

export default StripeButtonCheckout;