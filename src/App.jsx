import "./index.css";
import Header from "@/components/Header.jsx";
import Description from "@/components/Description.jsx";
import Footer from "@/components/Footer.jsx";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartMeals: {},
    };
  }
  addToCart = (id) => {
    this.setState((prevState) => {
      const newCart = {
        ...prevState.cartMeals,
        [id]: (prevState.cartMeals[id] || 0) + 1,
      };
      return {
        cartMeals: newCart,
      };
    });
  };
  render() {
    return (
      <>
        <Header cartMealsSize={Object.keys(this.state.cartMeals).length} />
        <div className="bg-[#F5FBFC]">
          <Description addToCart={this.addToCart} />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
