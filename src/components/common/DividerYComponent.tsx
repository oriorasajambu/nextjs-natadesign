import { motion } from "framer-motion";
import { ExpandYAxis } from "@/components/animation/animate";

export default function DividerYComponent({ className }: { className?: string }) {
    return (
        <motion.span variants={ExpandYAxis}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`absolute left-1/2 w-[1px] h-full bg-gray-600 ${className}`}>
        </motion.span>
    )
}
