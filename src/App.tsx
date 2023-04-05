import React from 'react';
import logo from './logo.svg';
import './App.css';
import AnypaySDK from 'web3-checkout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
    
        <button onClick={() => {
          AnypaySDK({
            element: 'anypay-widget',
            config: {
              invoiceId: 'GWT_QcGq-',
              onAnypayLoadSuccess: console.log,
              onAnypayLoadFailure: console.error,
              onAnypayPaymentSuccess: console.log,
              onAnypayPaymentFailure: console.error,
            },
          })
        }}>
            Click to Pay
        </button>

      </header>
    </div>
  );
}

export default App;
