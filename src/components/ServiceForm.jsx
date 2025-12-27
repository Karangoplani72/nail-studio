// ServiceForm.jsx
import React, { useState } from 'react';

function ServiceForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);

    const res = await fetch('http://localhost:5000/add-service', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    alert(data.message);
    setName(''); setDescription(''); setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Service Name" value={name} onChange={e => setName(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="file" onChange={e => setImage(e.target.files[0])} accept="image/*" required />
      <button type="submit">Add Service</button>
    </form>
  );
}

export default ServiceForm;
