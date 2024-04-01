import {useState} from "react";

function Counter(){

    const [count, setCount]= useState(0);
    const Incrase =()=>{
        setCount(count+1);
    };
    return <div>Counter
    <h1>{count}</h1>
    <button onClick={Incrase}>Incrase</button>
    <button onClick={()=> setCount(count-1)}>Descrase</button> 

    </div>
    // yukarıdaki butonlarda aynı ilem var. Yalnzıca birinde buton dışarıda diğerinde içeride tanımlanmıs. 
}

export default Counter;