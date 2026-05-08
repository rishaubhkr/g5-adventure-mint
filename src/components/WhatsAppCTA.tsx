"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="https://wa.me/919639377776?text=Hi, I'm interested in booking a rafting trip in Rishikesh!"
        target="_blank"
        className="btn-whatsapp px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-opacity-90"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:block">BOOK ON WHATSAPP</span>
      </a>
    </motion.div>
  );
}
