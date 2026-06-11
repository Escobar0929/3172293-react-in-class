export default function Checkbox({
    id,                     //Identificador unico (necesario para accesibilidad)
    name,                   // Nombre del campo (util para formulario)
    label,                  // Texto visible asociado al ceckbox
    checked = false,        // Estado controlado de checkbox
    onChange, 
    disabled = false,
    className = "",
}){
    return (
        <label
            htmlFor={id}
            className={`
                    flex items-center gap-2
                    text-sm
                    cursor-pointer
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                    ${className}
            `}
        >
            {/* Input del Checkbox */}            
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                className="w-5 h-5"
            />
            {/* Texto del Checkbox */}
                <span>{label}</span>
        </label>
    );                 
}