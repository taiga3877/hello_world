import React from 'react';
import logo from '../../assets/image.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white " data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className=" grid-cols-1 md:grid-cols-4 gap-8 flex items-center justify-around w-[1300px] ">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img className="w-28" src={logo} alt="Logo" />
                        </div>
                        <p className="text-gray-400">г. Ташкент, ул. Мукими, 44-А</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Контакты</h3>
                        <div className="space-y-2">
                            <p className="text-gray-400">Тел: +998 95 150 00 00</p>
                            <p className="text-gray-400">info@nemoavia.uz</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Социальные сети</h3>
                        <div className="flex space-x-4">
                            <a href="https://t.me/NemoTC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.554.223l.198-2.8 5.094-4.613c.223-.198-.054-.31-.346-.112l-6.292 3.957-2.71-.848c-.588-.183-.608-.588.124-.87l10.576-4.082c.49-.182.92.126.752.873z"></path></svg>
                            </a>
                            <a href="https://instagram.com/nemotravel_uz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                            </a>
                            <a href="mailto:Info@nemoaviatrip.uz" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 mt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">2025 Nemo Avia Trip. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
