//import React from 'react';
//import { assets } from '../assets/assets.js';
import Title from './Title';

const OurPolicy = () => {
   return (
      <div>
         <div className='text-center text-3xl py-5'>
            <Title
               text1={'OUR '}
               text2={'POLICIES'}
            />
         </div>
         <div
            className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-5
         0 text-xs sm:text-sm md:text-base text-gray-700'
         >
            <div>
               <p className='font-semibold'>Return Policy</p>
               <p className='text-gray-400'>
                  We offer hassle free exchange policy and provide 21 days free
                  return policy.
               </p>
            </div>
            <div>
               <p className='font-semibold'>Quality Policy</p>
               <p className='text-gray-400'>
                  We offer high quality products. If you are not satisfied, you
                  can get your money back guaranteed before 21 days.
               </p>
            </div>
            <div>
               <p className='font-semibold'>Customer Support</p>
               <p className='text-gray-400'>
                  We offer best customer support and you can contact us anytime
                  24/7 by phone +1-800-999-9999 or email shthappens@sht.com.
               </p>
            </div>
         </div>
      </div>
   );
};

export default OurPolicy;
