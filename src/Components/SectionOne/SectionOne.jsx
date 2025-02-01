import React from 'react';
import contact from '../../assets/address-book-solid.svg'

const SectionOne = () => {
    return (
        <div className='w-[1440px] h-[600px] bg-orange-500 m-auto text-white flex items-center justify-center'>
            <div className='w-[900px] m-auto text-center'>
                <h1 className='text-5xl p-[20px] '>Начните путешествие с нами</h1>
                <h2 className='text-2xl'>Nemo Travel - путь к комфорту</h2>
                <br />
                <br />
                <div className='flex items-center justify-around w-[800px] text-start text-black bg-white p-5 rounded-[44px]'>
                    <div className=''><img src="" alt="" /><p>Довольных клиентов</p><p>45000+</p></div>
                    <div className=''><img src="" alt="" /><p>Стран</p><p>30+</p></div>
                    <div className=''><img src="" alt="" /><p>Лет опыта</p><p>5+ yil</p></div>
                    <button className='w-[140px] h-[35px] bg-orange-500 text-white rounded-2xl  text-center '>Узнать больше</button>
                </div>
            </div>
        </div>
    );
}

export default SectionOne;
