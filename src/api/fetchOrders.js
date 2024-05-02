import { handleError } from "../utils/handleError.js";

export const fetchOrders = async () => {
  const data = await fetch(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders",
  ).catch(handleError);
  return await data.json();
};
