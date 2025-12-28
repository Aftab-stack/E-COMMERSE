const Checkout = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <form className="checkout-form" onSubmit={submitHandler}>
      <input required placeholder="Full Name" />
      <input required placeholder="Address" />
      <input required placeholder="Card Number" />
      <button>Place Order</button>
    </form>
  );
};

export default Checkout;
