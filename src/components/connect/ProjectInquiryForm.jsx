import { motion } from "framer-motion";
import {ArrowRight} from 'lucide-react'

const ProjectInquiryForm = () => {
  return (
    <section className="bg-surface-container-low py-32 px-margin-mobile md:px-margin-desktop relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="tonal-surface rounded-3xl p-8 md:p-16"
        >
          <div className="mb-12 text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              Tell us about your project
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              Fill out the form below and our team will get back to you with
              next steps.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface uppercase tracking-widest pl-4"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Jane Doe"
                  className="nova-input w-full rounded-full py-4 px-6 font-body-md text-body-md text-on-surface placeholder:text-secondary/50"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface uppercase tracking-widest pl-4"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Acme Corp"
                  className="nova-input w-full rounded-full py-4 px-6 font-body-md text-body-md text-on-surface placeholder:text-secondary/50"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                className="font-label-md text-label-md text-on-surface uppercase tracking-widest pl-4"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="jane@example.com"
                className="nova-input w-full rounded-full py-4 px-6 font-body-md text-body-md text-on-surface placeholder:text-secondary/50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Type */}
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface uppercase tracking-widest pl-4"
                  htmlFor="type"
                >
                  Project Type
                </label>
                <select
                  id="type"
                  defaultValue=""
                  className="nova-input w-full rounded-full py-4 px-6 font-body-md text-body-md text-on-surface appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1.2em_1.2em]"
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%231a1c1c%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')",
                  }}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="branding">Brand Identity</option>
                  <option value="uiux">Digital Experience (UI/UX)</option>
                  <option value="product">Product Development</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface uppercase tracking-widest pl-4"
                  htmlFor="budget"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  defaultValue=""
                  className="nova-input w-full rounded-full py-4 px-6 font-body-md text-body-md text-on-surface appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1.2em_1.2em]"
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%231a1c1c%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')",
                  }}
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Timeline */}
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface uppercase tracking-widest pl-4"
                  htmlFor="timeline"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  defaultValue=""
                  className="nova-input w-full rounded-full py-4 px-6 font-body-md text-body-md text-on-surface appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1.2em_1.2em]"
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%231a1c1c%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')",
                  }}
                >
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option value="asap">Asap (1-2 months)</option>
                  <option value="flexible">Flexible (3-6 months)</option>
                  <option value="planning">Planning phase (6+ months)</option>
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <label
                className="font-label-md text-label-md text-on-surface uppercase tracking-widest pl-4"
                htmlFor="message"
              >
                Project Description
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Briefly describe your goals, challenges, and what success looks like..."
                className="nova-input w-full rounded-3xl py-4 px-6 font-body-md text-body-md text-on-surface placeholder:text-secondary/50 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                className="
    group relative overflow-hidden
    bg-primary text-on-primary
    rounded-full
    pl-8 pr-3 py-3
    flex items-center gap-4
    transition-all duration-500
    ease-[cubic-bezier(0.25,0.1,0.25,1)]
    shadow-[0_8px_24px_rgba(var(--primary-rgb),0.25)]
    hover:shadow-[0_12px_36px_rgba(var(--primary-rgb),0.35)]
    hover:-translate-y-[2px]
  "
              >
                <div className="relative h-5 overflow-hidden flex flex-col justify-center text-label-md font-label-md uppercase tracking-widest leading-none">
                  <span
                    className="
        flex items-center h-full
        transition-transform duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-translate-y-full
      "
                  >
                    Let's Talk
                  </span>

                  <span
                    className="
        absolute left-0 top-full
        flex items-center h-full
        transition-transform duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-translate-y-full
      "
                  >
                    Let's Talk
                  </span>
                </div>

                <div
                  className="
      w-8 h-8
      rounded-full
      bg-white
      flex items-center justify-center
      text-primary
      transition-all duration-500
      group-hover:scale-110
    "
                >
                  <ArrowRight
                    size={16}
                    className="
        transition-all duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-rotate-45
      "
                  />
                </div>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectInquiryForm;
