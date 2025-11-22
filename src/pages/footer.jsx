import React from "react";
import { motion } from "framer-motion";
import logo2 from "../assets/logo2.svg";

const Footer = () => {
    return (
        <div className="container mx-auto bg-[#1E2122] px-4 md:px-0">
            <div className="flex flex-col md:flex-row flex-wrap pt-16 pb-16 justify-between gap-10">
                <motion.div
                    className="flex flex-col gap-4 md:gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={logo2} alt="Logo" className="w-32 md:w-40" />
                    <p className="text-[#D2D3D3] font-normal text-sm leading-[120%]">
                        Copyright © 2022 Poland24.com.ua. <br />
                        Все права защищены.
                    </p>
                </motion.div>
                <motion.ul
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="font-bold text-base pb-4 text-white">Навигация</h1>
                    <li>
                        <a className="text-white pb-3 text-sm block" href="#">
                            О компании
                        </a>
                    </li>
                    <li>
                        <a className="text-white pb-3 text-sm block" href="#">
                            Доставка из магазинов Европы
                        </a>
                    </li>
                    <li>
                        <a className="text-white pb-3 text-sm block" href="#">
                            Список магазинов
                        </a>
                    </li>
                    <li>
                        <a className="text-white text-sm block" href="#">
                            Отзывы
                        </a>
                    </li>
                </motion.ul>
                <motion.ul
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <li>
                        <a className="text-white pb-3 text-sm block" href="#">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a className="text-white pb-3 text-sm block" href="#">
                            Товар на складе в Украине
                        </a>
                    </li>
                    <li>
                        <a className="text-white text-sm block" href="#">
                            Правила магазина
                        </a>
                    </li>
                </motion.ul>
                <motion.div
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="font-medium text-sm text-white">Мы в соц.сетях:</p>
                    <div className="flex gap-2">
                        <svg width="32" height="32" fill="#3B5998">
                            <circle cx="16" cy="16" r="16" />
                        </svg>
                        <svg width="32" height="32" fill="#4D76A1">
                            <circle cx="16" cy="16" r="16" />
                        </svg>
                        <svg width="32" height="32" fill="#E1306C">
                            <circle cx="16" cy="16" r="16" />
                        </svg>
                    </div>
                    <div className="pt-5 flex flex-col gap-2">
                        <p className="text-white text-sm font-semibold">Контакты</p>

                        <div className="flex gap-2 items-center text-white text-sm">
                            <svg width="16" height="16" fill="white">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                            <p>Украина, Жовква, ул. Набержная, 1</p>
                        </div>

                        <div className="flex gap-2 items-center text-white text-sm">
                            <svg width="16" height="16" fill="white">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                            <p>Время работы с 10:00 до 19:00</p>
                        </div>

                        <div className="flex gap-2 items-center text-white text-sm">
                            <svg width="16" height="16" fill="white">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                            <p>+38 (093) 496 58 00</p>
                        </div>

                        <div className="flex gap-2 items-center text-[#9D7B6D] text-sm">
                            <svg width="16" height="16" fill="#9D7B6D">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                            <p>poland24.com.ua</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Footer;
