'use client';
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  // Đóng modal khi nhấn phím ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Khóa scroll trang web khi mở modal
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop phủ đen mờ */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn" 
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-[440px] bg-white rounded-3xl p-8 shadow-2xl z-10 animate-scaleUp text-slate-900">
        {/* Header: Nút Close & Tiêu đề */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-500 hover:text-black rounded-full hover:bg-slate-100 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold tracking-tight mb-6 pr-8">
          Log in or create an account
        </h2>

        {/* Input Form Email */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-800">
                Email address
              </label>
              <span className="text-xs text-slate-400">required</span>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm transition placeholder:text-slate-400 font-medium"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#181818] hover:bg-black text-white font-bold py-3.5 rounded-full text-sm transition duration-200"
          >
            Continue
          </button>
        </form>

        {/* Divider OR */}
        <div className="relative flex py-5 items-center justify-center">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink mx-4 text-xs font-medium text-slate-400">or</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 rounded-full font-bold text-sm text-slate-800 hover:bg-slate-50 transition">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Facebook */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 rounded-full font-bold text-sm text-slate-800 hover:bg-slate-50 transition">
            <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Continue with Facebook
          </button>

          {/* Apple */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 rounded-full font-bold text-sm text-slate-800 hover:bg-slate-50 transition">
            <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.37-.58.67-1.08 1.74-.94 2.78 1.01.08 2.04-.55 2.66-1.3" />
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* Real Estate Agent Section */}
        <div className="mt-8 text-center text-xs text-slate-700">
          <p className="font-bold text-sm mb-1 text-slate-900">
            Are you a real estate agent?
          </p>
          <p>
            <a href="#" className="underline font-medium hover:text-black">
              Log in
            </a>{' '}
            or{' '}
            <a href="#" className="underline font-medium hover:text-black">
              create an account
            </a>
          </p>
          <a href="#" className="underline font-medium hover:text-black block mt-1">
            Purchase products
          </a>
        </div>

        {/* Terms Footer */}
        <div className="mt-8 text-center text-[11px] text-slate-500 leading-relaxed">
          By creating an account you agree to Realtor.com's{' '}
          <a href="#" className="underline font-bold text-slate-700 hover:text-black">
            Terms of Use
          </a>{' '}
          and{' '}
          <a href="#" className="underline font-bold text-slate-700 hover:text-black">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};