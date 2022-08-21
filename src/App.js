import { Fragment, useState } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContext from './store/CartContext';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCarthandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>


    </CartProvider>

  );
}

export default App;
