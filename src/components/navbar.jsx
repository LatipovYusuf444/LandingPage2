import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo2 from "../assets/logo2.svg";
import telephone from '../assets/telephone.svg';
import telegram from '../assets/telegram.svg';
import vector from '../assets/vector.svg';
import soroq from '../assets/soroq.svg';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <motion.div
            className='text-white container mx-auto'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <section className='flex flex-col lg:flex-row justify-between items-center p-4 gap-6 lg:gap-24'>
                <motion.div
                    className='flex flex-col lg:flex-row gap-6 lg:gap-15 items-center'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <img src={logo2} alt="logo" className="cursor-pointer" />
                    </div>
                    <div>
                        <div className='flex flex-col lg:flex-row items-center lg:gap-4'>
                            <p className='text-sm'>Наши мессенджеры</p>
                            <div className='flex gap-2'>
                                <motion.img
                                    src={telephone}
                                    alt="телефон"
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => window.location.href = "tel:+74952554824"}
                                    className="cursor-pointer"
                                />
                                <motion.img
                                    src={telegram}
                                    alt="телеграм"
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => window.open("https://t.me/yourtelegram", "_blank")}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 text-sm pt-1'>
                            <motion.img
                                src={vector}
                                alt="почта"
                                whileTap={{ scale: 0.9 }}
                                onClick={() => window.location.href = "mailto:info@poland24.com.ua"}
                                className="cursor-pointer"
                            />
                            <p>info@poland24.com.ua</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='flex flex-col text-center lg:text-left'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p><b>'zł</b> 00,00</p>
                    <p><b>€</b> 00,00</p>
                </motion.div>
                <motion.div
                    className='w-[165px] cursor-pointer h-12 bg-[#2D1E2F] rounded-lg text-white text-center flex items-center justify-center'
                    whileHover={{ scale: 1.05, backgroundColor: "#2D1E2F" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <button>Оформить заказ</button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <a href="#">Вход / Регистрация</a>
                </motion.div>
                <div className="lg:hidden ml-auto">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FiX size={28} color="#000" /> : <FiMenu size={28} color="#000" />}
                    </button>
                </div>
            </section>
            <motion.ul
                className={`flex flex-col lg:flex-row lg:flex-wrap justify-center lg:justify-between gap-4 lg:gap-20 items-center pb-2 pt-2 overflow-hidden
          ${menuOpen ? 'max-h-96' : 'max-h-0'} transition-all duration-500 ease-in-out`}
            >
                {["О компании", "Список магазину", "Отзывы", "Вопрос -ответ", "Калькулятор", "Контакты"].map((item, idx) => (
                    <motion.li
                        key={idx}
                        whileHover={{ scale: 1.05, color: "#d1d5db" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <a href="#">{item}</a>
                    </motion.li>
                ))}
                <motion.li
                    className='flex items-center bg-[#2D1E2F] text-white rounded-md'
                    whileHover={{ scale: 1.05, backgroundColor: "#2D1E2F" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <a href="#" className='flex p-1 items-center gap-1'>
                        <img src={soroq} alt="help" /> Помощь в поиске товаров
                    </a>
                </motion.li>
            </motion.ul>

            <motion.hr
                className='pb-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />
        </motion.div>
    )
}
