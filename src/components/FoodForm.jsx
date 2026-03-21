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
      <h2 className="component-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Add Food</h2>
      <form onSubmit={handleSubmit} className="compact-form">
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
        <div className="macro-inputs-grid">
          <div className="form-group">
            <input
              name="calories"
              type="number"
              placeholder="Cal"
              value={form.calories}
              onChange={handleChange}
              className="form-input-compact"
              required
            />
          </div>
          <div className="form-group">
            <input
              name="protein"
              type="number"
              placeholder="P (g)"
              value={form.protein}
              onChange={handleChange}
              className="form-input-compact"
              required
            />
          </div>
          <div className="form-group">
            <input
              name="carbs"
              type="number"
              placeholder="C (g)"
              value={form.carbs}
              onChange={handleChange}
              className="form-input-compact"
              required
            />
          </div>
          <div className="form-group">
            <input
              name="fat"
              type="number"
              placeholder="F (g)"
              value={form.fat}
              onChange={handleChange}
              className="form-input-compact"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn-compact">Add</button>
      </form>
      <hr style={{ margin: '12px 0', border: 'none', borderTop: '1px solid var(--border)' }} />
    </div>
  );
}

export default FoodForm;