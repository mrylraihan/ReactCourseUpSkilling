
import { useReducer } from 'react';
import './App.css';
import Cart from './components/Cart';
import Items from './components/Items';

const initial = {
  cart:[],
  totalPrice:0,
  quantity:0
}

const totalReducer = (state, action)=>{
  if(action.type == "add"){
    const foundItem = state.cart.find(ele=>ele.id === action.item.id)
    if(!foundItem){
      return {...state, cart:[...state.cart, action.item], totalPrice:state.totalPrice + action.item.price, quantity:state.quantity+ 1}
    }else{
      return { ...state, quantity: state.quantity+1, totalPrice: state.totalPrice + action.item.price }
    }
  }else if(action.type == 'minus'){
    // need to fix
    const foundItem = state.cart.find(ele => ele.id === action.item.id)
    return {...state, totalPrice: state.totalPrice - foundItem.price, quantity:state.quantity-1}
  
  }else{
    return state
  }
}

function App() {
  const [cartList, dispatch] = useReducer(totalReducer, initial)
  console.log(cartList)
  return (
    <>
      <Cart quantity={cartList.quantity}/>
      <Items dispatch={dispatch}/>
    </>
  );
}

export default App;
