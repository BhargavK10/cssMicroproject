import { useState, useEffect } from "react";
import FoodForm from "./components/FoodForm";
import FoodList from "./components/FoodList";
import MacroSummary from "./components/MacroSummary";
import GoalCalculator from "./components/GoalCalculator";
import "./styles.css";

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
    <div className="app-container">
      <h1 className="app-title">💪 GymBros Macro Tracker</h1>

      <div className="app-layout">
        <div className="left-column">
          <div className="component-card">
            <MacroSummary foods={foods} goals={goals} />
          </div>
        </div>

        <div className="right-column">
          <div className="component-card">
            <GoalCalculator setGoals={setGoals} />
          </div>

          <div className="component-card">
            <FoodForm addFood={addFood} />
            <FoodList foods={foods} deleteFood={deleteFood} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;