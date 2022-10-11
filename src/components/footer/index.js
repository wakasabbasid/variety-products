import FacebookIcon from '../../assets/Facebook Icon.png'
import InstagramIcon from '../../assets/Instagram Icon.png'
import TwitterIcon from '../../assets/Twitter Icon.png'

export default function Footer() {
  return (
    <div className='flex flex-row gap-16 justify-center pt-10  '>
    <img src = {FacebookIcon} className='w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28' alt='header'></img>
    <img src = {InstagramIcon} className='w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28' alt='header'></img>
    <img src = {TwitterIcon} className='w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28' alt='header'></img>
    </div>
  )
}
