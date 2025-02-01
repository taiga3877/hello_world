import React from 'react';

const Contact = () => {
    return (
        <div className="py-8 w-[1440px] " id="contact">
            <div className=" min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4 text-nemo-dark">Свяжитесь с нами</h2>
                            <br />
                            <p className="text-xl text-gray-600">Есть вопросы? Мы рады помочь!</p>
                            <br />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <form className="space-y-6 w-[600px] ">
                                    <div>
                                        <br />
                                        <label className="block text-gray-700 mb-2" htmlFor="name">Ваше имя</label>
                                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark" />
                                    </div>
                                    <div>
                                        <br />
                                        <label className="block text-gray-700 mb-2" htmlFor="email">Ваш email</label>
                                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark" />
                                    </div>
                                    <div>
                                        <br />
                                        <label className="block text-gray-700 mb-2" htmlFor="phone">Ваш телефон</label>
                                        <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark" />
                                    </div>
                                    <div>
                                        <br />
                                        <label className="block text-gray-700 mb-2" htmlFor="subject">Тема</label>
                                        <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark" />
                                    </div>
                                    <div>
                                        <br />
                                        <label className="block text-gray-700 mb-2" htmlFor="message">Ваше сообщение</label>
                                        <textarea id="message" name="message" required rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-nemo-dark text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                                        Отправить
                                    </button>
                                </form>
                            </div>
                            <div className="space-y-6 w-[600px]">
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-semibold text-nemo-dark mb-4">Контактная информация</h3>
                                    <div className="space-y-4 text-gray-600">
                                        <p>Адрес: г. Ташкент, ул. Мукими, 44-А</p>
                                        <p>Тел: +998 95 150 00 00</p>
                                        <p>Email: info@nemoavia.uz</p>
                                        <p>Режим работы: Пн-Сб, 24 часа</p>
                                    </div>
                                </div>
                                <br />
                                <div className="bg-white rounded-lg shadow-lg p-6">

                                    <div className="w-full h-[350px] rounded-lg overflow-hidden">
                                        <iframe
                                        src="https://maps.app.goo.gl/t6npy56LXmfKdwrW8"
                                            width="100%"
                                            height="100%"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-lg border-0"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
