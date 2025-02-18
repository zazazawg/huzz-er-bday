import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Happy Birthday Toa,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          তোমার জন্মদিনে ভাবলাম, তোমাকে একটা ইউনিক উপহার দেবো। তাই নিজেই এসে গেলাম, কারণ আমার থেকে ইউনিক কিছু আর নেই! 😏

          তোমার হাসি দেখে মনে হয়, মিষ্টির দোকান থেকে সুদ নিতে হবে। প্লিজ, তোমার হাসি একটু কম করো, না হলে কেকের ক্যান্ডেলগুলোর আনওয়ান্টেড ফিল হবে! 🎂🔥
          তোমার স্পেশাল দিনটা এত সুন্দর কাটুক যে, কাল থেকে আমি স্পেশাল হওয়ার জন্য ঈর্ষায় পুড়ে যাব। 😜
          আজ শুধু হাসবে, কারণ তোমার হাসি আমাকে বাঁচিয়ে রাখে।
          সত্যি বলতে, যদি অসাধারণ হওয়ার জন্য একটা প্রতিযোগিতা থাকতো, তুমি সবাইকে এমনভাবে পরাজিত করতে, যে বাকিরা মনে করত “হেরে গিয়ে ভালই করলাম”😜

          তুমি সেই মানুষ, যাকে দেখে আলু পর্যন্ত ফ্যাশনেবল লাগবে, আর সেটা একটা সুপারপাওয়ার! তো, এই বছর আমি তোমাকে ‘good luck’ বলবো না—কারণ তুমি তো নিজেই একটা সফলতার গল্প(having me on your side)তবে যদি চাও, আমি তোমাকে এক বছরের কেকের সাপ্লাই দিয়ে দিচ্ছি...
          just to be generous🍰🎂🧁🥮🍥🍰🎂🧁🥮🍥🍰🎂🧁🥮🍥🍰🎂🧁🥮🍥🍰🎂🧁🥮🍥
        </p>
        {/* <p className="text-lg text-pink-600 font-semibold">
          With Love, Shahadat
        </p> */}
      </motion.div>
    </div>
  );
};

export default Message;