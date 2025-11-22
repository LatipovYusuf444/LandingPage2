import React from 'react';
import { motion } from 'framer-motion';
import map from '../assets/map.svg';

const Products = () => {
  return (
    <div className='container mx-auto bg-[#F2F2F2] px-4 md:px-0'>

      <div
        className="w-full h-auto md:h-[986px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${map})` }}
      >
        <motion.div
          className='flex flex-col md:flex-row gap-6 md:pl-16 pt-16 md:pt-24'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='w-2 h-16 bg-[#EA0C0C]'></div>
          <h1 className='font-extrabold text-[28px] md:text-[40px] leading-[120%] tracking-[0px]'>
            Мы доставляем из
          </h1>
        </motion.div>
        <div className='flex flex-col md:flex-row gap-12 md:gap-16 pl-0 md:pl-16 pt-8 md:pt-[64px] pb-16 md:pb-[202px]'>
          <motion.div
            className='flex flex-col'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              'Польша', 'Германии', 'Польша', 'Франции', 'Польша',
              'Германии', 'Франции', 'Германии', 'Франции'
            ].map((country, i) => (
              <div key={i} className='flex gap-4 pb-6 md:pb-[26px]'>
                <b>{country}</b>
                <p>от 0,00 USD</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            className='flex flex-col'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              'Польша', 'Германии', 'Польша', 'Франции', 'Польша',
              'Германии', 'Франции', 'Германии', 'Франции'
            ].map((country, i) => (
              <div
                key={i}
                className={`flex gap-4 pb-6 md:pb-[26px] ${i === 4 ? 'text-[#EA0C0C]' : ''}`}
              >
                <b>{country}</b>
                <p>от 0,00 USD</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
