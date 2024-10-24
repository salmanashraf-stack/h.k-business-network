import React from 'react';
import './WhoWeInvest.css';
import { hkBusinessStructure } from '@/utils/data';
import { motion } from 'framer-motion';
import { containerVariants, tagVariants } from '@/utils/animation';
// Import Accordion from ShadCN
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const WhoWeInvest = () => {
  return (
    <div className='wwi-wrapper'>
      <div className="container">
        <div className="wwi-container">
          {/* left side */}
          <div className="wwi-left">
            <div className="head">
              <motion.span 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className='tag'>
                  H.K Business Network Infrastructure
              </motion.span>
            </div>

            {/* feature */}
            <div className="wwi-features">
              <Accordion type="single" collapsible className="w-full mt-6 px-4">
                {
                  hkBusinessStructure.map((feature, i) => (
                    <motion.div
                      initial="offscreen"
                      whileInView="onscreen"
                      variants={containerVariants(i * 0.05 + 1)}
                      className="wwi-feature"
                      key={i}
                    >
                      <AccordionItem value={`item-${i}`}>
                        <AccordionTrigger className="text-gray-100 text-lg lg:text-2xl font-semibold">
                          {feature.title}
                        </AccordionTrigger>
                        <AccordionContent className="lg:text-lg text-gray-200">
                          <p>{feature.des}</p>
                          {feature.responsibilities && (
                            <ul className="list-disc pl-6 mt-2">
                              {feature.responsibilities.map((resp, idx) => (
                                <li key={idx} className="my-1">{resp}</li>
                              ))}
                            </ul>
                          )}
                          {feature.benefits && (
                            <ul className="list-disc pl-6 mt-2">
                              {feature.benefits.map((benefit, idx) => (
                                <li key={idx} className="my-1">{benefit}</li>
                              ))}
                            </ul>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))
                }
              </Accordion>
            </div>
          </div>

          {/* right side */}
          <div className="wwi-right">
            <motion.img 
              variants={containerVariants(0.5)}
              initial="offscreen"
              whileInView={"onscreen"}
              src="persons.png" 
              alt="persons" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeInvest;
