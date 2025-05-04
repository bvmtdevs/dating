import React from 'react';
import Animation from './Animation'; // Ensure this path is correct

const LoginScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-gray-800">
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl shadow-elegant overflow-hidden">
        
        {/* Left side - Branding and Testimonials */}
        <div className="bg-pink-700 w-full md:w-5/12 bg-gradient-to-br from-brand-800 to-brand-950 p-8 md:p-12 flex flex-col justify-between text-white">
          <div>
            <div className="flex items-center mb-8">
              <svg className="w-8 h-8 text-brand-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                  4.5 2.09C13.09 3.81 14.76 3 
                  16.5 3 19.58 3 22 5.42 22 
                  8.5c0 3.78-3.4 6.86-8.55 
                  11.54L12 21.35z"/>
              </svg>
              <h1 className="text-2xl font-display font-semibold ml-2 tracking-wide">Amour</h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-4">
              Find your perfect match with our premium dating experience
            </h2>
            <p className="text-brand-100/80 mb-8 text-sm md:text-base">
              Join thousands of singles who have found meaningful connections through our curated matching system.
            </p>
          </div>

          <Animation />

          <div className="mt-8 md:mt-0">
            <p className="text-xs text-brand-100/60">© 2023 Amour. All rights reserved.</p>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-7/12 card-gradient p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">Welcome Back</h3>
            <p className="text-gray-600 mb-8">Sign in to continue your journey to love</p>

            {/* Google Button */}
            <button
              id="googleLogin"
              className="login-btn shine w-full bg-white flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-200 shadow-button mb-4 hover:bg-gray-50 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 
                  1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 
                  3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 
                  1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 
                  20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 
                  8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 
                  1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 
                  1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 
                  3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="font-medium">Continue with Google</span>
            </button>

            {/* OR Divider */}
            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600 text-sm">or continue with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Other login options */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {/* Facebook */}
              <button className="login-btn flex justify-center items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 
                    12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
                    1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 
                    0-1.956.925-1.956 1.874v2.25h3.328l-.532 
                    3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* GitHub */}
              <button className="login-btn flex justify-center items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 
                    8.502 11.24H16.17l-5.214-6.817L4.99 
                    21.75H1.68l7.73-8.835L1.254 
                    2.25H8.08l4.713 6.231zm-1.161 
                    17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>

              {/* LinkedIn */}
              <button className="login-btn flex justify-center items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
                    0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
                    1.637-1.85 3.37-1.85 3.601 0 4.267 
                    2.37 4.267 5.455v6.286zM5.337 
                    7.433c-1.144 0-2.063-.926-2.063-2.065 
                    0-1.138.92-2.063 2.063-2.063 1.14 
                    0 2.064.925 2.064 2.063 0 
                    1.139-.925 2.065-2.064 2.065zm1.782 
                    13.019H3.555V9h3.564v11.452zM22.225 
                    0H1.771C.792 0 0 .774 0 
                    1.729v20.542C0 23.227.792 24 
                    1.771 24h20.451C23.2 24 24 
                    23.227 24 22.271V1.729C24 
                    .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>

            {/* Terms and Create Account */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-6">
                By continuing, you agree to our 
                <a href="#" className="text-brand-700 hover:text-brand-800 font-medium"> Terms of Service </a> and 
                <a href="#" className="text-brand-700 hover:text-brand-800 font-medium"> Privacy Policy</a>
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  New to Amour? 
                  <a href="#" className="text-brand-700 hover:text-brand-800 font-medium"> Create an account</a>
                </p>
              </div>
            </div>

            {/* Security Footer */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {['Secure Login', 'Privacy Protected', '24/7 Support'].map((label, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 
                      1 0 00-1.414-1.414L9 10.586 7.707 
                      9.293a1 1 0 00-1.414 1.414l2 2a1 1 
                      0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
