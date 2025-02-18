// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { Heart, Sparkles } from 'lucide-react';
// import Musicc from './musicc.mp3';

// const messages = [
//   "Hello fine shyt",
//   "it's Your Day!",
//   "So, i had to make something annoying for you bc you are special to me",
//   "would you like to listen some shi?",
//   "Do you want to see what I made from cheating on quiz and assignment??"
// ];

// const BirthdayGreeting = () => {
//   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
//   const [showButtons, setShowButtons] = useState(false);
//   const [showSongButtons, setShowSongButtons] = useState(false);
//   const [showFinalMessage, setShowFinalMessage] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (currentMessageIndex < messages.length) {
//       const timer = setTimeout(() => {
//         if (currentMessageIndex === messages.length - 1) {
//           setShowButtons(true); // Show buttons for the last message
//         } else if (currentMessageIndex === messages.length - 2) {
//           setShowSongButtons(true); // Show song buttons for the second-to-last message
//         } else {
//           setCurrentMessageIndex((prev) => prev + 1);
//         }
//       }, 4000); // Display each message for 5 seconds
//       return () => clearTimeout(timer);
//     }
//   }, [currentMessageIndex]);

//   const handleButtonClick = () => {
//     setShowButtons(false);
//     setShowFinalMessage(true);
//     setTimeout(() => {
//       navigate('/surprise');
//     }, 3000);
//   };

//   const handleSongButtonClick = () => {
//     setShowSongButtons(false);
//     setIsPlaying(true);
//     // Play the song here
//     const audio = new Audio(Musicc); 
//     audio.play();
//     // Automatically proceed to the next message after playing the song
//     setTimeout(() => {
//       setCurrentMessageIndex((prev) => prev + 1);
//     }, 500); 
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute"
//             initial={{ y: '100vh', x: Math.random() * 100 + 'vw' }}
//             animate={{
//               y: '-10vh',
//               x: Math.random() * 100 + 'vw',
//               rotate: 360
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               ease: 'linear'
//             }}
//           >
//             <Heart className="text-pink-300" size={24} />
//           </motion.div>
//         ))}
//       </div>

//       <div className="max-w-2xl w-full mx-4">
//         <AnimatePresence mode="wait">
//           {!showFinalMessage ? (
//             <motion.div
//               key="message"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 1, ease: 'easeInOut' }}
//               className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center"
//             >
//               <Sparkles className="inline-block text-yellow-400 mb-4" size={32} />
//               <AnimatePresence mode="wait">
//                 <motion.p
//                   key={currentMessageIndex}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.8, ease: 'easeInOut' }}
//                   className="text-2xl font-semibold text-gray-800 mb-6"
//                 >
//                   {messages[currentMessageIndex]}
//                 </motion.p>
//               </AnimatePresence>

//               {showSongButtons && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.6, ease: 'easeInOut' }}
//                   className="space-x-4"
//                 >
//                   <button
//                     onClick={handleSongButtonClick}
//                     className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-105 transition-all"
//                   >
//                     Yes
//                   </button>
//                   <button
//                     onClick={handleSongButtonClick}
//                     className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transform hover:scale-105 transition-all"
//                   >
//                     Ofc
//                   </button>
//                 </motion.div>
//               )}

//               {showButtons && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.6, ease: 'easeInOut' }}
//                   className="space-x-4"
//                 >
//                   <button
//                     onClick={handleButtonClick}
//                     className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-105 transition-all"
//                   >
//                     Yes!
//                   </button>
//                   <button
//                     onClick={handleButtonClick}
//                     className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transform hover:scale-105 transition-all"
//                   >
//                     No
//                   </button>
//                 </motion.div>
//               )}
//             </motion.div>
//           ) : (
//             <motion.div
//               key="final"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, ease: 'easeInOut' }}
//               className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center"
//             >
//               <p className="text-2xl font-semibold text-gray-800">
//                 Have a look at it!!
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default BirthdayGreeting;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';
import Musicc from './musicc.mp3';

const messages = [
  "Hello fine shyt",
  "It's Your Day!",
  "So, i had to make something annoying for you bc you are special to me",
  "would you like to listen some shi?",
  "Do you want to see what I made from cheating on quiz and assignments??"
];

const BirthdayGreeting = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showSongButtons, setShowSongButtons] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showNoMessage, setShowNoMessage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        if (currentMessageIndex === messages.length - 1) {
          setShowButtons(true);
        } else if (currentMessageIndex === messages.length - 2) {
          setShowSongButtons(true);
        } else {
          setCurrentMessageIndex((prev) => prev + 1);
        }
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  const handleYesClick = () => {
    setShowButtons(false);
    setShowFinalMessage(true);
    setTimeout(() => {
      navigate('/surprise');
    }, 3000);
  };

  const handleNoClick = () => {
    setShowButtons(false);
    setShowNoMessage(true);
    setTimeout(() => {
      setShowNoMessage(false);
      setShowFinalMessage(true);
      setTimeout(() => {
        navigate('/surprise');
      }, 3000);
    }, 4000);
  };

  const handleSongButtonClick = () => {
    setShowSongButtons(false);
    setIsPlaying(true);
    const audio = new Audio(Musicc);
    audio.play();
    setTimeout(() => {
      setCurrentMessageIndex((prev) => prev + 1);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: '100vh', x: Math.random() * 100 + 'vw' }}
            animate={{
              y: '-10vh',
              x: Math.random() * 100 + 'vw',
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <Heart className="text-pink-300" size={24} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl w-full mx-4">
        <AnimatePresence mode="wait">
          {!showFinalMessage && !showNoMessage ? (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center"
            >
              <Sparkles className="inline-block text-yellow-400 mb-4" size={32} />
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentMessageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="text-2xl font-semibold text-gray-800 mb-6"
                >
                  {messages[currentMessageIndex]}
                </motion.p>
              </AnimatePresence>

              {showSongButtons && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="space-x-4"
                >
                  <button
                    onClick={handleSongButtonClick}
                    className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-105 transition-all"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleSongButtonClick}
                    className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transform hover:scale-105 transition-all"
                  >
                    Ho
                  </button>
                </motion.div>
              )}

              {showButtons && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="space-x-4"
                >
                  <button
                    onClick={handleYesClick}
                    className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-105 transition-all"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleNoClick}
                    className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transform hover:scale-105 transition-all"
                  >
                    No
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : showNoMessage ? (
            <motion.div
              key="no-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center"
            >
              <p className="text-2xl font-semibold text-gray-800">
                Oh, you don't want to see it?….dw i will still show you.….
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center"
            >
              <p className="text-2xl font-semibold text-gray-800">
                Have a look at it!!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BirthdayGreeting;