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
      <h2>🎯 Smart Macro Calculator</h2>

      <input name="weight" placeholder="Weight (kg)" onChange={handleChange} />
      <input name="height" placeholder="Height (cm)" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />

      <select name="gender" onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select name="activity" onChange={handleChange}>
        <option value="sedentary">Sedentary</option>
        <option value="light">Light</option>
        <option value="moderate">Moderate</option>
        <option value="active">Active</option>
      </select>

      <select name="goal" onChange={handleChange}>
        <option value="gain">Muscle Gain</option>
        <option value="loss">Weight Loss</option>
      </select>

      <button onClick={calculateMacros}>
        Calculate Smart Macros
      </button>
    </div>
  );
}

export default GoalCalculator;