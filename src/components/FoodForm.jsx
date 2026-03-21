import { useState } from "react";

function FoodForm({ addFood }) {
  const [form, setForm] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) return alert("Enter food name");

    addFood({
      ...form,
      calories: Number(form.calories),
      protein: Number(form.protein),
      carbs: Number(form.carbs),
      fat: Number(form.fat)
    });

    setForm({
      name: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Food Name" value={form.name} onChange={handleChange} />
      <input name="calories" placeholder="Calories" value={form.calories} onChange={handleChange} />
      <input name="protein" placeholder="Protein" value={form.protein} onChange={handleChange} />
      <input name="carbs" placeholder="Carbs" value={form.carbs} onChange={handleChange} />
      <input name="fat" placeholder="Fat" value={form.fat} onChange={handleChange} />

      <button type="submit">Add Food</button>
    </form>
  );
}

export default FoodForm;