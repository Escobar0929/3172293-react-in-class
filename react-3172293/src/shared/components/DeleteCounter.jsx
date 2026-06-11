// Componente para entender el hook useState
// L primero que hacemos es importar el hook useState

import{ useState} from "react";

export default function DeleteCounter(){

// Creamos el estado
const [count, setCount] = useState(0);
    return(
        <div>
            <p>contador: {count} </p>
            <button onClick={() => setCount(count + 1)} className="border p-6 rounded xs"> Incrementar</button>
        </div>
    )
}
