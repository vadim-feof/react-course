import React, {useEffect, useState} from "react";
import Counter from "./components/Counter/Counter";
import ClassCounter from "./components/Counter/ClassCounter";

function App() {
    const [value, setValue] = useState('Текстт')
    useEffect(() => {
        window.process = {
            ...window.process,
        };
    }, []);
    return (
        <div className="App">
            <Counter />
            <ClassCounter/>
            <h1>{value}</h1>
            {/*{Двустороннее связывание, управляемый компонент}*/}
            <input onChange={event => setValue(event.target.value)} type="text" value={value}/>
        </div>
    );
}

export default App;
