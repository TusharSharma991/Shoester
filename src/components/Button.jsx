

const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center 
    items-center gap-2 px-7 py-4 border
    font-montserrat text-lg loading-none
    bg-coral-red rounded-full text-white
     border-white font-bold">
        {label}
        {iconURL && <img src={iconURL}
        className = "ml-2 rounder-full w-5 h-5 "/>}
    </button>
  )
}

export default Button;