import React from 'react';
import { SignedIn, SignedOut, SignUpButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Camera, 
  Palette, 
  Sparkles, 
  Zap,
  ShoppingCart,
  Crown,
  Gem,
  Shapes,
  Scissors,
  Target
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const journeySteps = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Take a Photo",
      description: "Upload a selfie for color analysis",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Get Your Colors",
      description: "Discover your seasonal color palette",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Styling",
      description: "Receive personalized outfit suggestions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Shop Confidently",
      description: "Buy pieces that work perfectly together",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
          >
            Your Personal
            <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent"> Style AI</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            Get personalized outfit recommendations that match your style, body type, and seasonal colors. Perfect for any occasion and budget.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Your Style Journey
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link
                to="/dashboard"
                className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Go to Dashboard
              </Link>
            </SignedIn>
          </motion.div>
        </div>
      </motion.div>

      {/* Style Journey Section */}
      <motion.div
        ref={stepsRef}
        initial="hidden"
        animate={stepsInView ? "visible" : "hidden"}
        variants={stagger}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Style Journey
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to your perfect wardrobe
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl opacity-50 group-hover:opacity-100 blur transition-opacity`} />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg group-hover:translate-y-[-4px] group-hover:translate-x-[-4px] transition-transform">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={stagger}
        className="bg-rose-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose StyleSage?
            </h2>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <Crown />, title: "Expert Curation", description: "AI-powered recommendations based on fashion expertise" },
              { icon: <Gem />, title: "Quality Focus", description: "Carefully selected pieces that last" },
              { icon: <Shapes />, title: "Body Positivity", description: "Styles that celebrate every body type" },
              { icon: <Scissors />, title: "Custom Fit", description: "Recommendations based on your measurements" },
              { icon: <Target />, title: "Budget Friendly", description: "Options for every price point" },
              { icon: <Sparkles />, title: "Trend Aware", description: "Stay stylish with current fashion trends" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-500">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        ref={galleryRef}
        initial="hidden"
        animate={galleryInView ? "visible" : "hidden"}
        variants={stagger}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
              alt="Fashion Preview"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070"
              alt="Style Consultation"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;