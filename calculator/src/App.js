import React, { useReducer } from "react";
import './styles.css'


const ACTIONS={
    ADD:"add",
    SUBTRACT:"minus",
    MULTI:"multiply",
    DIVIDE:"divide",
    RESULT:"ans",
    CLEAR:"CLS",
    DELETE:"del",
    CHOOSE_OPERATOR:"choice"

}


function reducer({currNum,prevNum,operator}, {types,payloads}){


}


const App=()=>{

    const [{currNum,prevNum,operator},dispatch]=useReducer(reducer,{});

    return (
        <div className="calc-grid">
            <div className="output">
            <div className="prev-operator">{prevNum} {operator}</div>
            <div className="curr-operator">{currNum}</div>
            </div>

            <button className="span-two">AC</button>
            <button>DEL</button>
            <button>÷</button>
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
