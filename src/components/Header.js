// The following is the initial setup for the Apple Watch Studio clone in Next.js.
// This includes a basic structure for creating the interactive and responsive UI.

// File: pages/index.js
import React, { useState } from 'react';

export default function Home() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const cases = [
    { id: 1, material: 'Aluminum', price: 399 },
    { id: 2, material: 'Titanium', price: 699 },
  ];

  const sizes = [
    { size: '42mm', price: 0 },
    { size: '46mm', price: 50 },
  ];

  const bands = [
    { id: 1, type: 'Solo Loop', color: 'Black', price: 49 },
    { id: 2, type: 'Braided Solo Loop', color: 'Red', price: 99 },
  ];

  const selectCase = (item) => {
    setSelectedCase(item);
    updateTotalPrice(item.price, selectedSize?.price || 0, selectedBand?.price || 0);
  };

  const selectSize = (item) => {
    setSelectedSize(item);
    updateTotalPrice(selectedCase?.price || 0, item.price, selectedBand?.price || 0);
  };

  const selectBand = (item) => {
    setSelectedBand(item);
    updateTotalPrice(selectedCase?.price || 0, selectedSize?.price || 0, item.price);
  };

  const updateTotalPrice = (casePrice, sizePrice, bandPrice) => {
    setTotalPrice(casePrice + sizePrice + bandPrice);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Apple Watch Studio</h1>

      {/* Case Selection */}
      <h2>Case Selection</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {cases.map((item) => (
          <button
            key={item.id}
            style={{
              padding: '10px',
              backgroundColor: selectedCase?.id === item.id ? 'lightblue' : 'white',
              border: '1px solid black',
              cursor: 'pointer',
            }}
            onClick={() => selectCase(item)}
          >
            {item.material} - ${item.price}
          </button>
        ))}
      </div>

      {/* Size Selection */}
      <h2>Size Selection</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {sizes.map((item, index) => (
          <button
            key={index}
            style={{
              padding: '10px',
              backgroundColor: selectedSize?.size === item.size ? 'lightblue' : 'white',
              border: '1px solid black',
              cursor: 'pointer',
            }}
            onClick={() => selectSize(item)}
          >
            {item.size} - ${item.price}
          </button>
        ))}
      </div>

      {/* Band Selection */}
      <h2>Band Selection</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {bands.map((item) => (
          <button
            key={item.id}
            style={{
              padding: '10px',
              backgroundColor: selectedBand?.id === item.id ? 'lightblue' : 'white',
              border: '1px solid black',
              cursor: 'pointer',
            }}
            onClick={() => selectBand(item)}
          >
            {item.type} ({item.color}) - ${item.price}
          </button>
        ))}
      </div>

      {/* Total Price */}
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
}
