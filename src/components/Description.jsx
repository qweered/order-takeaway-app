import { Component } from "react";
import Button from "./Button";
import FoodCard from "./FoodCard";
import { fetchMeals } from "@/api/index.js";

class Description extends Component {
  state = {
    shownMeals: [],
    meals: [],
  };

  componentDidMount() {
    fetchMeals().then((json) => {
      this.setState({
        meals: json,
        shownMeals: json.slice(0, 6),
      });
    });
  }

  handleSeeMore = () => {
    this.setState((prevState) => {
      const newShownCount = prevState.shownMeals.length + 6;
      return {
        shownMeals: prevState.meals.slice(
          0,
          Math.min(newShownCount, prevState.meals.length),
        ),
      };
    });
  };

  render() {
    const { addToCart } = this.props;
    const isShowMore = this.state.shownMeals.length < this.state.meals.length;

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
              <Button>Desert</Button>
              <Button variant="blank">Dinner</Button>
              <Button variant="blank">Breakfast</Button>
            </div>
            <div className="flex flex-row flex-wrap justify-evenly items-center">
              {this.state.shownMeals.map((meal) => (
                <FoodCard
                  id={meal.id}
                  key={meal.id}
                  url={meal.img}
                  description={meal.instructions}
                  name={meal.meal}
                  price={meal.price}
                  addToCart={addToCart}
                />
              ))}
            </div>
            <div className="flex">
              {isShowMore && (
                <Button onClick={this.handleSeeMore}>See more</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
