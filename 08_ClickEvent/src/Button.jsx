
function Button_Event() {

    let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked ${count} times!`);
        } else {
            console.log(`${name} Limit reached!`);
        }
    }


    const handleClick_Event = (e) => console.log(e);


    return (
        <>
            <h1>Click Event</h1>
            <button onClick={() => handleClick("Terminal Button")}>Click Me</button>
            <button onDoubleClick={(e) => handleClick_Event(e)}>Click Event Button</button>
        </>
    );
}

export default Button_Event;