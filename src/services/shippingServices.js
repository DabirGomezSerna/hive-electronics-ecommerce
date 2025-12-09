import shippingAddress from "../data/shippingAddress.json";

export function getShippingAddresses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shippingAddress || []);
    }, 600);
  });
}

export async function getDefaultShippingAddress() {
  const addresses = await getShippingAddresses();
  return addresses.find(
    (a) => a.default || addresses[0] || null
  );
}
