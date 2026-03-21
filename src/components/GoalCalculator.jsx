import { useState } from "react";

function GoalCalculator({ setGoals }) {
  const [form, setForm] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
    activity: "moderate",
    goal: "gain"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateMacros = () => {
    const weight = Number(form.weight);
    const height = Number(form.height);
    const age = Number(form.age);

    // BMR calculation
    let bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      (form.gender === "male" ? 5 : -161);

    // Activity multiplier
    const activityMap = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725
    };

    let calories = bmr * activityMap[form.activity];

    // Goal adjustment
    if (form.goal === "gain") calories += 300;
    else calories -= 300;

    // Macros
    const protein = weight * 2;
    const fat = weight * 0.8;

    const remainingCalories =
      calories - (protein * 4 + fat * 9);

    const carbs = remainingCalories / 4;

    setGoals({
      calories: Math.round(calories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat)
    });
  };

  return (
    <div>
      <h2 className="component-title">Macro Calculator</h2>
      <div className="form-group">
        <input
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <input
          name="height"
          type="number"
          placeholder="Height (cm)"
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <select name="gender" onChange={handleChange} className="form-select">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <select name="activity" onChange={handleChange} className="form-select">
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="active">Very Active</option>
        </select>
      </div>
      <div className="form-group">
        <select name="goal" onChange={handleChange} className="form-select">
          <option value="gain">Muscle Gain</option>
          <option value="loss">Weight Loss</option>
        </select>
      </div>
      <button onClick={calculateMacros} className="btn">
        Calculate Macros
      </button>
    </div>
  );
}

export default GoalCalculator;