import React, { useReducer } from "react";
import './styles.css'

function reducer(state, action,{}){


}


const App=()=>{

    const [state,dispatch]=useReducer(reducer);

    return (
        <div className="calc-grid">
            <div className="output">
            <div className="prev-operator"></div>
            <div className="curr-operator"></div>
            </div>

            <button className="span-two">AC</button>
            <button>DEL</button>
            <button>/</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button className="span-two">=</button>
            
        </div>
    )
}

export default App;
