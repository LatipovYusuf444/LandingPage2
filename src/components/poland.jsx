import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/Image.png';

const Poland = () => {
    return (
        <div className="container mx-auto bg-[#F2F2F2] pb-16 px-4 md:px-0">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-[85px]">
                <div className="flex flex-col md:flex-1">
                    <motion.div
                        className="flex gap-6 pb-8 md:pb-16"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-2 h-24 bg-[#EA0C0C]"></div>
                        <div>
                            <h1 className="font-extrabold text-[32px] md:text-[40px] leading-[120%] tracking-[0px]">
                                О нас
                            </h1>
                            <p className="font-normal text-xl md:text-2xl leading-[140%] tracking-[0px]">
                                15 лет опыт производства. Знаем все доставке
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="pb-8 md:pb-16"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <p className="font-normal text-xl md:text-2xl leading-[140%] tracking-[0px]">
                            Компания Poland24 осуществляет доставку из <br />
                            любого магазина/поставщика/производителя <br />
                            стран Евросоюза, которые осуществляют <br />
                            доставку товара курьером в Польшу.
                        </p>
                    </motion.div>
                    <motion.button
                        className="w-32 h-12 border-2 border-[#95A4AA] rounded-2xl hover:bg-[#EA0C0C] hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Подробнее
                    </motion.button>
                </div>
                <motion.img
                    src={image}
                    alt="Poland"
                    className="w-full max-w-sm md:max-w-md"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>
    );
};

export default Poland;
