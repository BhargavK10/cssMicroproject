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
    <div>
      <h2 className="component-title">🍎 Add Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            placeholder="Food Name"
            value={form.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="calories"
            type="number"
            placeholder="Calories"
            value={form.calories}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="protein"
            type="number"
            placeholder="Protein (g)"
            value={form.protein}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="carbs"
            type="number"
            placeholder="Carbs (g)"
            value={form.carbs}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="fat"
            type="number"
            placeholder="Fat (g)"
            value={form.fat}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="btn">Add Food</button>
      </form>
    </div>
  );
}

export default FoodForm;