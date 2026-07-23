import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  cloneElement
} from "react"

// 1. Mantenemos el contexto (no se exporta directo para obligar a usar el hook seguro)
const DropdownContext = createContext(null)

// 2. NUEVO: Hook personalizado seguro para consumir el contexto
function useDropdownContext() {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error(
      "Error: Los subcomponentes de Dropdown (Trigger, Content, Item) deben renderizarse estrictamente dentro de un componente <Dropdown>."
    )
  }
  return context
}

export function Dropdown({
  children,
  open: controlledOpen,
  onOpenChange,
  className = ""
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = (value) => {
    if (isControlled) {
      onOpenChange?.(value)
    } else {
      setUncontrolledOpen(value)
    }
  }

  const containerRef = useRef(null)

  // Click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isControlled]) // Añadida dependencia segura

  // Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isControlled]) // Añadida dependencia segura

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={containerRef} className={`relative inline-block ${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

// Trigger (asChild pattern) - Actualizado con el hook seguro
export function DropdownTrigger({ children }) {
  const { open, setOpen } = useDropdownContext()

  if (!children) return null

  return cloneElement(children, {
    onClick: (e) => {
      children.props.onClick?.(e)
      setOpen(!open)
    },
    "aria-expanded": open,
    "aria-haspopup": "menu"
  })
}

// Content - Actualizado con el hook seguro
export function DropdownContent({ children, className = "" }) {
  const { open } = useDropdownContext()

  if (!open) return null

  return (
    <div
      role="menu"
      className={`
        absolute
        mt-1
        min-w-48
        border
        text-text-inverse
        p-1
        dark:bg-neutral-950/80
        backdrop-blur-[1px]
        shadow-lg
        rounded-2xl
        overflow-hidden
        hover:shadow-black
        transition-shadow duration-700
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// Item - Actualizado con el hook seguro
export function DropdownItem({
  children,
  onClick,
  className = ""
}) {
  const { setOpen } = useDropdownContext()

  const handleClick = (e) => {
    onClick?.(e)
    setOpen(false)
  }

  return (
    <button
      role="menuitem"
      onClick={handleClick}
      className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-500 focus:bg-gray-100 transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

export default Dropdown;