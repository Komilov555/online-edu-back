import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowDown , MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md'

const Profile = () => {
    const [show, setShow] = useState(false)
  return (
    <div className='w-full h-full text-gray-500 font-semibold'>
        
        <div className={`w-full relative gradient rounded-b-xl border-b-4 border-cyan-600 ${show ? 'h-3/4' : ''}`}>
                <article className='w-full h-min px-2 pt-2 pb-4 '>
                    <h1>To'lov puli: 250 sum</h1>
                    <h1>Qarzdorlik: -250 sum</h1>
                    <h1>Boshlash va tugash vaqti: 14:00/16:00</h1>
                </article>
                {
                    show ? 
                    <div className='w-full flex flex-col justify-center items-center'>
                    <h1 className='pb-1 px-4 border-b-2'>Online To'lov</h1>
                    <div className='w-full p-4 pt-7'>
                        <div className='w-full flex justify-around items-center pb-7'>
                            
                            <div className='w-16 h-16 rounded-full bg-white justify-center flex items-center'>
                                <img src="public/payme-01.png" className='scale-110 bg-center bg-contain' alt="" />
                            </div>
                            
                             <div className='w-16 h-16 rounded-full bg-white justify-center flex items-center'>
                                <img src="public/Click-01.png" className='scale-110 bg-center bg-contain' alt="" />
                            </div>
                       
                        </div>
                        <div className='w-full flex justify-around items-center'>
                            
                            <div className='w-16 h-16 rounded-full bg-white justify-center flex items-center'>
                                <img src="public/logo-horizontal-black-colored.png" className='scale-110 bg-center bg-contain' alt="" />
                            </div>
                            
                             <div className='w-16 h-16 rounded-full  bg-white justify-center flex items-center'>
                               <h1 className='w-16 text-sm flex flex-col items-center justify-center font-bold text-black/70'>Humo/<span>UzCard </span></h1>
                            </div>
                       
                        </div>
                       
                    </div>
                </div>
                    : <></>
                }

                <div className='w-full flex justify-between pb-2 px-4  font-bold'>
                    <button onClick={() => setShow(true)} className={`${show ? 'hidden' : 'block'} text-3xl`}><MdOutlineKeyboardDoubleArrowDown/></button>
                    <button onClick={() => setShow(true)} className={`${show ? 'hidden' : 'block'} text-3xl`}><MdOutlineKeyboardDoubleArrowDown/></button>
                </div>

        </div>
                <div className='relative w-full'>
                <div className='w-full flex justify-between pb-2 px-4 absolute -top-9 font-bold'>
                    <button onClick={() => setShow(false)} className={`${show ? 'block' : 'hidden'} text-3xl`}><MdOutlineKeyboardDoubleArrowUp/></button>                    
                    <button onClick={() => setShow(false)} className={`${show ? 'block' : 'hidden'} text-3xl`}><MdOutlineKeyboardDoubleArrowUp/></button>                    
                </div>

                <button className='absolute -top-9 bg-black border-4 border-cyan-600 rounded-full h-16 w-16 mx-auto left-0 right-0'>
                    <img src="public/prikolnaya-avatarka-dlya-patsanov.jpg" className='rounded-full' alt="" />
                </button>
                
                </div>


    </div>
  )
}

export default Profile