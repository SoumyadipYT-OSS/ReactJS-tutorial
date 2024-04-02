import ListWithProps from "./ListProps.jsx"

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 100 },
    { id: 2, name: "Banana", calories: 200 },
    { id: 3, name: "Cherry", calories: 300 },
    { id: 4, name: "Date", calories: 400 }
  ];

  const vegetables = [
    { id: 5, name: "Eggplant", calories: 40 },
    { id: 6, name: "Fennel", calories: 20 },
    { id: 7, name: "Ginger", calories: 40 },
    { id: 8, name: "Horseradish", calories: 75 }
  ];

  return (
    <>
      {fruits.length > 0 ? <ListWithProps items={fruits} category="Fruits" /> : null }
      {vegetables.length > 0 ? <ListWithProps items={vegetables} category="Vegetables" /> : null }
    </>
  );
}

export default App;