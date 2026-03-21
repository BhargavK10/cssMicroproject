function FoodList({ foods, deleteFood }) {
  return (
    <div>
      <h2 className="component-title">Food List</h2>
      {foods.length === 0 ? (
        <p>No foods added yet.</p>
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