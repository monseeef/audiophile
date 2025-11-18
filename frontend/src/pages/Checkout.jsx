import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/api";
import Container from "../components/Container";
import FormInput from "../components/FormInput";
import FormRadio from "../components/FormRadio";
import Button from "../components/Button";
import OrderConfirmationModal from "../components/OrderConfirmationModal";

// Go Back component
const GoBack = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="text-body text-black-full/50 hover:text-primary mb-8">
      Go Back
    </button>
  );
};

// Summary Item component
const SummaryItem = ({ item }) => {
  const shortenName = (name) =>
    name.replace("Headphones", "").replace("Earphones", "").replace("Speaker", "").replace("Mark", "MK");

  return (
    <div className="flex items-center justify-between">
      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
      <div className="flex-1 ml-4">
        <p className="font-bold text-body">{shortenName(item.name)}</p>
        <p className="text-body font-bold text-black-full/50">$ {item.price.toLocaleString()}</p>
      </div>
      <span className="font-bold text-body text-black-full/50">x{item.quantity}</span>
    </div>
  );
};

// Main Checkout Page
const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems, total, shipping, vat, grandTotal, removeAll } = useCart();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Wrong format";
    }
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.zip) newErrors.zip = "ZIP Code is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";

    if (paymentMethod === "e-money") {
      if (!formData.eMoneyNumber) newErrors.eMoneyNumber = "e-Money Number is required";
      if (!formData.eMoneyPin) newErrors.eMoneyPin = "e-Money PIN is required";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const orderData = {
        ...formData,
        paymentMethod,
        items: cartItems,
        total,
        shipping,
        vat,
        grandTotal,
      };

      try {
        await createOrder(orderData);
        setIsModalOpen(true);
        removeAll();
      } catch (error) {
        console.error("Failed to create order:", error);
        // Optionally, show an error message to the user
      }
    }
  };

  return (
    <div className="bg-gray-bg py-8 md:py-16">
      <Container>
        <GoBack />
        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Form Card --- */}
          <div className="flex-1 bg-white rounded-lg p-6 md:p-8">
            <h2 className="text-h3 uppercase mb-8">Checkout</h2>

            <form id="checkout-form" className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
              {/* Billing Details */}
              <fieldset>
                <legend className="text-sub-title uppercase text-primary font-bold mb-4">Billing Details</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Name"
                    name="name"
                    placeholder="Alexei Ward"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="alexei@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+1 202-555-0136"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                </div>
              </fieldset>

              {/* Shipping Info */}
              <fieldset>
                <legend className="text-sub-title uppercase text-primary font-bold mb-4">Shipping Info</legend>
                <div className="grid grid-cols-1 gap-6">
                  <FormInput
                    label="Your Address"
                    name="address"
                    placeholder="1137 Williams Avenue"
                    value={formData.address}
                    onChange={handleChange}
                    error={errors.address}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <FormInput
                    label="ZIP Code"
                    name="zip"
                    placeholder="10001"
                    value={formData.zip}
                    onChange={handleChange}
                    error={errors.zip}
                  />
                  <FormInput
                    label="City"
                    name="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleChange}
                    error={errors.city}
                  />
                  <FormInput
                    label="Country"
                    name="country"
                    placeholder="United States"
                    value={formData.country}
                    onChange={handleChange}
                    error={errors.country}
                  />
                </div>
              </fieldset>

              {/* Payment Details */}
              <fieldset>
                <legend className="text-sub-title uppercase text-primary font-bold mb-4">Payment Details</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <span className="text-xs font-bold md:col-span-1">Payment Method</span>
                  <div className="flex flex-col gap-4 md:col-span-1">
                    <FormRadio
                      label="e-Money"
                      name="paymentMethod"
                      value="e-money"
                      checked={paymentMethod === "e-money"}
                      onChange={handlePaymentChange}
                    />
                    <FormRadio
                      label="Cash on Delivery"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={handlePaymentChange}
                    />
                  </div>
                </div>
              </fieldset>

              {/* Conditional e-Money Inputs */}
              {paymentMethod === "e-money" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="e-Money Number"
                    name="eMoneyNumber"
                    placeholder="238521993"
                    value={formData.eMoneyNumber}
                    onChange={handleChange}
                    error={errors.eMoneyNumber}
                  />
                  <FormInput
                    label="e-Money PIN"
                    name="eMoneyPin"
                    placeholder="6891"
                    value={formData.eMoneyPin}
                    onChange={handleChange}
                    error={errors.eMoneyPin}
                  />
                </div>
              )}
            </form>
          </div>

          {/* --- Summary Card --- */}
          <div className="lg:w-1/3 bg-white rounded-lg p-6 md:p-8 h-fit">
            <h3 className="text-h6 uppercase mb-8">Summary</h3>
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <SummaryItem key={item.id} item={item} />
              ))}
            </div>

            <div className="flex flex-col gap-2 my-8">
              <div className="flex justify-between">
                <span className="text-body uppercase text-black-full/50">Total</span>
                <span className="text-h6 font-bold">$ {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-body uppercase text-black-full/50">Shipping</span>
                <span className="text-h6 font-bold">$ {shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-body uppercase text-black-full/50">VAT (Included)</span>
                <span className="text-h6 font-bold">
                  $ {vat.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-body uppercase text-black-full/50">Grand Total</span>
              <span className="text-h6 font-bold text-primary">$ {grandTotal.toLocaleString()}</span>
            </div>

            <Button variant="primary" className="w-full mt-8" type="submit" form="checkout-form">
              Continue & Pay
            </Button>
          </div>
        </div>
      </Container>
      {isModalOpen && <OrderConfirmationModal />}
    </div>
  );
};

export default Checkout;
