function FoodList({ foods, deleteFood }) {
  return (
    <div>
      <h2>Food List</h2>

      {foods.map((food) => (
        <div key={food.id} style={{ marginBottom: "10px" }}>
          <strong>{food.name}</strong> - {food.calories} kcal
          <button onClick={() => deleteFood(food.id)} style={{ marginLeft: "10px" }}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default FoodList;