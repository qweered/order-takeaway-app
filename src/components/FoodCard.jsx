import { Component } from "react";
import Button from "@/components/Button.jsx";

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
    };
  }
  handleInput = (id) => {
    this.props.addToCart(id, this.state.inputValue);
    this.setState({ inputValue: 0 });
  };
  render() {
    const { id, url, description, name, price, addToCart } = this.props;
    return (
      <div className="rounded-md border border-gray-600/15 flex justify-start items-center gap-8 p-6 w-2/5 mb-5">
        <div className="size-32 shrink-0">
          <img src={url} alt="burger" />
        </div>
        <div className="flex flex-col justify-between items-start gap-2">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-gray-900 text-lg font-normal leading-tight tracking-wider">
              {name}
            </h2>
            <div className="text-main text-base font-normal leading-normal">
              $ {price} USD
            </div>
          </div>
          <h3 className="text-gray-700 text-base font-normal leading-6 tracking-wide max-h-12 overflow-y-auto">
            {description}
          </h3>
          <div className="flex items-center justify-start gap-5">
            <div className="card__image__description__footer__price">
              <input
                className="rounded-md border border-gray-300 bg-gray-100 w-14 h-10 text-black text-center text-base font-normal leading-7 tracking-wide"
                type="text"
                value={this.state.inputValue}
                onChange={(e) => this.setState({ inputValue: e.target.value })}
              />
            </div>
            <Button onClick={() => this.handleInput(id)}>Add to card</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodCard;
