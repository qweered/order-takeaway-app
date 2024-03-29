import Button from "@/components/Button.jsx";
import {useState} from "react";

const FoodCard = ({url, description, name, price}) => {

    const [input, setInput] = useState(1);

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="rounded-md border border-gray-600/15 flex justify-start items-center gap-8 p-6 w-2/5 mb-5">
            <div className="size-30">
                <img src={url} alt="burger"/>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                <div className="flex items-center justify-between w-full font-inter font-normal leading-5">
                    <p className="text-black text-base tracking-wider">{name}</p>
                    <p className="text-main text-sm">$ {price} USD</p>
                </div>
                <div
                    className="text-gray-500 text-normal font-inter font-normal leading-6 tracking-wider">{description}</div>
                <div className="flex items-center justify-start gap-5">
                    <input
                        className="rounded-md border border-solid border-gray-300 bg-gray-100 w-14 h-11 text-black text-center text-lg font-normal leading-7 tracking-wider"
                        onInput={handleInputChange} value={input}/>
                    <Button>Add to card</Button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard