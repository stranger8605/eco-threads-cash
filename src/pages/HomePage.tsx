import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Recycle, Leaf, IndianRupee, Users, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-recycle.jpg';

const stats = [
  { icon: Recycle, value: '10K+', label: 'Clothes Recycled' },
  { icon: Users, value: '500+', label: 'Happy Users' },
  { icon: IndianRupee, value: '₹5L+', label: 'Earned by Users' },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Cloth recycling" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        </div>
        <div className="relative container max-w-lg mx-auto px-4 pt-16 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Eco-Friendly Initiative
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
              Recycle Your Old Clothes
            </h1>
            <p className="text-xl text-primary-foreground/80 font-medium mb-2">
              Earn Cash & Help the Environment!
            </p>
            <p className="text-primary-foreground/60 mb-8 max-w-sm mx-auto">
              Give your old clothes a second life. We connect you with verified recycling shops near you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-3.5 rounded-xl font-bold text-primary-foreground eco-gradient eco-shadow-lg text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Start Recycling Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container max-w-lg mx-auto px-4 -mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card rounded-2xl eco-shadow p-6 grid grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-1" />
              <div className="text-xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* How it works */}
      <section className="container max-w-lg mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">
          How It Works
        </h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Select Your Clothes', desc: 'Choose the types and quantities of clothes you want to recycle' },
            { step: '2', title: 'Pick a Shop', desc: 'Select from verified recycling shops in your district' },
            { step: '3', title: 'Schedule Pickup', desc: 'Set your preferred date and time for pickup' },
            { step: '4', title: 'Get Paid!', desc: 'Receive cash via your preferred payment method' },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border"
            >
              <div className="w-10 h-10 rounded-full eco-gradient flex items-center justify-center text-primary-foreground font-bold shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container max-w-lg mx-auto px-4 pb-12">
        <div className="eco-gradient-hero rounded-2xl p-8 text-center">
          <Recycle className="w-12 h-12 text-primary-foreground/80 mx-auto mb-4 animate-spin-slow" />
          <h2 className="text-2xl font-bold text-primary-foreground mb-2">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/70 mb-6">
            Join thousands of users recycling their clothes responsibly.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 rounded-xl font-bold bg-card text-foreground hover:bg-accent transition-colors"
          >
            Get Started →
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
