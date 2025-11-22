import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Working() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        container.scrollLeft = 0;
        const scrollSpeed = 1.2;

        const autoScroll = () => {
            if (!container) return;

            container.scrollLeft += scrollSpeed;
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            }

            requestAnimationFrame(autoScroll);
        };

        requestAnimationFrame(autoScroll);
    }, []);

    const items = [
        "Вы выбираете товар",
        "Предоставляете ссылку",
        "Внести предоплату",
        "Выкупаем товар и везем в Украину",
        "Оплатить остаток",
        "Получите товар",
    ];

    return (
        <div className="container mx-auto px-4 md:px-0">
            <div className="bg-[#F2F2F2]">
                <div className="flex gap-6 pt-16 pb-16 pl-0 md:pl-[70px]">
                    <div className="w-2 h-12 bg-[#EA0C0C]"></div>
                    <h1 className="font-extrabold text-[28px] md:text-[40px]">
                        Как это работает
                    </h1>
                </div>
                <div className="w-full overflow-x-auto">
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap gap-6 md:gap-[50px] w-max pb-12"
                    >
                        {[...items, ...items].map((title, i) => (
                            <motion.div
                                key={i}
                                className="w-[212px] min-h-[290px] bg-white rounded-lg p-4 shadow-sm flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <h3 className="font-bold text-base mb-3">{title}</h3>
                                <p className="text-sm leading-[140%] flex-1">
                                    Каждый веб-разработчик знает, что такое текст-«рыба».
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center pb-[88px]">
                    <motion.button
                        className="bg-[#EA0C0C] rounded-[10px] p-5 text-white font-bold text-xl uppercase"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Заказать
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
