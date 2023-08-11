import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { slideIn, textVariant } from "../utils/motion";
import AvatarParent from "./AvatarParent";
import { useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import StarWrapper from "../hoc/SectionWrapper";

const Hero = () => {
  const [avatarVisible, setAvatarVisible] = useState(true);
  const [showSpan, setShowSpan] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAvatarVisible(false);
    }, 5000); // Change to the desired duration before fading out
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSpan(true); // After the timeout, set showSpan to true to render the span
    }, 2000); // Adjust the duration (in milliseconds) as needed

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <AnimatePresence>
            <motion.h1
              initial={{ opacity: 0 }} // Set initial opacity to 0
              animate={{ opacity: 1 }} // Animate opacity to 1
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }} // Optional: Set exit opacity (if needed)
              className={`${styles.heroHeadText} text-white `}
            >
              Hi, I am <span className="text-[#915eff]">Viraj!</span>{" "}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence>
            {showSpan && ( // Render the span conditionally based on the showSpan state
              <motion.p
                className={`${styles.heroSubText}`}
                initial={{ opacity: 0, translateX: 1000 }} // Set initial opacity to 0
                animate={{ opacity: 1, translateX: 0 }} // Animate opacity to 1
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }} // Optional: Set exit opacity (if needed)
                variants={textVariant()}
              >
                I am a passionate FullStack WebDeveleoper{" "}
                <br className="sm:hidden" /> and i like exploring new
                technologies!
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {avatarVisible && (
          <motion.AvatarParent
            initial={{ opacity: 0 }}
            animate = {{opacity:2}}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <AvatarParent />
          </motion.AvatarParent>
        )}
      </AnimatePresence>
      {!avatarVisible && ( <AnimatePresence initial = {{opacity:0}} exit = {{opacity:1}} ><ComputersCanvas /></AnimatePresence> )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transistion={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default StarWrapper(Hero, "hero");
