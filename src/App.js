import React, {useState} from "react";

function App() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('Текстт')
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <h1>{value}</h1>
            {/*{Двустороннее связывание, управляемый компонент}*/}
            <input onChange={event => setValue(event.target.value)} type="text" value={value}/>
        </div>
    );
}

export default App;
