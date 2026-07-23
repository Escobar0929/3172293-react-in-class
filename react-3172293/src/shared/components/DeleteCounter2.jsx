// Ejemplo de contador sin usar estados
import { useState } from "react";
export default function DeleteCounter2(){

const [count, setCount] = useState(0);

const increment = () => {
   setCount(count + 1);
    console.log("   El nuevo valor es: ", count)
}     

return(
        <div>
            <p>contador: {count}</p>
            <button onClick={increment}className="border p-6 bg-blue-600"> Incrementar</button>
        </div>

    )

}
