import { Order } from "../db/models.js";

export const createOrder = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      zip,
      city,
      country,
      paymentMethod,
      eMoneyNumber,
      eMoneyPin,
      items,
      total,
      shipping,
      vat,
      grandTotal,
    } = req.body;

    const newOrder = new Order({
      name,
      email,
      phone,
      address,
      zip,
      city,
      country,
      paymentMethod,
      eMoneyNumber,
      eMoneyPin,
      items,
      total,
      shipping,
      vat,
      grandTotal,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
