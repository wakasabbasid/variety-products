import React from 'react'
import TopChef1 from '../../assets/top_chef_1_2.png'
import TopChef2 from '../../assets/top_chef_2.png'
import ChefLeft from '../../assets/chef_left.png'
import ChefMiddle from '../../assets/chef_middle.png'
import ChefRight from '../../assets/chef_right.png'
import Vegetable from '../../assets/vegetable.png'
import Fruits from '../../assets/fruits.png'
import WholeGrains from '../../assets/whole_grains.png'
import Protein from '../../assets/healthy_protein.png'

const chefData = [{ img: ChefLeft, name: "Eileen Johnson", position: 'Executive Chef, USA' }, { img: ChefMiddle, name: "Robert Downey Jr", position: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
{ img: ChefRight, name: "Amanda Dority", position: 'Sous Chef, India' },
];
const foodData = [{ img: Vegetable, name: "VEGETABLES", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
{ img: Fruits, name: "FRUITS", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
{img:WholeGrains,name:"WHOLE GRAINS",description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
{img:Protein,name:"HEALTHY PROTEIN",description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'}]

const TopChefs = () => {
  return (
    <div className='flex flex-col items-center pt-5 w-screen  lg:pl-24 lg:pr-24 '>
      <p className=' text-xs md:text-base lg:text-6xl  font-poppins font-extralight pt-2 lg:pt-10 lg:pb-5'>TOP CHEFS</p>
      <p className=' border-b  lg:border-b-4 border-slate-800 w-10 md:w-14 lg:w-32 ' />
      <div className='relative'>
      <img src={TopChef1} alt="" className=' pt-6 lg:pt-16 h-fit md:h-72 lg:h-fit lg:w-screen object-cover  ' />
      <div className='flex flex-row md:flex-row lg:flex-row absolute top-20 lg:top-80 gap:1 md:gap-2 lg:gap-96 justify-center items-center w-full h-1/2  ' >
        {chefData.map((chef, index) => (
          index === 1 ?
            (<div className='flex flex-col gap-2  lg:gap-10 items-center justify-center rounded-3xl bg-white  h-full w-2/12 md:w-4/12 md:h-56 lg:w-2/12 lg:h-full  '>
              <img src={chef.img} className='w-9 h-9 md:w-20 md:h-20 lg:w-72 lg:h-72' />
              <p className='text-xs   lg:text-6xl font-semibold text-black font-poppins'>{chef.name}</p>
              <a className='text-xs   lg:text-5xl text-black font-poppins   w-10 h-10  lg:bg-red-400 md:whitespace-normal lg:whitespace-normal truncate   md:w-8/12 lg:w-8/12 lg:h-56 text-center leading-normal cursor-pointer '  title={`${chef.position}`}> {chef.position}</a>
            </div>) : (<div className='flex flex-col gap-2  lg:gap-10 items-center justify-center h-2/5 w-3/12 '>
              <img src={chef.img} className='w-9 h-9 md:w-20 md:h-20 lg:w-72 lg:h-72' />
              <p className='text-xs  lg:text-6xl text-white font-poppins'>{chef.name}</p>
              <p className='text-xs  lg:text-5xl text-white font-poppins'> {chef.position}</p>
            </div>)
        )
        )}
      </div>

      </div>
      
      {/* <div className='relative h-3/12'>
      <img src={TopChef2} alt="" className='w-screen ' />

      
      <div className='flex flex-col items-center absolute left-0 right-0 top-44 '>
        <p className='text-6xl font-poppins font-extralight pb-10'>FOOD GUIDE</p>
        <p className='border-b-4 border-slate-800 w-44' />
      </div>
      <div className='flex flex-col h-full w-full  '>
        <div className='flex flex-col gap-28  absolute -left-40 top-1/4 items-center'>
          <img src={foodData[0].img} className='w-72 h-72' />
          <p className='text-5xl font-semibold font-poppins'>{foodData[0].name}</p>
          <p className='text-4xl font-poppins text-center leading-normal w-2/5 '> {foodData[0].description}</p>
        </div>
        <div className='flex flex-col gap-28  absolute -left-40 bottom-56 items-center   '>
          <img src={foodData[1].img} className='w-72 h-72' />
          <p className='text-5xl font-semibold font-poppins'>{foodData[1].name}</p>
          <p className='text-4xl font-poppins text-center leading-normal w-2/5 '> {foodData[1].description}</p>
        </div>
        </div>
        <div className='flex flex-col h-full w-full'>
        <div className='flex flex-col gap-28  absolute right-56 top-1/4 items-center'>
          <img src={foodData[2].img} className='w-72 h-72' />
          <p className='text-5xl font-semibold font-poppins'>{foodData[2].name}</p>
          <p className='text-4xl font-poppins text-center leading-normal w-2/5 '> {foodData[2].description}</p>
        </div>
        <div className='flex flex-col gap-28  absolute -right-40 bottom-56 items-center'>
          <img src={foodData[3].img} className='w-72 h-72' />
          <p className='text-5xl font-semibold font-poppins'>{foodData[3].name}</p>
          <p className='text-4xl font-poppins text-center leading-normal w-2/5 '> {foodData[3].description}</p>
        </div>
        </div>
      </div> */}

    </div>
  )
}

export default TopChefs