import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Camera, 
  Palette, 
  Sparkles, 
  Wand2,
  ShoppingBag,
  Heart,
  Gem,
  Shapes,
  Shirt,
  Sun
} from 'lucide-react';
import { SignedIn, SignedOut, SignUpButton } from '@clerk/clerk-react';

const seasonColors = {
  spring: 'from-pink-500 to-yellow-500',
  summer: 'from-blue-400 to-purple-500',
  autumn: 'from-orange-500 to-amber-600',
  winter: 'from-blue-600 to-indigo-800'
};

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
  const [currentSeason, setCurrentSeason] = useState('spring');
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const seasonButtons = [
    { id: 'spring', label: 'Spring', icon: '🌸' },
    { id: 'summer', label: 'Summer', icon: '☀️' },
    { id: 'autumn', label: 'Autumn', icon: '🍂' },
    { id: 'winter', label: 'Winter', icon: '❄️' }
  ];

  const journeySteps = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Take a Selfie",
      description: "Get your personal color analysis",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Discover Your Season",
      description: "Learn your perfect color palette",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "Smart Styling",
      description: "Get personalized outfit recommendations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Shop Confidently",
      description: "Find pieces that match your colors",
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
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-50 rounded-lg">
              {seasonButtons.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setCurrentSeason(id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1.5 min-w-[100px] justify-center
                    ${currentSeason === id
                      ? `bg-gradient-to-r ${seasonColors[id as keyof typeof seasonColors]} text-white shadow-sm`
                      : 'hover:bg-white hover:shadow-sm text-gray-600'
                    }`}
                >
                  <span className="text-base">{icon}</span>
                  <span className="hidden xs:inline">{label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-8"
          >
            Your Personal{' '}
            <span className={`bg-gradient-to-r ${seasonColors[currentSeason as keyof typeof seasonColors]} bg-clip-text text-transparent transition-colors duration-500`}>
              Color Guide
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            Discover your seasonal color palette and get personalized outfit recommendations that enhance your natural beauty.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="inline-block bg-rose-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Your Color Journey
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link
                to="/color-analysis"
                className="inline-block bg-rose-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Discover Your Colors
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
              Your Color Journey
            </h2>
            <p className="text-xl text-gray-600">
              Four steps to your perfect wardrobe
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
              Why Choose SeasonOfYou?
            </h2>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <Palette />, title: "Color Analysis", description: "Get your personalized seasonal color palette" },
              { icon: <Shirt />, title: "Smart Wardrobe", description: "Curated outfits that complement your colors" },
              { icon: <Sun />, title: "Seasonal Updates", description: "Stay stylish with seasonal recommendations" },
              { icon: <Heart />, title: "Personal Style", description: "Outfits tailored to your preferences" },
              { icon: <Shapes />, title: "Mix & Match", description: "Create endless combinations with your colors" },
              { icon: <Sparkles />, title: "Enhanced Beauty", description: "Colors that make you naturally glow" }
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