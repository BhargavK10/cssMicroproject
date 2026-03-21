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
      <h2 className="component-title">📊 Daily Macros</h2>

      {/* Calories */}
      <div className="macro-item">
        <h3 className="macro-title">🔥 Calories</h3>
        <p className="macro-value">{totals.calories} / {goals.calories} kcal</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent(totals.calories, goals.calories)}%` }}></div>
        </div>
      </div>

      {/* Protein */}
      <div className="macro-item">
        <h3 className="macro-title">💪 Protein</h3>
        <p className="macro-value">{totals.protein} / {goals.protein} g</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent(totals.protein, goals.protein)}%` }}></div>
        </div>
      </div>

      {/* Carbs */}
      <div className="macro-item">
        <h3 className="macro-title">🍞 Carbs</h3>
        <p className="macro-value">{totals.carbs} / {goals.carbs} g</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent(totals.carbs, goals.carbs)}%` }}></div>
        </div>
      </div>

      {/* Fat */}
      <div className="macro-item">
        <h3 className="macro-title">🥑 Fat</h3>
        <p className="macro-value">{totals.fat} / {goals.fat} g</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent(totals.fat, goals.fat)}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default MacroSummary;