import { useState, useEffect } from "react";
import FoodForm from "./components/FoodForm";
import FoodList from "./components/FoodList";
import MacroSummary from "./components/MacroSummary";
import GoalCalculator from "./components/GoalCalculator";

function App() {
  const [foods, setFoods] = useState(() => {
    return JSON.parse(localStorage.getItem("foods")) || [];
  });

  // ✅ ADD THIS (missing in your code)
  const [goals, setGoals] = useState({
    calories: 2000,
    protein: 120,
    carbs: 250,
    fat: 70
  });

  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foods));
  }, [foods]);

  const addFood = (food) => {
    setFoods((prev) => [...prev, { ...food, id: Date.now() }]);
  };

  const deleteFood = (id) => {
    setFoods((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>💪 GymBros Macro Tracker</h1>

      {/* ✅ CORRECT PLACEMENT */}
      <GoalCalculator setGoals={setGoals} />

      <FoodForm addFood={addFood} />

      {/* ✅ PASS goals */}
      <MacroSummary foods={foods} goals={goals} />

      <FoodList foods={foods} deleteFood={deleteFood} />
    </div>
  );
}

export default App;