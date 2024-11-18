import React, { useEffect, useState } from 'react';
import './CustomerPage.css';

function CustomerPage() {
  const [cropPrices, setCropPrices] = useState([]);

  // Simulating data fetching from a backend API
  useEffect(() => {
    // Replace this mock data with a real API call when connected to a backend
    const mockData = [
      { id: 1, crop: 'Wheat', price: 100, buyerName: 'Buyer A' },
      { id: 2, crop: 'Rice', price: 120, buyerName: 'Buyer B' },
      { id: 3, crop: 'Corn', price: 90, buyerName: 'Buyer C' },
    ];
    setCropPrices(mockData);
  }, []);

  return (
    <div className="customer-page">
      <h2>Welcome, Customer!</h2>
      <p>Here you can view the current prices set by buyers for different crops.</p>

      <div className="crop-table">
        <table>
          <thead>
            <tr>
              <th>Crop</th>
              <th>Price (₹)</th>
              <th>Buyer</th>
            </tr>
          </thead>
          <tbody>
            {cropPrices.map((crop) => (
              <tr key={crop.id}>
                <td>{crop.crop}</td>
                <td>{crop.price}</td>
                <td>{crop.buyerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerPage;
