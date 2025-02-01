import React from 'react';
import office1 from '../../assets/image copy.png'
import office2 from '../../assets/image copy 2.png'
import office3 from '../../assets/image copy 3.png'

const About = () => {
    return (
        <div className='max-w-[1440px] w-full mx-auto text-center p-6'>
            <h1 className='text-5xl p-6'>О нас</h1>
            <h2 className='text-2xl'>Ваш надежный партнер в путешествиях</h2>
            <br />
            <div className='flex flex-wrap justify-center gap-8 text-start'>
                <div className='w-full md:w-[600px] p-6 shadow-lg rounded-lg bg-white'>
                    <h3 className='text-xl font-semibold mb-4'>Наша миссия</h3>
                    <p>Предоставление высококачественных и удобных туристических услуг с индивидуальным подходом к каждому клиенту.</p>
                </div>
                <div className='w-full md:w-[600px] p-6 shadow-lg rounded-lg bg-white'>
                    <h3 className='text-xl font-semibold mb-4'>Наше видение</h3>
                    <p>Стать ведущей туристической компанией в Узбекистане и признанным брендом на международном уровне.</p>
                </div>
            </div>
            <div className='max-w-[1440px] w-full mx-auto text-center p-6'>
                <h1 className='text-5xl p-6 font-bold'>О нас</h1>
                <h2 className='text-2xl mb-6'>Ваш надежный партнер в путешествиях</h2>

                <div className='flex flex-col md:flex-row gap-8 items-center h-[700px] '>
                    {/* Текстовый блок */}
                    <div className='max-w-2xl text-left p-6 bg-white shadow-lg rounded-lg'>
                        <p className='text-lg'>
                            Наша туристическая компания предлагает путешествия и удобства по всему миру. Мы доставим вас в вашу мечту и поможем создать незабываемые воспоминания.
                            Наша компания сотрудничает с крупными авиакомпаниями, такими как UzAirways, Centrum Air, Turkish Airlines.
                        </p>
                        <br />
                        <p className='text-lg'>
                            Наша опытная команда предоставляет тщательно спланированные услуги, учитывая все детали. Путешествуйте с нами в любую точку мира удобно и уверенно!
                            Наши услуги включают: туры во Францию, Германию, Индонезию, ОАЭ, страхование туристов и многое другое.
                        </p>
                    </div>

                    {/* Изображение */}
                    <div className='flex flex-col gap-2 '>
                        <img src={office1} alt='Офис компании' className='w-[30%] h[130px] max-w-md rounded-lg shadow-lg' />
                        <div className='flex justify-around items-center'>
                            <img src={office2} alt='Офис' className='w-[30%] h[130px]  rounded-lg shadow-md' />
                            <img src={office3} alt='Рабочая зона' className='w-[30%] h[130px] rounded-lg shadow-md' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1440px] h-[200px] '><h1 className='text-5xl p-6' >Наша команда</h1>
                <div className=' w-[1440px] h-[200px]  flex items-center justify-around text-center'>
                    <div className='w-[20%] h-[100px] shadow-md flex justify-center items-center'><h1 className=''>Директор</h1></div>
                    <div className='w-[20%] h-[100px] shadow-md flex justify-center items-center'><h1 className=''>Юрист</h1></div>
                    <div className='w-[20%] h-[100px] shadow-md flex justify-center items-center'><h1 className=''>Оператор</h1></div>
                    <div className='w-[20%] h-[100px] shadow-md flex justify-center items-center'><h1 className=''>Администратор</h1></div>
                </div>
            </div>
        </div>

    );
}

export default About;
