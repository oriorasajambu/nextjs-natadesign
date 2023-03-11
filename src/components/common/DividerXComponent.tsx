import { motion } from "framer-motion";
import { ExpandXAxis } from "@/components/animation/animate";

export default function DividerXComponent({ className }: { className?: string | null }) {
    return (
        <motion.div variants={ExpandXAxis}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`w-full ${className}`}>
            <hr className={`h-0.5 p-0 m-0 bg-primary w-full ${className}`} />
        </motion.div>
    )
}
