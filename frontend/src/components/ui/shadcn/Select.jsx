import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

export function Select({ value, onChange, options, placeholder = "Select...", name, error }) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef(null)

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={`w-full px-4 py-3 border ${error ? "border-red-400" : "border-gray-200"} rounded-lg bg-gray-50/50 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-figgz-primary/50 focus:border-figgz-primary transition-all duration-300`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        name={name}
      >
        <span className={value ? "text-black" : "text-gray-400"}>
          {options.find((opt) => opt.value === value)?.label || placeholder}
        </span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>
      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto animate-fade-in" role="listbox">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`px-4 py-2 cursor-pointer hover:bg-figgz-primary/10 flex items-center ${value === opt.value ? "font-semibold text-figgz-primary" : "text-gray-700"}`}
              onClick={() => {
                onChange({ target: { name, value: opt.value } })
                setOpen(false)
              }}
              role="option"
              aria-selected={value === opt.value}
            >
              {value === opt.value && <Check className="w-4 h-4 mr-2 text-figgz-primary" />} {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
