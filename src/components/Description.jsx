import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { FoodCard } from "./FoodCard.jsx";
import useFetch from "../hooks/useFetch.jsx";

export const Description = ({ addToCart }) => {
  const [shownMeals, setShownMeals] = useState([]);
  const [category, setCategory] = useState("Dessert");

  const {
    data: meals,
    error,
    loading,
  } = useFetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");

  useEffect(() => {
    const filteredMeals = meals.filter((meal) => meal.category === category);
    setShownMeals(filteredMeals.slice(0, 6));
  }, [meals, category]);

  const handleCategorySelection = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  const handleViewMore = useCallback(() => {
    setShownMeals((prevShownMeals) => {
      const newShownCount = prevShownMeals.length + 6;
      const filteredMeals = meals.filter((meal) => meal.category === category);
      return filteredMeals.slice(
        0,
        Math.min(newShownCount, filteredMeals.length),
      );
    });
  }, [meals, category]);

  const showMoreButtonVisible =
    shownMeals.length <
    meals.filter((meal) => meal.category === category).length;

  return (
    <div className="w-full justify-center items-center relative">
      <div className="flex flex-col items-center justify-center gap-10 py-36 px-30">
        <div className="flex flex-col gap-4 w-1/4">
          <div className="text-main text-center font-inter text-5xl font-normal leading-tight tracking-wide">
            Browse our menu
          </div>
          <div className="text-[#546285] text-center text-base font-normal leading-7 tracking-wide">
            Use our menu to place an order online, or{" "}
            <a
              href="tel:123456"
              className="group text-main cursor-pointer relative"
            >
              phone
              <span className="invisible group-hover:visible w-20 bg-white text-black text-center rounded-md p-1 absolute z-10 bottom-full right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                123-456
              </span>
            </a>{" "}
            our store to&nbsp;place a pickup order. Fast and fresh food.
          </div>
        </div>
        <div className="flex w-full flex-col justify-center items-center gap-10">
          <div className="flex gap-8">
            <Button
              onClick={() => handleCategorySelection("Dessert")}
              variant={category === "Dessert" ? "default" : "blank"}
            >
              Dessert
            </Button>
            <Button
              onClick={() => handleCategorySelection("Dinner")}
              variant={category === "Dinner" ? "default" : "blank"}
            >
              Dinner
            </Button>
            <Button
              onClick={() => handleCategorySelection("Breakfast")}
              variant={category === "Breakfast" ? "default" : "blank"}
            >
              Breakfast
            </Button>
          </div>
          <div className="flex flex-row flex-wrap justify-evenly items-center">
            {loading && <p>Loading...</p>}
            {error && <p>Error {error.message}</p>}
            {shownMeals.map((meal) => (
              <FoodCard
                key={meal.id}
                url={meal.img}
                description={meal.instructions}
                name={meal.meal}
                price={meal.price}
                addToCart={addToCart}
              />
            ))}
          </div>
          {showMoreButtonVisible && (
            <div className="flex">
              <Button onClick={handleViewMore}>See more</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
