import {useState} from 'react';
import './index.css';
import Header from '@/components/Header.jsx';
import Description from '@/components/Description.jsx';
import Footer from '@/components/Footer.jsx';

function App() {
  const [cartMeals, setCartMeals] = useState({});

  const addToCart = (id) => {
    setCartMeals((prevState) => {
      return {
        ...prevState,
        [id]: (prevState[id] || 0) + 1,
      };
    });
  };

  return (
      <>
        <Header cartMealsSize={Object.keys(cartMeals).length} />
        <div className="bg-[#F5FBFC]">
          <Description addToCart={addToCart} />
          <Footer />
        </div>
      </>
  );
}

export default App;