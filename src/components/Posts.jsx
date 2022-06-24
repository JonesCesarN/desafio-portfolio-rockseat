import React from 'react'

export const Posts = () => {
  return (
    <article className='flex flex-col gap-15 '>
      <div className='card'>
        <span className='text-xl font-bold capitalize'>postagens recentes</span>
      </div>
      <a href="#" className='flex flex-col gap-15 group'>
        <div className='card flex items-center gap-15' >
          <img
            src="https://avatars.githubusercontent.com/u/68172438"
            alt="profile"
            className='w-[128px] rounded-[50%] hidden md:flex group-hover:borda-externa '
          />
          <div className='flex flex-col justify-between gap-[10px] w-full '>
            <div className='flex flex-col gap-[10px] flex-wrap'>
              <h2 className='text-sm font-bold w-f md:text-lg'>Erro adb devices no Genymotion e Android Studio (React Native)</h2>
              <span className='text-[10px]'>2 anos atrás</span>
              <p className='text-[12px] md:text-sm'>Erro adb devices no Genymotion e Android Studio (React Native)</p>
            </div>
            <ul className='flex gap-[5px] text-[12px] flex-wrap'>
              <li>#react-native</li>
              <li>#genimotion</li>
              <li>#genimotion</li>
              <li>#genimotion</li>
            </ul>
          </div>
        </div>
      </a>

      <a href="#" className='flex flex-col gap-15 group'>
        <div className='card flex items-center gap-15' >
          <img
            src="https://avatars.githubusercontent.com/u/68172438"
            alt="profile"
            className='w-[128px] rounded-[50%] hidden md:flex group-hover:borda-externa '
          />
          <div className='flex flex-col justify-between gap-[10px] w-full '>
            <div className='flex flex-col gap-[10px] flex-wrap'>
              <h2 className='text-sm font-bold w-f md:text-lg'>Erro adb devices no Genymotion e Android Studio (React Native)</h2>
              <span className='text-[10px]'>2 anos atrás</span>
              <p className='text-[12px] md:text-sm'>Erro adb devices no Genymotion e Android Studio (React Native)</p>
            </div>
            <ul className='flex gap-[5px] text-[12px] flex-wrap'>
              <li>#react-native</li>
              <li>#genimotion</li>
              <li>#genimotion</li>
              <li>#genimotion</li>
            </ul>
          </div>
        </div>
      </a>
    </article>
  )
}
