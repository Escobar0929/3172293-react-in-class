// Ejemplo de contador sin usar estados

export default function DeleteCounter2(){

let count = 0;

const increment = () => {
    
    count = count + 1
    console.log("   El nuevo valor es: ", count)
}     

return(
        <div>
            <p>contador: {count}</p>
            <button onClick={increment} className="border p-6 bg-blue-600">
                increment</button>
        </div>

    )

}