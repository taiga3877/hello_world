import React from 'react';
import hotel1 from './image.png'
import hotel2 from './image copy.png'
import hotel3 from './image copy 2.png'

const Hotel = () => {
    return (
        <div className='m-auto w-[1440px] text-center'> 
        <br />
        <br />
        <br />
        <br />
            <h1 className=' text-5xl p-[30px]'>Отели</h1>
            <div className='flex w-[1440px] justify-around items-center text-start p-[30px] '>
            <div className=' shadow-2xl p-[13px] rounded-2xl'><img src={hotel1} alt="" className='w-[413px] h-[200px] max-w-full' /><h1>Hyatt Regency Ташкент</h1><p>ул. Навои 1, Ташкент</p><p>Современный отель в центре города</p> <button className='w-[110px] h-[35px] bg-orange-500 text-white rounded-2xl  text-center '>Подробнее</button></div>
            <div className=' shadow-2xl p-[13px] rounded-2xl'><img src={hotel2} alt="" className='w-[400px] h-[200px] max-w-full' /><h1>Hilton Tashkent City</h1><p>ул. Ислама Каримова 2, Ташкент</p><p>Бизнес-отель в центре города</p> <button className='w-[110px] h-[35px] bg-orange-500 text-white rounded-2xl  text-center '>Подробнее</button></div>
            <div className=' shadow-2xl p-[13px] rounded-2xl'><img src={hotel3} alt="" className='w-[400px] h-[200px] max-w-full' /><h1>City Palace Hotel</h1><p>ул. Амира Темура 15, Ташкент</p><p>Уютный отель рядом с достопримечательностями</p> <button className='w-[110px] h-[35px] bg-orange-500 text-white rounded-2xl  text-center '>Подробнее</button></div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default Hotel;
