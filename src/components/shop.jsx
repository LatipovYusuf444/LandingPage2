import React from 'react';
import { motion } from 'framer-motion';
import ebay from '../assets/ebay.svg';

const shops = [
    {
        name: 'eBay',
        img: ebay,
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise,',
        delivery: 'до 7 дней',
        commission: '0,68%',
    },
    {
        name: 'eBay',
        img: ebay,
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise,',
        delivery: 'до 7 дней',
        commission: '0,68%',
    },
    {
        name: 'eBay',
        img: ebay,
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise,',
        delivery: 'до 7 дней',
        commission: '0,68%',
    },
    {
        name: 'eBay',
        img: ebay,
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise,',
        delivery: 'до 7 дней',
        commission: '0,68%',
    },
];

const Shop = () => {
    return (
        <div className='container mx-auto bg-[#F2F2F2] pb-16 px-4 md:px-0'>
            <motion.div
                className='flex gap-6 pl-0 md:pl-16 pt-16 md:pt-24'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className='w-2 h-16 bg-[#EA0C0C]'></div>
                <h1 className='font-extrabold text-[32px] md:text-[40px] pb-12'>Каталог магазинов</h1>
            </motion.div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pl-0 md:pl-16'>
                {shops.map((shop, index) => (
                    <motion.div
                        key={index}
                        className='w-full bg-white pl-4 md:pl-8 pt-10 pb-8 rounded-[10px] shadow-md hover:shadow-xl transition-shadow cursor-pointer'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img className='pb-4 md:pb-8 mx-auto' src={shop.img} alt={shop.name} />
                        <h2 className='font-bold text-2xl leading-[120%] tracking-[0px] pb-2'>{shop.name}</h2>
                        <p className='font-normal text-base leading-[140%] tracking-[0px] pb-4'>{shop.description}</p>
                        <div className='flex gap-2 pb-2'>
                            <p>Сроки доставки:</p>
                            <b>{shop.delivery}</b>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='flex gap-2 pt-2'>Комиссия на доставку <b>{shop.commission}</b></p>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.549175 0.549175C1.28141 -0.183058 2.46859 -0.183058 3.20083 0.549175L16.3518 13.7002V3.20083C16.3518 2.16529 17.1913 1.32583 18.2268 1.32583C19.2624 1.32583 20.1018 2.16529 20.1018 3.20083V18.2268C20.1018 19.2624 19.2624 20.1018 18.2268 20.1018H3.20083C2.16529 20.1018 1.32583 19.2624 1.32583 18.2268C1.32583 17.1913 2.16529 16.3518 3.20083 16.3518H13.7002L0.549175 3.20083C-0.183058 2.46859 -0.183058 1.28141 0.549175 0.549175Z" fill="#2D2D2D" />
                            </svg>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
