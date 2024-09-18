import React from 'react'
import {motion} from "framer-motion";
import { TestimonialCard } from './TestimonialCard';

const TestimonialReel = ({column, duration}:{column:any[], duration:number}) => {
  return (
      <motion.div
          animate={{
              translateY: "-50%",
          }}
          transition={{
              duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
          }}
          className=" flex flex-col gap-6 "
      >
          {[...new Array(2)].map((_, ii) => (
              <React.Fragment key={ii}>
                  {column.map((testimonial, i) => (
                      <TestimonialCard
                          idx={`${ii}${i}`}
                          key={testimonial.username}
                          {...testimonial}
                      />
                  ))}
              </React.Fragment>
          ))}
      </motion.div>
  );
}

export default TestimonialReel