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
        <div className="macro-progress-container">
          <div
            className="progress-fill"
            style={{ width: `${percent(totals.calories, goals.calories)}%` }}
            data-label={`${Math.round(percent(totals.calories, goals.calories))}%`}
          ></div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '5px', fontSize: '0.9rem', color: 'var(--text)' }}>
          {totals.calories} / {goals.calories} kcal
        </p>
      </div>

      {/* Protein */}
      <div className="macro-item">
        <h3 className="macro-title">💪 Protein</h3>
        <div className="macro-progress-container">
          <div
            className="progress-fill"
            style={{ width: `${percent(totals.protein, goals.protein)}%` }}
            data-label={`${Math.round(percent(totals.protein, goals.protein))}%`}
          ></div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '5px', fontSize: '0.9rem', color: 'var(--text)' }}>
          {totals.protein} / {goals.protein} g
        </p>
      </div>

      {/* Carbs */}
      <div className="macro-item">
        <h3 className="macro-title">🍞 Carbs</h3>
        <div className="macro-progress-container">
          <div
            className="progress-fill"
            style={{ width: `${percent(totals.carbs, goals.carbs)}%` }}
            data-label={`${Math.round(percent(totals.carbs, goals.carbs))}%`}
          ></div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '5px', fontSize: '0.9rem', color: 'var(--text)' }}>
          {totals.carbs} / {goals.carbs} g
        </p>
      </div>

      {/* Fat */}
      <div className="macro-item">
        <h3 className="macro-title">🥑 Fat</h3>
        <div className="macro-progress-container">
          <div
            className="progress-fill"
            style={{ width: `${percent(totals.fat, goals.fat)}%` }}
            data-label={`${Math.round(percent(totals.fat, goals.fat))}%`}
          ></div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '5px', fontSize: '0.9rem', color: 'var(--text)' }}>
          {totals.fat} / {goals.fat} g
        </p>
      </div>
    </div>
  );
}

export default MacroSummary;