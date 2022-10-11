import headerImage from '../../assets/header.png'

export default function Header() {
  return (
    <div className='flex flex-row gap-5 justify-center  border-b md:border-b-2 lg:md:border-b-2 border-slate-800 p-10  shadow-xl '>
    <img src = {headerImage} className='sm:w-5 sm:h-5 md:w-14 md:h-14 lg:w-16 lg:h-16' alt='header'></img>
    <p className='text-sm md:text-6xl lg:text-6xl  font-satisfy font-semibold'>Culinary Kitchen</p>
    </div>
  )
}
