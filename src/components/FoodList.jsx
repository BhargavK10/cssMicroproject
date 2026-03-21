function FoodList({ foods, deleteFood }) {
  return (
    <div>
      <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid var(--border)' }} />
      <h3 style={{ color: 'var(--text-h)', marginBottom: '15px', fontSize: '1.2rem', fontWeight: '600' }}>
        📋 Food List
      </h3>
      {foods.length === 0 ? (
        <p style={{ color: 'var(--text)', fontStyle: 'italic' }}>No foods added yet.</p>
      ) : (
        foods.map((food) => (
          <div key={food.id} className="food-item">
            <div className="food-details">
              <div className="food-name">{food.name}</div>
              <div className="food-calories">
                {food.calories} kcal | P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
              </div>
            </div>
            <button onClick={() => deleteFood(food.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FoodList;