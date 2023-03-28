import React from 'react'

const Videos = () => {
  return (
    <div className='bg-black/80 w-full h-full text-white'>
        <div className='w-full'>
            <div className='p-2 bg-black/50'>
                <h1 className='px-2 text-xl'>
                    Foto/Video
                </h1>
                <div className='flex gap-2 items-center text-xl p-2'>
                    <img src="public/prikolnaya-avatarka-dlya-patsanov.jpg" className='w-12 rounded-full' alt="" />
                    <h1>Amirov Amir</h1>
                </div>
            </div>

            <div className='w-full flex justify-around bg-black/30 items-center p-4'>
                <h1 className='p-1'>Liked/Saved</h1>
                <h1 className='px-6 border-x-2 border-white/70'>Foto/video</h1>
                <h1 className='p-1'>Target</h1>
            </div>

        </div>
    </div>
  )
}

export default Videos