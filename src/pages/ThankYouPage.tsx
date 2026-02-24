import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRecycle } from '@/context/RecycleContext';
import { CheckCircle2, Share2, Star, Home } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const { state, reset } = useRecycle();

  const totalItems = Object.values(state.clothQuantities).reduce((s, q) => s + q, 0);

  const handleGoHome = () => {
    reset();
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background flex flex-col items-center justify-center px-4"
    >
      <div className="w-full max-w-sm text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <CheckCircle2 className="w-24 h-24 text-primary mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">Thank You!</h1>
          <p className="text-muted-foreground mb-6">
            Your pickup will be arranged within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card rounded-xl border border-border p-5 mb-6 text-left space-y-3"
        >
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Order ID</span>
            <span className="text-sm font-bold text-foreground">{state.orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Total Items</span>
            <span className="text-sm font-medium text-foreground">{totalItems}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Payment</span>
            <span className="text-sm font-medium text-foreground capitalize">{state.paymentMethod}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">District</span>
            <span className="text-sm font-medium text-foreground">{state.district}</span>
          </div>
          <div className="pt-2 border-t border-border flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Estimated Earnings</span>
            <span className="text-lg font-bold text-primary">
              ₹{Object.entries(state.clothQuantities).reduce((sum, [id, qty]) => {
                const prices: Record<string, number> = {
                  'cotton-shirt': 50, 'jeans': 100, 'saree': 150, 'kurta': 80,
                  'jacket': 120, 't-shirt': 40, 'trousers': 70, 'others': 60,
                };
                return sum + qty * (prices[id] || 50);
              }, 0)}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-3"
        >
          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-xl border border-border bg-card text-foreground font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex-1 py-3 rounded-xl border border-border bg-card text-foreground font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors">
              <Star className="w-4 h-4" /> Rate Us
            </button>
          </div>
          <button
            onClick={handleGoHome}
            className="w-full py-3.5 rounded-xl font-semibold text-primary-foreground eco-gradient eco-shadow hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" /> Back to Home
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThankYouPage;
