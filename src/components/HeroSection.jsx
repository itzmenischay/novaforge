import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const revealContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8, // Increased delay to wait for page transition
    },
  },
};

const revealItem = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-transparent overflow-hidden">
      {/* Spacer to push content to bottom */}
      <div className="flex-1" />

      {/* Hero Content */}
      <motion.div 
        variants={revealContainer}
        initial="hidden"
        animate="show"
        className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20 flex flex-col justify-end"
      >
        <motion.div 
          variants={fadeItem} 
          className="flex items-center gap-4 mb-6 sm:mb-8 ml-1 sm:ml-2"
        >
          <div className="w-8 sm:w-12 h-[2px] bg-[#F26522]"></div>
          <span className="text-[12px] sm:text-[14px] font-bold text-gray-900 tracking-[0.25em] uppercase">
            NovaForge
          </span>
        </motion.div>

        <h1 className="text-gray-900 font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(1.5rem,6vw,3.5rem)] sm:text-[clamp(2.25rem,4.5vw,3.5rem)] max-w-4xl flex flex-col">
          <span className="overflow-hidden pb-1 sm:pb-2"><motion.span variants={revealItem} className="block will-change-transform">Creating unforgettable digital brands</motion.span></span>
          <span className="overflow-hidden pb-1 sm:pb-2"><motion.span variants={revealItem} className="block will-change-transform">for ambitious companies ready</motion.span></span>
          <span className="overflow-hidden pb-1 sm:pb-2"><motion.span variants={revealItem} className="block will-change-transform">to lead their market.</motion.span></span>
        </h1>

        <motion.div variants={fadeItem} className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <button
            type="button"
            className="
    group relative overflow-hidden
    bg-[#F26522]
    hover:bg-[#e05a1a]
    text-white
    rounded-full
    pl-6 pr-2 py-2
    flex items-center gap-3
    transition-all duration-500
    ease-[cubic-bezier(0.25,0.1,0.25,1)]
    shadow-[0_8px_24px_rgba(242,101,34,0.25)]
    hover:shadow-[0_12px_36px_rgba(242,101,34,0.35)]
    hover:-translate-y-[2px]
  "
          >
            {/* Text */}
            <div className="relative h-5 overflow-hidden flex flex-col justify-center text-[13px] font-medium leading-none">
              <span
                className="
        flex items-center h-full
        transition-transform duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-translate-y-full
      "
              >
                Start a project
              </span>

              <span
                className="
        flex items-center h-full
        absolute left-0 top-full
        transition-transform duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-translate-y-full
      "
              >
                Start a project
              </span>
            </div>

            {/* Icon */}
            <div
              className="
      w-8 h-8
      rounded-full
      bg-white
      flex items-center justify-center
      text-[#F26522]
      transition-all duration-500
      group-hover:scale-110
    "
            >
              <ArrowRight
                size={16}
                className="
        transition-all duration-500
        group-hover:-rotate-45
      "
              />
            </div>
          </button>

          {/* Partner Badge */}
          <div className="bg-white rounded-[4px] py-1.5 px-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow cursor-default">
            <img
              alt="Partner Icon"
              className="w-5 h-5 object-contain"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEXUlEQVR4AexXSYgTWRj+/+r0wCBVzZyGEbSTTPcMsw/OYRhmdcZhtkYGUfSqJoIeREU8eHDB7SAuIIrYiYhe3MCDgqIHRaQvHvSgoKJJiwu40knapk2s+v3/0m7pVKpSr/olrdDF+/O2/33Le1WVxIB3/Bo3MNYHOH4CQSdQSsd/lQjKGe1cQ0+AwFhNZKwarcig9Q0zUFgQ/56JpwLC76/b3NVfGmYACNcPy3Vw3XBbc6MhBmTHEXDakFZE/LM/Hf92qK+zbogBcHBttUibcFP1mI6+dgOy04j4V7U4Hvtb5qrHR9vXbsAGY6OfKAf0PwtaDcgOI8A/fgYAsEtyQOOl1UCYHXYI12jUD9oMvNpZ7Aohbnop1f5ZiLxQKdoM8O573jw1FfDTTNDy5juiZlL4wVEZKKUnf1GcH/+/mEqsBMDpEPZCmCFrZK1ghF1WKy/QAP0GseK8xKfFdLKrMD+5tJBK7iqkE2cKqURvMZ2wCWJXwDCOAeKGWuCBY7KG1wqGYDFunnFPc72TeZYw33/M+4loCMLxGOBFyxjoFEeu1JmsQAteY4DjaMBWRFiIgNMQsR2AR0DXhQbjxpG/sblehAjb0IATjH5dNLCWWxysKb6Yx0YUj4EWu3KQMzoRMcH1W1EQMclCOmOOfZTrEcVjYMLeO/eNmPEDEF0fkTmWHdYimkRbtQyPAUkwd996COXyjyNNyMwYBIsXLa6mGvQ1DUietf/eE1nI7ascY1WuigZXi48CXwOSLwvNivMTAV2WfjNDOIVbNATxBhqQhbivt8+yS78w4EXpNyOESziFux5fXQMCgHsfl6zBganc7uFodOkRLuEMQxTKgADhgQfP+Ej/4HYjTfQIh3AxT6gS2oCg8ZEOCgG/nc5JX2sQnRNs4VDBVTIgwC6B8XyWtLVGuTzTxVYEVTYg+ATvfSy1zqDWaJiRDKCDX+oUL1hoRMOMZgCikYlQ/3AibUokAw5SJDJ/8cDvhWibEskAEnwVJCbKHCJE2hRlA7Rw8gf8B+bDKCKD1+BHLnZwkmdW2UD/C+NrD4r/wAWekuCqfilVWpRPQdkA737d24eILhHY/1rduZ8lpM2/b+r+IETEutjV26BsgJyg+59uINBsK5P/rq379skhMmlb3fkpSM4cflxvDI1X1w6pPwfKBvgEPMdMBHf4NZIy+/Kfm935w8gqq8XJmJnpPSQ54FAaCO56c9TfbsoGiOibYWKCR0Sw1CrkOnjXs3gE7OE5n4bkWNl8xnzf6ODTXMZpjzncQgBT3IbCh5KBgbkTJ/F9OoGJiki0yjQG422Z3HYWVVbgdFNxx83nbdncNrO1lODX8hoCKAr2s3mTJroJIT+UDNitrR18q2y2Kk67mcmvwz33B0Ly+Kbhrkf9Zia3FpxygrG3OBjr8E2uMaFkwNxz+yzfKiv4V2NfDaw3QxFabdm7Txl7uZnNn1dZrmRABbhZueMGmrXTfjzjJ+C3M80afwkAAP//QiN7DAAAAAZJREFUAwDyaoRw0KfXxwAAAABJRU5ErkJggg=="
            />
            <span className="text-[12px] font-medium text-gray-900">
              Certified Partner
            </span>
            <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-[3px] uppercase tracking-wider">
              Featured
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
