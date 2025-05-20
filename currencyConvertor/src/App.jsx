import React, { useState } from "react";
import { InputBox } from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    let precisionAmount = (amount * currencyInfo[to]).toFixed(2)
    setConvertedAmount(precisionAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-orange-400"
      style={{backgroundImage: `url('https://images.pexels.com/photos/246520/pexels-photo-246520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,}}
    >
      <div className="flex-1/5 h-full bg-no-repeat bg-cover" style={{backgroundImage: `url('https://images.pexels.com/photos/30174012/pexels-photo-30174012/free-photo-of-delicious-indian-snack-platter-with-tea-and-sauces.jpeg?auto=compress&cs=tinysrgb&w=600')`,}}>
      </div>
      <div className="flex-1/2">
        <div className="w-full max-w-md mx-auto border border-white rounded-lg p-5 backdrop-blur-sm bg-white/20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
              label="From" 
              amount={amount} 
              currencyOption={options} 
              onCurrencyChange={(currency)=> setFrom(currency)} 
              selectCurrency={from} 
              onAmountChange={(amount)=> setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To" 
              amount={convertedAmount} 
              currencyOption={options} 
              onCurrencyChange={(currency)=> setTo(currency)} 
              selectCurrency={to} 
              amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
