function MacroSummary({ foods, goals }) {
  const totals = foods.reduce(
    (acc, item) => ({
      calories: acc.calories + item.calories,
      protein: acc.protein + item.protein,
      carbs: acc.carbs + item.carbs,
      fat: acc.fat + item.fat
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const percent = (value, goal) => {
    if (!goal) return 0;
    return Math.min((value / goal) * 100, 100);
  };

  return (
    <div>
      <h2 className="component-title">Daily Macros</h2>

      {/* Calories */}
      <div className="macro-item">
        <div className="macro-progress-container">
          <div className="macro-label">Calories</div>
          <div
            className="progress-fill"
            style={{ width: `${percent(totals.calories, goals.calories)}%` }}
          ></div>
        <div className="progress-percent">{Math.round(percent(totals.calories, goals.calories))}%</div>
        </div>
        <p className="macro-value">{totals.calories} / {goals.calories} kcal</p>
      </div>

      {/* Protein */}
      <div className="macro-item">
        <div className="macro-progress-container">
          <div className="macro-label">Protein</div>
          <div
            className="progress-fill"
            style={{ width: `${percent(totals.protein, goals.protein)}%` }}
          ></div>
        <div className="progress-percent">{Math.round(percent(totals.protein, goals.protein))}%</div>
        </div>
        <p className="macro-value">{totals.protein} / {goals.protein} g</p>
      </div>

      {/* Carbs */}
      <div className="macro-item">
        <div className="macro-progress-container">
          <div className="macro-label">Carbs</div>
          <div
            className="progress-fill"
            style={{ width: `${percent(totals.carbs, goals.carbs)}%` }}
          ></div>
        <div className="progress-percent">{Math.round(percent(totals.carbs, goals.carbs))}%</div>
        </div>
        <p className="macro-value">{totals.carbs} / {goals.carbs} g</p>
      </div>

      {/* Fat */}
      <div className="macro-item">
        <div className="macro-progress-container">
          <div className="macro-label">Fat</div>
          <div
            className="progress-fill"
            style={{ width: `${percent(totals.fat, goals.fat)}%` }}
          ></div>
        <div className="progress-percent">{Math.round(percent(totals.fat, goals.fat))}%</div>
        </div>
        <p className="macro-value">{totals.fat} / {goals.fat} g</p>
      </div>
    </div>
  );
}

export default MacroSummary;