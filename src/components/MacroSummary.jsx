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
    <div style={{ marginTop: "20px" }}>
      <h2>📊 Smart Daily Macros</h2>

      {/* Calories */}
      <div>
        <h3>🔥 Calories</h3>
        <p>{totals.calories} / {goals.calories} kcal</p>
        <progress value={percent(totals.calories, goals.calories)} max="100" />
      </div>

      {/* Protein */}
      <div>
        <h3>💪 Protein</h3>
        <p>{totals.protein} / {goals.protein} g</p>
        <progress value={percent(totals.protein, goals.protein)} max="100" />
      </div>

      {/* Carbs */}
      <div>
        <h3>🍞 Carbs</h3>
        <p>{totals.carbs} / {goals.carbs} g</p>
        <progress value={percent(totals.carbs, goals.carbs)} max="100" />
      </div>

      {/* Fat */}
      <div>
        <h3>🥑 Fat</h3>
        <p>{totals.fat} / {goals.fat} g</p>
        <progress value={percent(totals.fat, goals.fat)} max="100" />
      </div>
    </div>
  );
}

export default MacroSummary;