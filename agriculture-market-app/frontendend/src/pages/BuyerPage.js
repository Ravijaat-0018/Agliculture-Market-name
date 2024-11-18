import React, { useState } from 'react';
import './BuyerPage.css';


function BuyerPage() {
  const [cropName, setCropName] = useState('');
  const [price, setPrice] = useState('');
  const [crops, setCrops] = useState([]);

  const handleAddCrop = (e) => {
    e.preventDefault();
    if (cropName && price) {
      const newCrop = { id: Date.now(), cropName, price };
      setCrops([...crops, newCrop]);
      setCropName('');
      setPrice('');
    } else {
      alert('Please enter both crop name and price.');
    }
  };

  const handleDeleteCrop = (id) => {
    setCrops(crops.filter(crop => crop.id !== id));
  };

  return (
    <div className="buyer-page">
      <h2>Welcome, Buyer!</h2>
      <p>Add and manage crop prices for customers to view.</p>

      <form className="crop-form" onSubmit={handleAddCrop}>
        <label htmlFor="cropName">Crop Name</label>
        <input
          type="text"
          id="cropName"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          placeholder="Enter crop name"
          required
        />

        <label htmlFor="price">Price (₹)</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          required
        />

        <button type="submit">Add Crop</button>
      </form>

      {crops.length > 0 ? (
        <div className="crop-list">
          <h3>Added Crops</h3>
          <table>
            <thead>
              <tr>
                <th>Crop Name</th>
                <th>Price (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {crops.map((crop) => (
                <tr key={crop.id}>
                  <td>{crop.cropName}</td>
                  <td>{crop.price}</td>
                  <td>
                    <button onClick={() => handleDeleteCrop(crop.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No crops added yet.</p>
      )}
    </div>
  );
}

export default BuyerPage;
