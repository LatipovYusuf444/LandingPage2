import React from 'react';
import { motion } from 'framer-motion';
import slaydi from '../assets/slaydi.svg';

export default function FirstPage() {
  return (
    <div className='container mx-auto px-4 sm:px-10'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-[120px] pt-10 lg:pt-20'>
        <motion.div
          className='flex flex-col'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className='font-extrabold text-[40px] sm:text-4xl md:text-5xl leading-[120%] tracking-[0px] pb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Быстрая доставка <br />
            товаров из Польши <br />
            и стран Еврорзоюза <br />
            в Украину
          </motion.h1>

          <motion.p
            className='font-normal text-2xl sm:text-xl md:text-2xl leading-[140%] tracking-[0px] pb-10 sm:pb-10 md:pb-[186px]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            оцени новый уровень в качестве <br />
            обслуживания и скорости доставки
          </motion.p>

          <motion.div
            className="w-full max-w-[520px] h-16 bg-white rounded-xl flex flex-col sm:flex-row items-center p-2 gap-3 border-5 border-[#FBCECE]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <input
              className="w-full sm:w-[382px] h-12 bg-[#F2F2F2] p-3 rounded-xl text-[16px] outline-none border border-transparent"
              type="text"
              placeholder="Вставить ссылку на товар*"
            />
            <motion.button
              className="h-12 px-6 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold mt-2 sm:mt-0"
              whileHover={{ scale: 1.05, backgroundColor: "#e63946" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Заказать
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.img
          className='w-full max-w-[738px] mt-8 lg:mt-0'
          src={slaydi}
          alt=""
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        />
      </div>
    </div>
  )
}
