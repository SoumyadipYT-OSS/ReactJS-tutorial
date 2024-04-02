/* eslint-disable react/jsx-key */

function List() {

    const fruits = ['Apple', 'Banana', 'Avocado', 'Guava', 'Waterlemon', 'Pineapple'];

    fruits.sort(); // Sort the fruits in alphabetical order (lexicographically order)

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Sort the fruits in ALPHABETICAL order (lexicographically order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Sort the fruits in REVERSE ALPHABETICAL order (lexicographically order
    // fruits.sort((a, b) => a.calories - b.calories); // Sort the fruits in ASCENDING order of calories
    // fruits.sort((a, b) => b.calories - a.calories); // Sort the fruits in DESCENDING order of calories

    const vegetables =
        [
            { id: 1, name: 'Potato', calories: 100 },
            { id: 2, name: 'Tomato', calories: 50 },
            { id: 3, name: 'Onion', calories: 30 },
            { id: 4, name: 'Carrot', calories: 40 },
            { id: 5, name: 'Cabbage', calories: 20 },
            { id: 6, name: 'Spinach', calories: 10 }
        ];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    const lowCalVegetables = vegetables.filter(fruit => fruit.calories < 50);
    /*
        The 'id' is used to uniquely identify each item in the list.
        when you use a database, you will have a unique id for each item.
        So, you can fetch the data from the database and use it in the list.
    */
    const vegItems = vegetables.map(veg => <li key={veg.id}>{veg.name}: <b>{veg.calories}</b> calories</li>);
    const lowCalVeg =
        lowCalVegetables.map(lcalv => <li key={lcalv.id}>
            {lcalv.name}: &nbsp;
            <b>{lcalv.calories}</b>
        </li>)


    return (
        <>
            <h1>Fruits List</h1>
            <ol>{listItems}</ol>

            <h1>Vegetables List</h1>
            <ol>{vegItems}</ol>

            <h1>Low Calorie Fruits</h1>
            <ol>{lowCalVeg}</ol>
        </>
    );
}

export default List;