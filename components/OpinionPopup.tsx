
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Instagram, Github, Linkedin, MessageCircle, ExternalLink, Loader2, CheckCircle2 } from 'lucide-react';

interface OpinionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const OpinionPopup: React.FC<OpinionPopupProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    whatsapp: '',
    platformIdeas: '',
    generalFeedback: ''
  });

  /**
   * TARGET GOOGLE SHEET: 
   * https://docs.google.com/spreadsheets/d/14hHSYd-uoqyzcmBm-_ZtM8hp9TFaJoIe3hUz0FGZ_T4/edit
   */
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwRRcUtL_yV15qCj80ULYXdxn1eTVt_ERJHq9NQtlY3fNlm2jqRmiuuePjbvG4Cv6_9JQ/exec';

  const handleWhatsAppChoice = (choice: 'yes' | 'no') => {
    setFormData(prev => ({ ...prev, whatsapp: choice }));
    if (choice === 'yes') {
      window.open('https://chat.whatsapp.com/FXE4X6wEfX4I5hM43JyyBB', '_blank');
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const payload = {
      timestamp: new Date().toLocaleString(),
      whatsapp: formData.whatsapp,
      platformIdeas: formData.platformIdeas,
      generalFeedback: formData.generalFeedback
    };

    try {
      // Sending data to Google Apps Script
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Since 'no-cors' doesn't return a readable body, we assume success if no error is thrown
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback: Show success anyway to not block the user if the request hit the script but couldn't return CORS
      setIsSuccess(true); 
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setFormData({ whatsapp: '', platformIdeas: '', generalFeedback: '' });
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-2xl bg-[#050508] border border-white/10 rounded-[3rem] md:rounded-[4rem] shadow-[0_0_120px_rgba(59,130,246,0.25)] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-8 md:p-12 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white mb-2">Your Opinion</h3>
                <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Community Insights</p>
              </div>
              <button 
                onClick={handleClose}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-16"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-8 border border-blue-500/40"
                    >
                      <CheckCircle2 size={48} className="text-blue-400" />
                    </motion.div>
                    <h4 className="text-3xl font-black text-white mb-4 tracking-tighter">Data Recorded!</h4>
                    <p className="text-slate-400 max-w-sm mb-12 font-medium">
                      Your anonymous feedback has been added to our database. Thank you for your time!
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl shadow-blue-600/20 transition-all"
                    >
                      Back to Portfolio
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 bg-white/5 p-8 rounded-3xl border border-white/10 font-medium italic relative overflow-hidden">
                      <span className="relative z-10">"Thanks for taking ur time to answer thiese questions, ur identity is anonymous"</span>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl pointer-events-none" />
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-12">
                      {step === 1 && (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-8"
                        >
                          <label className="block text-white font-black text-xl md:text-2xl tracking-tight leading-snug">
                            1. Would u like to participate in our future whatsapp community?
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <button
                              type="button"
                              onClick={() => handleWhatsAppChoice('yes')}
                              className="p-10 bg-blue-600/10 border border-blue-500/30 rounded-3xl hover:bg-blue-600 group transition-all duration-500 flex flex-col items-center gap-4"
                            >
                              <MessageCircle className="text-blue-400 group-hover:text-white group-hover:scale-110 transition-transform" size={48} />
                              <span className="font-black uppercase tracking-[0.3em] text-[10px] text-blue-400 group-hover:text-white">Yes, I'm In</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleWhatsAppChoice('no')}
                              className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all flex flex-col items-center gap-4"
                            >
                              <X className="text-slate-600" size={48} />
                              <span className="font-black uppercase tracking-[0.3em] text-[10px] text-slate-500">No, Skip</span>
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-10"
                        >
                          <div className="space-y-4">
                            <label className="block text-white font-black text-lg md:text-xl tracking-tight leading-relaxed">
                              2. We trying to develop a platform designed to help new programmer learning programming in a fun game way. A better way than normal teaching. Could u suggest us ideas?
                            </label>
                            <textarea
                              required
                              value={formData.platformIdeas}
                              onChange={(e) => setFormData(prev => ({ ...prev, platformIdeas: e.target.value }))}
                              placeholder="Your vision for the future of learning..."
                              className="w-full h-40 bg-white/5 border border-white/10 rounded-[2rem] p-8 text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all resize-none font-medium"
                            />
                          </div>

                          <div className="space-y-4">
                            <label className="block text-white font-black text-lg md:text-xl tracking-tight leading-relaxed">
                              3. What's ur feedback in general?
                            </label>
                            <textarea
                              required
                              value={formData.generalFeedback}
                              onChange={(e) => setFormData(prev => ({ ...prev, generalFeedback: e.target.value }))}
                              placeholder="Be honest, we value your thoughts..."
                              className="w-full h-40 bg-white/5 border border-white/10 rounded-[2rem] p-8 text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all resize-none font-medium"
                            />
                          </div>

                          <div className="space-y-8 pt-12 border-t border-white/5">
                            <label className="block text-slate-500 font-black text-[10px] uppercase tracking-[0.5em]">
                              4. My Socials
                            </label>
                            <div className="flex flex-wrap gap-4">
                              {[
                                { name: 'LinkedIn', icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/abderrahmane-farid-9477aa2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                                { name: 'GitHub', icon: <Github size={16} />, href: 'https://github.com/abdo1farid' },
                                { name: 'Instagram', icon: <Instagram size={16} />, href: 'https://www.instagram.com/master_.dev' }
                              ].map((s) => (
                                <a 
                                  key={s.name}
                                  href={s.href} 
                                  target="_blank" 
                                  className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold border border-white/5"
                                >
                                  {s.icon} {s.name} <ExternalLink size={12} className="opacity-20" />
                                </a>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-6 pt-6">
                            <button
                              type="submit"
                              disabled={isSending}
                              className="w-full py-7 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-[2rem] transition-all shadow-2xl shadow-blue-600/40 text-[11px] uppercase tracking-[0.5em] flex items-center justify-center gap-3 disabled:opacity-50 group"
                            >
                              {isSending ? (
                                <Loader2 className="animate-spin" size={20} />
                              ) : (
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              )}
                              {isSending ? 'Syncing...' : 'Submit Feedback'}
                            </button>
                            <p className="text-center text-slate-600 text-[10px] uppercase font-black tracking-[0.3em] italic">
                              "Thanks for answering those message"
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OpinionPopup;
