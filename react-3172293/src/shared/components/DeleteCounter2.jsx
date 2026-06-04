import { useState } from 'react'; // 1. Importamos useState

export default function DeleteCounter2() {

  const [count, setCount] = useState(0);

  const increment = () => {
 
    setCount(count + 1);
    console.log("Nuevo valor es: ", count + 1);
  };

  return (
    <div>
      {/* 4. React se encargará de actualizar este texto automáticamente */}
      <p>Contador: {count}</p>
      
      <button onClick={increment}>
        Incrementar
      </button>
    </div>
  );
}