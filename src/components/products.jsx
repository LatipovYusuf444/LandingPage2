import React from 'react';
import { motion } from 'framer-motion';
import map from '../assets/map.svg';

const Products = () => {
  return (
    <div className='container mx-auto text-white px-4 md:px-0'>

      <div
        className="w-full h-auto md:h-[986px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${map})` }}
      >
        {/* Title section */}
        <motion.div
          className='flex flex-col md:flex-row gap-4 md:gap-6 md:pl-16 pt-10 md:pt-24'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='w-2 h-10 md:h-16 bg-[#EA0C0C]' />
          <h1 className='font-extrabold pb-4 text-[22px] sm:text-[26px] md:text-[40px] leading-[120%]'>
            Мы доставляем из
          </h1>
        </motion.div>

        {/* Glass container */}
        <div className="
          w-full 
          flex flex-col sm:flex-row 
          items-start sm:items-center 
          gap-10 sm:gap-5 
          mt-6 mb-12 
          p-6 sm:p-8
          rounded-3xl 
          bg-white/10 backdrop-blur-xl border border-white/20 
          shadow-lg shadow-black/30
        ">
          
          {/* Left column */}
          <motion.div
            className='flex flex-col text-[16px] sm:text-[18px]'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              'Польша', 'Германии', 'Польша', 'Франции', 'Польша',
              'Германии', 'Франции', 'Германии', 'Франции'
            ].map((country, i) => (
              <div key={i} className='flex gap-3 pb-3 sm:pb-[26px]'>
                <b>{country}</b>
                <p>от 0,00 USD</p>
              </div>
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div
            className='flex flex-col text-[16px] sm:text-[18px]'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              'Польша', 'Германии', 'Польша', 'Франции', 'Польша',
              'Германии', 'Франции', 'Германии', 'Франции'
            ].map((country, i) => (
              <div key={i} className='flex gap-3 pb-3 sm:pb-[26px]'>
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
