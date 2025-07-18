'use client';

import React, { useState, useEffect } from 'react';
import { Star, Phone, MapPin, Clock, Menu, X, Search, User, Heart, ShoppingBag, ChevronLeft, ChevronRight, Instagram, Facebook, MessageCircle, Sparkles, Globe, Award, Users, CheckCircle } from 'lucide-react';

// Type definitions
interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  benefits: string[];
}

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
}

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  validity: string;
}

export default function FeminaBeautyParlour() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const heroImages = [
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3065128/pexels-photo-3065128.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  const services: Service[] = [
    {
      id: 1,
      title: 'Haircuts & Styling',
      description: 'Professional haircuts and styling services for women and children with modern techniques and premium products.',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '60 mins',
      benefits: ['Professional styling consultation', 'Premium hair products', 'Personalized cut design', 'Hair care tips']
    },
    {
      id: 2,
      title: 'Facial & Skin Treatments',
      description: 'Rejuvenating facial treatments using natural ingredients and advanced skincare techniques.',
      image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '90 mins',
      benefits: ['Deep cleansing', 'Anti-aging treatment', 'Natural glow enhancement', 'Skin type analysis']
    },
    {
      id: 3,
      title: 'Mehendi & Hair Coloring',
      description: 'Beautiful mehendi designs and professional hair coloring services with safe, quality products.',
      image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '120 mins',
      benefits: ['Traditional & modern designs', 'Natural henna', 'Color consultation', 'Long-lasting results']
    },
    {
      id: 4,
      title: 'Bridal & Party Makeup',
      description: 'Stunning bridal and party makeup services to make you look radiant on your special occasions.',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '150 mins',
      benefits: ['Professional makeup artist', 'Premium cosmetics', 'Trial session included', 'Long-lasting finish']
    },
    {
      id: 5,
      title: 'Threading & Eyebrow',
      description: 'Precise threading and eyebrow shaping services for perfectly defined and groomed eyebrows.',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '30 mins',
      benefits: ['Precise shaping', 'Pain-free technique', 'Natural arch enhancement', 'Aftercare guidance']
    },
    {
      id: 6,
      title: 'Hair Treatments',
      description: 'Nourishing hair treatments including deep conditioning, protein treatments, and scalp care.',
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '75 mins',
      benefits: ['Deep conditioning', 'Scalp massage', 'Hair strengthening', 'Damage repair']
    },
    {
      id: 7,
      title: 'Waxing Services',
      description: 'Gentle and effective waxing services using high-quality wax for smooth, long-lasting results.',
      image: 'https://images.pexels.com/photos/3065128/pexels-photo-3065128.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '45 mins',
      benefits: ['Gentle technique', 'Premium wax products', 'Minimal discomfort', 'Smooth finish']
    },
    {
      id: 8,
      title: 'Kids Hair & Skincare',
      description: 'Specialized services for children including gentle haircuts and basic skincare routines.',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '40 mins',
      benefits: ['Child-friendly environment', 'Gentle products', 'Fun experience', 'Patient staff']
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Excellent service and very professional staff. My daughter loves coming here for her haircuts!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Anita Reddy',
      rating: 5,
      comment: 'Amazing bridal makeup service! I felt like a princess on my wedding day. Highly recommended!',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Meera Patel',
      rating: 5,
      comment: 'The facial treatment was so relaxing and my skin feels amazing. Will definitely come back!',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Kavya Singh',
      rating: 5,
      comment: 'Perfect place for ladies and kids. Clean, hygienic, and the staff is so caring and professional.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const specialOffers: Offer[] = [
    {
      id: 1,
      title: 'Bridal Package',
      description: 'Complete bridal makeover including makeup, hair styling, and mehendi',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      validity: '30 days'
    },
    {
      id: 2,
      title: 'Mother & Daughter Combo',
      description: 'Special package for mothers and daughters including haircut and facial',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      validity: '15 days'
    },
    {
      id: 3,
      title: 'Party Ready Package',
      description: 'Get party-ready with makeup, hair styling, and threading services',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      validity: '20 days'
    }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3065128/pexels-photo-3065128.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const openServiceDetails = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  const handleWhatsAppBooking = (serviceName: string) => {
    const message = `Hi! I would like to book an appointment for ${serviceName} at Femina Beauty Parlour.`;
    const whatsappUrl = `https://wa.me/919880111635?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGeneralWhatsApp = () => {
    const message = `Hi! I would like to know more about your services at Femina Beauty Parlour.`;
    const whatsappUrl = `https://wa.me/919880111635?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Floating Stars */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <Star className="absolute top-20 left-10 w-4 h-4 text-pink-300 animate-pulse" />
        <Star className="absolute top-40 right-20 w-3 h-3 text-purple-300 animate-bounce" />
        <Star className="absolute top-60 left-1/4 w-5 h-5 text-pink-400 animate-spin-slow" />
        <Star className="absolute bottom-40 right-10 w-4 h-4 text-purple-400 animate-pulse" />
        <Star className="absolute bottom-60 left-20 w-3 h-3 text-pink-300 animate-bounce" />
        <Sparkles className="absolute top-32 right-1/3 w-6 h-6 text-purple-300 animate-float" />
        <Sparkles className="absolute bottom-32 left-1/3 w-5 h-5 text-pink-400 animate-float" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-pink-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-pink-500 star-glow" />
              <span className="text-xl font-bold gradient-text">Femina Beauty Parlour</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-500 transition-colors relative group">
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer transition-colors" />
              <User className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer transition-colors" />
              <Heart className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer transition-colors" />
              <button
                onClick={handleGeneralWhatsApp}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 btn-shine flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-pink-500 transition-colors">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-pink-500 transition-colors">About</a>
              <a href="#services" className="block text-gray-700 hover:text-pink-500 transition-colors">Services</a>
              <a href="#gallery" className="block text-gray-700 hover:text-pink-500 transition-colors">Gallery</a>
              <a href="#contact" className="block text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
              <button
                onClick={handleGeneralWhatsApp}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-purple-900/50 to-indigo-900/70"></div>
            </div>
          ))}
        </div>

        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-12 h-12 text-pink-300 mr-4 animate-spin-slow star-glow" />
              <h1 className="hero-title text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
                Femina Beauty Parlour
              </h1>
              <Star className="w-12 h-12 text-purple-300 ml-4 animate-spin-slow star-glow" />
            </div>
            <p className="hero-subtitle text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
              Exclusive Care for Ladies & Children
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <button
                onClick={handleGeneralWhatsApp}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 btn-shine hover-lift flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book on WhatsApp</span>
                <Star className="w-4 h-4 animate-pulse" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 hover-lift flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>View Services</span>
              </button>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-pink-500 mr-2 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Femina</h2>
              <Star className="w-8 h-8 text-purple-500 ml-2 animate-pulse" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Femina, we offer the finest beauty, grooming, and self-care services designed especially for women and children. 
              Our experienced professionals use premium products and modern techniques to ensure you look and feel your absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Excellence</h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ladies & Children Only</h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">Exclusive and comfortable environment</p>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Products</h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">High-quality, safe, and natural products</p>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hygiene Standards</h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">Strict cleanliness and safety protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-pink-500 mr-2 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Our Services</h2>
              <Star className="w-8 h-8 text-purple-500 ml-2 animate-bounce" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and grooming services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => openServiceDetails(service)}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer service-card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </span>
                    <button className="text-pink-600 hover:text-pink-700 font-medium flex items-center">
                      Learn More
                      <Star className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-pink-500 mr-2 animate-spin-slow" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Special Offers</h2>
              <Sparkles className="w-8 h-8 text-purple-500 ml-2 animate-spin-slow" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exclusive packages designed for your special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Special Offer
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium">
                      Valid for {offer.validity}
                    </span>
                    <button
                      onClick={() => handleWhatsAppBooking(offer.title)}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-1"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-pink-500 mr-2 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Our Gallery</h2>
              <Star className="w-8 h-8 text-purple-500 ml-2 animate-pulse" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Glimpse into our beautiful work and happy clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 gallery-item group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white animate-spin-slow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-pink-500 mr-2 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">What Our Clients Say</h2>
              <Star className="w-8 h-8 text-purple-500 ml-2 animate-bounce" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued customers
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <li key={testimonial.id} className="testimonial-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-pink-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                <div className="mt-4 flex justify-end">
                  <Star className="w-5 h-5 text-pink-300 animate-pulse" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-pink-500 mr-2 animate-spin-slow" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Contact Us</h2>
              <Star className="w-8 h-8 text-purple-500 ml-2 animate-spin-slow" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us to book your appointment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">+91 9880111635</p>
                </div>
                <Star className="w-5 h-5 text-pink-400 animate-pulse ml-auto" />
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Opening Hours</h3>
                  <p className="text-gray-600">11:00 AM - 9:00 PM</p>
                  <p className="text-sm text-gray-500">Monday to Sunday</p>
                </div>
                <Star className="w-5 h-5 text-purple-400 animate-pulse ml-auto" />
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Website</h3>
                  <p className="text-gray-600">feminabeautyparlour.in</p>
                </div>
                <Star className="w-5 h-5 text-pink-400 animate-pulse ml-auto" />
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Address will be updated soon</p>
                </div>
                <Star className="w-5 h-5 text-purple-400 animate-pulse ml-auto" />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Star className="w-6 h-6 text-pink-500 mr-2" />
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleGeneralWhatsApp}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 btn-shine flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                  <Star className="w-4 h-4 animate-pulse" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-pink-300 mr-3 animate-spin-slow star-glow" />
              <h3 className="text-2xl font-bold">Femina Beauty Parlour</h3>
              <Star className="w-8 h-8 text-purple-300 ml-3 animate-spin-slow star-glow" />
            </div>
            <p className="text-pink-100 mb-6">Exclusive Care for Ladies & Children</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-pink-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-pink-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/919880111635"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-pink-800 pt-6">
              <p className="text-pink-200 flex items-center justify-center">
                <Star className="w-4 h-4 mr-2 animate-pulse" />
                © 2025 Femina Beauty Parlour. All rights reserved.
                <Star className="w-4 h-4 ml-2 animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleGeneralWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 pulse-green hover-lift"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto modal-enter">
            <div className="relative">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeServiceDetails}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute top-4 left-4">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                {selectedService.title}
                <Star className="w-5 h-5 text-pink-500 ml-2 animate-spin-slow" />
              </h3>
              <p className="text-gray-600 mb-4">{selectedService.description}</p>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedService.duration}
                </span>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Star className="w-4 h-4 text-pink-500 mr-2" />
                  Benefits:
                </h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleWhatsAppBooking(selectedService.title)}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 btn-shine flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book on WhatsApp</span>
                <Star className="w-4 h-4 animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}