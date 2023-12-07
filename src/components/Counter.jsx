import React, { useState } from "react";


const Counter = function() {
    const[count, setLikes] = useState(0)

    function plus(){
        setLikes(count + 1)
    }

    return (
        <div>
            <h1>LIKIKES {count}</h1>
            <button onClick={plus}>Plus +</button>
            <button onClick={() => setLikes(count - 1)}>Minus -</button>
        </div>
    )
}

export default Counter;