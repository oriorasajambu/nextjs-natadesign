import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
    position?: number;
    className?: string;
    contentClassName?: string;
    title: string;
    children?: React.ReactNode;
}
export default function AccordionComponent(props: AccordionProps) {
    const [isActive, setIsActive] = useState(false);
    return (
        <AnimatePresence initial={false} >
            {
                <div
                    className="flex flex-col select-none py-6">
                    <div onClick={() => setIsActive(!isActive)} className={`${isActive ? 'mb-6' : 'mb-0'} flex flex-row justify-between w-full gap-2 lg:gap-12 ${props.className}`}>
                        {
                            props.position ? <p className="basis-1/5 text-2xl xs:text-xl font-dm-sans text-partial">{props.position < 10 ? '0' + (props.position) : (props.position)}</p> : ''
                        }
                        <p className="basis-4/5 text-2xl xs:text-xl font-dm-sans text-partial">{props.title}</p>
                        <motion.div className='self-center'
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                collapsed: { rotate: isActive ? 0 : 90 },
                                open: { rotate: isActive ? 90 : 0 },
                            }}
                            transition={{ duration: 0.8, }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.12" height="25.414" viewBox="0 0 14.12 25.414">
                                <path id="Path_60" data-name="Path 60" d="M0,12,12,0,24,12" transform="translate(12.706 0.707) rotate(90)" fill="none" stroke="#10403c" strokeWidth="2" />
                            </svg>
                        </motion.div>
                    </div>
                    <motion.div initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            collapsed: { opacity: isActive ? 0 : 1, height: isActive ? 0 : "auto" },
                            open: { opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }
                        }}
                        transition={{ duration: 0 }} className={`flex flex-row w-full gap-2 lg:gap-12 lg:text-2xl md:text-xl sm:text-xl font-dm-sans text-partial ${props.contentClassName}`}>
                        {
                            props.position ? <p className="basis-1/5 text-2xl xs:text-xl font-dm-sans invisible">01</p> : ''
                        }
                        <p className="basis-4/5 text-base text-start">
                            {props.children}
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" className='invisible' width="14.12" height="25.414" viewBox="0 0 14.12 25.414">
                            <path id="Path_60" data-name="Path 60" d="M0,12,12,0,24,12" transform="translate(12.706 0.707) rotate(90)" fill="none" stroke="#10403c" strokeWidth="2" />
                        </svg>
                    </motion.div>
                </div>
            }
        </AnimatePresence>
    )
}
