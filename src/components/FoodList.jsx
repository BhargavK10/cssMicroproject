function FoodList({ foods, deleteFood }) {
  return (
    <div className="food-list-wrapper">
      <h3 style={{ marginBottom: '15px', fontSize: '1rem', fontWeight: '600', color: 'var(--text-h)', flexShrink: 0 }}>📋 Food List</h3>
      <div className="food-list-container">
        {foods.length === 0 ? (
          <p style={{ color: 'var(--text)', textAlign: 'center', padding: '20px', fontStyle: 'italic' }}>
            No foods added yet.
          </p>
        ) : (
          foods.map((food) => (
            <div key={food.id} className="food-item">
              <div className="food-details">
                <div className="food-name">{food.name}</div>
                <div className="food-calories">
                  {food.calories} cal | P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                </div>
              </div>
              <button onClick={() => deleteFood(food.id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FoodList;