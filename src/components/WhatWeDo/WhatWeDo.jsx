"use client"

import React from 'react'
import './WhatWeDo.css'
import { features, benefits } from '@/utils/data' // Import benefits from data.js
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animation'

const WhatWeDo = () => {
  return (
    <div className='wwd-wrapper'>
        <div className="container">
            <div className="wwd-container">
                {/* Head of section */}
                <div className="wwd-head">
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='tag text-center'>H.K Business Network - Executive Membership 2024</motion.span>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title'>Invitation for Inclusion of Distinguished Personalities</motion.span> 
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='des'>H.K Business Network is extending an invitation for Executive Membership 2024, welcoming exemplary individuals to join an elite platform where collaboration and leadership thrive. Members have the chance to meet like-minded individuals, share their success stories, and engage in meaningful projects that impact the nation.</motion.span>
                     <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title'>Benefits of Joining H.K Business Network</motion.span>
                </div>

                {/* Support blocks */}
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="wwd-support w-full bg-gray-200">
                    {/* Benefits Section */}
                    <div className='w-full'>
                        {/* <span className='sec-title mx-auto'>Benefits</span> */}
                        <Accordion type="single" collapsible className="w-full">
                            {/* Map through each category of benefits */}
                            {Object.entries(benefits).map(([key, benefitGroup]) => (
                                <AccordionItem className="max-w-[1200px]" value={key} key={key}>
                                    <AccordionTrigger className="text-2xl">{benefitGroup[0].title}</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className=''>
                                            {/* Map through each benefit detail */}
                                            {benefitGroup[0].details.map((detail, index) => (
                                                <li className='text-lg' key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo;
