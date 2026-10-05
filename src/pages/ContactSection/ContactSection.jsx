import React from 'react'
import ContactForm from '../../Components/Contact'
import lap from '../../assets/images/lap.png'
const ContactSection = () => {
  return (
    <section className="py-20 px-6 border-t border-neutral-200/40 dark:border-neutral-800/40" 
    data-purpose="contact-section" id="contact">
        <div className="max-w-6xl w-full mx-auto space-y-12">
            {/* section title */}
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                    Get In <span className="text-red-500">Touch</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7  dark:bg-neutral-900/60 p-8 sm:p-10 rounded-3xl border
                 border-neutral-200 dark:border-neutral-800/90 shadow-2xl backdrop-blur-sm">
                    <ContactForm/>
                 </div>
                 <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] flex items-center justify-center">
                        <div className="absolute inset-0 bg-red-600/20 rounded-full blur-3xl"></div>
                        <img src={lap}alt="Charlotte talking on mobile phone" 
                        className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]" />
                    </div>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection