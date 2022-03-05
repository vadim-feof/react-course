import React, {useState} from "react";
import Counter from "./components/Counter/Counter";

function App() {

    const [value, setValue] = useState('Текстт')

    return (
        <div className="App">
            <Counter />
            <h1>{value}</h1>
            {/*{Двустороннее связывание, управляемый компонент}*/}
            <input onChange={event => setValue(event.target.value)} type="text" value={value}/>
        </div>
    );
}

export default App;
