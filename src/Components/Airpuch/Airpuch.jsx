import React from 'react';
import tero1 from './image copy.png'
import tero2 from './image.png'
import tero3 from './image copy 3.png'
import tero4 from './image copy 2.png'

const Airpuch = () => {
    return (
        <div>
            <div className='text-center'>
                <br />
                <h1 className='text-5xl p-3'>Туры</h1>
                <h2 className='text-2xl'>Лучшие туристические туры</h2>
                <br />
                <br />
            </div>
            <br />
            <br />
            <div className='flex w-[1440px] h-[200px] items-center justify-between gap-9'>
                <div className='w-[25%] rounded-2xl h-[390px] shadow-md'><img src={tero1} alt="" className='rounded-2xl' /><h1 className='text-2xl p-1.5' >Путешествие по Турции</h1>
                    <p className='p-1.5'>Стамбул, Анталья, Каппадокия - самые известные места</p>
                    <button className='w-[110px] h-[35px] bg-orange-500 text-white rounded-2xl  text-center '>Подробнее</button></div>
                <div className='w-[25%] rounded-2xl h-[390px] shadow-md'><img src={tero2} alt="" className='rounded-2xl' /><h1 className='text-2xl p-1.5'>Путешествие по Узбекистану</h1>
                    <p className='p-1.5'>Путешествие по историческим и культурным городам Узбекистана</p>
                    <button className='w-[110px] h-[35px] bg-orange-500 text-white rounded-2xl  text-center '>Подробнее</button></div>
                <div className='w-[25%] rounded-2xl h-[390px] shadow-md'><img src={tero3} alt="" className='rounded-2xl' /><h1 className='text-2xl p-1.5'>Путешествие по Европе</h1>
                    <p className='p-1.5'>Франция, Италия, Германия, Испания - самые красивые города</p>
                    <button className='w-[110px] h-[35px] bg-orange-500 text-white rounded-2xl  text-center '>Подробнее</button></div>
                <div className='w-[25%] rounded-2xl h-[390px] shadow-md'><img src={tero4} alt="" className='rounded-2xl ' /><h1 className='text-2xl p-1.5'>Дубай</h1>
                    <p className='p-1.5'>Современная архитектура и роскошные торговые центры</p>
                    <button className='w-[110px] h-[35px] bg-orange-500 text-white rounded-2xl  text-center '>Подробнее</button></div>
            </div>
        </div>
    );
}

export default Airpuch;
