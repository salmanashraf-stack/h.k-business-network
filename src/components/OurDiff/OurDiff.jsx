import React from 'react'
import "./OurDiff.css"
import { ourDiffFeatures } from '@/utils/data'
import Image from "next/image"
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animation'

const OurDiff = () => {
  return (
    <div className='od-wrapper'>
        <div className="container">
            <div className="od-container">

                {/* head */}
                <div className="od-head">
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='tag'>About Us</motion.span>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title'>Together for Progress, United for Change</motion.span>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='text'>H.K Business Network is a non-political, social organization committed to connecting Pakistan&apos;s most accomplished individuals. Our mission is to strengthen ties among government officials, business leaders, media personalities, educators, and other distinguished professionals to foster national development through collaboration. We aim to be a premier platform for dialogue and mentorship, empowering members to share knowledge and elevate Pakistan&apos;s future.
                    </motion.span>
                </div>

                {/* feature */}
                <div className="od-features">
                    {ourDiffFeatures.map((feature, i) => (
                        <motion.div 
                        variants={containerVariants((i+1) * 0.1)}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        key={i} className='od-feature'>
                            <Image src={feature.icon} alt='feature' width={128} height={128}/>
                            <span className='sec-title'>{feature.title}</span>
                            <span className='text'>{feature.des}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDiff