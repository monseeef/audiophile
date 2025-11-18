const BASE_URL = "/api";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const getProductBySlug = async (slug) => {
  const response = await fetch(`${BASE_URL}/products/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products for category: ${category}`);
  }
  return response.json();
};

export const createOrder = async (orderData) => {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    throw new Error("Failed to create order");
  }
  return response.json();
};
