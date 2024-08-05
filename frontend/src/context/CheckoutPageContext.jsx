import React, { createContext, useState } from 'react';

// Create the context
export const CheckoutContext = createContext();

// Create the provider component
export const CheckoutPageContext = ({ children }) => {
  const [totalCost, setTotalCost] = useState(0);

  return (
    <CheckoutContext.Provider value={{ totalCost, setTotalCost }}>
      {children}
    </CheckoutContext.Provider>
  );
};
