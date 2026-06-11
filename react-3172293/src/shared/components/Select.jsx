// Componente select 

export default function Select({
    label, 
    htmlFor,
    name, 
    options = [],
}){
    return (
        <div>
            {/* label solo se muestra si es Truthy un uno logico */}        
            {label && (
                <label
                    htmlFor={htmlFor}
                    className="
                        block
                        text-caption
                        text-secondar
                        "
                    >
                        {label}
                    </label>
            )}

            {/* Select */}
            <select
                name={name}
                id={htmlFor}
                className="
                    w-full
                    h12
                    rounded-md
                    border
                    px-4

                    hover:border
                    hover:border2
                    hover:border-focus-border
                    "
            >
                <option value="">Selecciona una opción</option>


                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}

            </select>

        </div>
    );
}