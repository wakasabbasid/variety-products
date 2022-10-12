import headerImage from '../../assets/header.png'

export default function Header() {
  return (
    <div className='flex flex-row gap-5 justify-center  border-b md:border-b-2 lg:md:border-b-2 border-slate-800 p-4 lg:p-10  shadow-xl ' style={{height:'10%'}}>
    <img src = {headerImage} className='sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-16 lg:h-16' alt='header'></img>
    <p className='text-sm md:text-base lg:text-6xl  font-satisfy font-semibold'>Culinary Kitchen</p>
    </div>
  )
}
