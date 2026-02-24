import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contacts = [
  {
    label: "Local WhatsApp",
    number: "+254 721 66 09 66",
    wa: "254721660966",
    flag: "🇰🇪",
    color: "bg-[#25D366]",
    textColor: "text-white",
  },
  {
    label: "Local WhatsApp",
    number: "+254 (0) 0704 30 84 35",
    wa: "254704308435",
    flag: "🇰🇪",
    color: "bg-[#25D366]",
    textColor: "text-white",
  },
  {
    label: "Diaspora WhatsApp",
    number: "+44 7735 023059",
    wa: "447735023059",
    flag: "🌍",
    color: "bg-forest-dark",
    textColor: "text-primary-foreground",
  },
];

const message = encodeURIComponent(
  "Hello! I'm interested in your land properties. Please share more details."
);

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-2"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.wa}
                href={`https://wa.me/${contact.wa}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.2, delay: index * 0.06 }}
                className="flex items-center gap-3 bg-white dark:bg-card border border-border rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group min-w-[230px]"
              >
                {/* WhatsApp icon colored dot */}
                <span
                  className={`w-9 h-9 rounded-full ${contact.color} flex items-center justify-center shrink-0 shadow-sm`}
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </span>

                {/* Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-muted-foreground font-medium">
                    {contact.flag} {contact.label}
                  </span>
                  <span className="text-sm font-bold text-foreground group-hover:text-[#25D366] transition-colors">
                    {contact.number}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label={isOpen ? "Close WhatsApp menu" : "Open WhatsApp menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring — only when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 pointer-events-none" />
        )}

        {/* Tooltip — only when closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
