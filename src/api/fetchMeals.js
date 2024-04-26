import { handleError } from "@/utils/handleError.js";

export const fetchMeals = async () => {
  const data = await fetch(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals",
  ).catch(handleError);
  return await data.json();
};
