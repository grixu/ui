export const variants = {
  default:
    "flex cursor-pointer group transition-all border border-transparent focus:outline-none mx-1 font-medium font-base rounded-md items-center content-center",
  disabled: "opacity-50 cursor-not-allowed",
  link: "focus:underline focus:text-primary hover:text-primary hover:underline",
  primary:
    "px-3 py-2 bg-primary text-white focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark hover:bg-primary-darker",
  danger: "px-3 py-2  bg-red-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-700",
  success: "px-3 py-2 bg-green-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:bg-green-700",
  info: "px-3 py-2 bg-white text-black border border-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-100",
  warning:
    "px-3 py-2 bg-yellow-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 hover:bg-yellow-700",
}

export const variantsDefaults = {
  primary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  link: false,
  disabled: false,
}
