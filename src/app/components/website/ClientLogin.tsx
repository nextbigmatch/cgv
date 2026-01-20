import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowLeft } from 'lucide-react';
import Group from '@/imports/Group9';

export default function ClientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple mock authentication
    // In production, this would connect to a real auth system
    if (email && password) {
      // Store auth token (mock)
      localStorage.setItem('cgv_client_auth', 'authenticated');
      navigate('/client/dashboard');
    } else {
      setError('Please enter your credentials');
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center px-6 relative">
      
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-neutral-400 hover:text-[#FF7029] transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm">Back to Home</span>
      </Link>

      <div className="max-w-md w-full">
        
        {/* Logo - Clickable */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-block mb-6">
            <div className="w-auto" style={{ height: '48px' }}>
              <Group />
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Client Portal</h1>
          <p className="text-neutral-400">Access your private delivery dashboard</p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-neutral-800 rounded-xl px-12 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF7029] transition-colors"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-neutral-800 rounded-xl px-12 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF7029] transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white py-3 rounded-xl hover:opacity-90 transition-opacity font-medium"
            >
              Access Dashboard
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-neutral-500">
              Need access? Contact your project manager
            </p>
          </div>
        </motion.div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-neutral-600 flex items-center justify-center gap-2">
            <Lock className="w-3 h-3" />
            Secure, encrypted connection
          </p>
        </motion.div>

      </div>
    </div>
  );
}