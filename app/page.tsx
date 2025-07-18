"use client";

import { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, Heart, Star, Sparkles, Users, Scissors, Palette, Menu, X, ChevronLeft, ChevronRight, ShoppingBag, Search, User, Calendar, Award, Clock, Shield } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Professional Hair Styling",
      subtitle: "Transform your look with our expert stylists"
    },
    {
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Luxurious Facial Treatments",
      subtitle: "Rejuvenate your skin with premium care"
    },
    {
      image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Bridal Beauty Services",
      subtitle: "Make your special day unforgettable"
    },
    {
      image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Premium Beauty Experience",
      subtitle: "Exclusive care for ladies and children"
    },
    {
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Kids Beauty Care",
      subtitle: "Gentle and safe treatments for children"
    }
  ];

  const services = [
    {
      id: 1,
      title: "Hair Styling & Cuts",
      subtitle: "Professional cuts for all ages",
      image: "https://imgs.search.brave.com/_4MCej4VvahumTFSNro-HKa11ajK51UaLgygOpQYCFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlc2hhLmNv/bS9sZWFkLWltYWdl/cy9wbGFjZWhvbGRl/cnMvaGFpci1zYWxv/bi0zOS5qcGc_Y2xh/c3M9d2lkdGgtc21h/bGw?auto=compress&cs=tinysrgb&w=600",
      icon: <Scissors className="w-6 h-6" />,
      category: "hair",
      details: {
        description: "Expert hair styling and cutting services for women and children. Our skilled stylists create personalized looks that enhance your natural beauty.",
        services: ["Women's Haircuts", "Children's Cuts", "Hair Styling", "Blow Dry", "Hair Wash", "Hair Treatments"],
        duration: "45-90 minutes",
        benefits: ["Professional styling", "Age-appropriate cuts", "Quality products", "Personalized consultation"]
      }
    },
    {
      id: 2,
      title: "Facial & Skin Care",
      subtitle: "Glowing skin treatments",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Sparkles className="w-6 h-6" />,
      category: "skincare",
      details: {
        description: "Rejuvenating facial treatments designed to cleanse, nourish, and revitalize your skin for a healthy, glowing complexion.",
        services: ["Deep Cleansing Facial", "Anti-Aging Treatment", "Hydrating Facial", "Acne Treatment", "Brightening Facial", "Gold Facial"],
        duration: "60-90 minutes",
        benefits: ["Deep cleansing", "Improved skin texture", "Natural glow", "Stress relief"]
      }
    },
    {
      id: 3,
      title: "Mehendi & Hair Color",
      subtitle: "Traditional & modern designs",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Palette className="w-6 h-6" />,
      category: "traditional",
      details: {
        description: "Beautiful mehendi designs and professional hair coloring services using premium, safe products for stunning results.",
        services: ["Bridal Mehendi", "Party Mehendi", "Hair Coloring", "Highlights", "Root Touch-up", "Ombre Coloring"],
        duration: "30-120 minutes",
        benefits: ["Natural ingredients", "Long-lasting color", "Custom designs", "Safe application"]
      }
    },
    {
      id: 4,
      title: "Bridal & Party Makeup",
      subtitle: "Special occasion beauty",
      image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Heart className="w-6 h-6" />,
      category: "makeup",
      details: {
        description: "Professional makeup services for weddings, parties, and special events. We create stunning looks that last all day.",
        services: ["Bridal Makeup", "Party Makeup", "Engagement Makeup", "Pre-wedding Shoots", "Touch-up Services", "HD Makeup"],
        duration: "90-180 minutes",
        benefits: ["Long-lasting formula", "Professional techniques", "Premium products", "Photo-ready finish"]
      }
    },
    {
      id: 5,
      title: "Threading & Eyebrow",
      subtitle: "Perfect eyebrow shaping",
      image: "https://imgs.search.brave.com/aO3jPO7Eyr6iYlQuW3beajMJov_dk_pzAqELnYtq_74/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlc2hhLmNv/bS9sZWFkLWltYWdl/cy9wbGFjZWhvbGRl/cnMvZXllYnJvd3Mt/YW5kLWxhc2hlcy0x/ODIuanBnP2NsYXNz/PXdpZHRoLXNtYWxs?auto=compress&cs=tinysrgb&w=600",
      icon: <Star className="w-6 h-6" />,
      category: "threading",
      details: {
        description: "Expert threading and eyebrow shaping services for perfectly defined brows that frame your face beautifully.",
        services: ["Eyebrow Threading", "Upper Lip Threading", "Full Face Threading", "Eyebrow Tinting", "Eyebrow Shaping"],
        duration: "15-45 minutes",
        benefits: ["Precise shaping", "Long-lasting results", "Natural technique", "Pain-free experience"]
      }
    },
    {
      id: 6,
      title: "Kids Beauty Care",
      subtitle: "Gentle care for children",
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Users className="w-6 h-6" />,
      category: "kids",
      details: {
        description: "Specialized beauty services for children with gentle, safe products and child-friendly techniques in a comfortable environment.",
        services: ["Kids Haircuts", "Gentle Facials", "Hair Styling", "Special Occasion Makeup", "Hair Braiding", "Kids Spa"],
        duration: "30-60 minutes",
        benefits: ["Child-safe products", "Gentle techniques", "Fun experience", "Patient staff"]
      }
    },
    {
      id: 7,
      title: "Hair Treatments",
      subtitle: "Deep conditioning & repair",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Sparkles className="w-6 h-6" />,
      category: "treatments",
      details: {
        description: "Intensive hair treatments to restore health, shine, and strength to damaged or dry hair using premium products.",
        services: ["Keratin Treatment", "Hair Spa", "Deep Conditioning", "Protein Treatment", "Oil Massage", "Scalp Treatment"],
        duration: "60-120 minutes",
        benefits: ["Hair restoration", "Improved texture", "Reduced frizz", "Enhanced shine"]
      }
    },
    // {
    //   id: 8,
    //   title: "Waxing Services",
    //   subtitle: "Smooth & silky skin",
    //   image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   icon: <Heart className="w-6 h-6" />,
    //   category: "waxing",
    //   details: {
    //     description: "Professional waxing services using high-quality wax for smooth, long-lasting results with minimal discomfort.",
    //     services: ["Full Body Wax", "Arms & Legs", "Underarms", "Facial Wax", "Bikini Wax", "Eyebrow Wax"],
    //     duration: "30-90 minutes",
    //     benefits: ["Long-lasting smoothness", "Professional technique", "Quality wax", "Hygienic process"]
    //   }
    // }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      service: "Bridal Makeup",
      rating: 5,
      comment: "Absolutely stunning work! The team made me feel like a princess on my wedding day. The makeup lasted the entire celebration.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Anita Patel",
      service: "Facial Treatment",
      rating: 5,
      comment: "My skin has never looked better! The facial treatment was so relaxing and effective. I feel refreshed and glowing.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Meera Singh",
      service: "Hair Styling",
      rating: 5,
      comment: "Love my new haircut! The stylist understood exactly what I wanted and delivered beyond my expectations.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Kavya Reddy",
      service: "Kids Hair Care",
      rating: 5,
      comment: "My daughter loves coming here! The staff is so patient and gentle with children. Highly recommended for kids.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const specialOffers = [
    {
      title: "Bridal Package",
      description: "Complete bridal makeover with makeup, hair styling, and mehendi",
      image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Bridal Makeup", "Hair Styling", "Mehendi Design", "Touch-up Kit"]
    },
    {
      title: "Mother & Daughter Combo",
      description: "Special bonding experience with matching treatments",
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Hair Styling", "Gentle Facial", "Manicure", "Photo Session"]
    },
    {
      title: "Party Ready Package",
      description: "Get party-ready with our complete makeover service",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Party Makeup", "Hair Styling", "Threading", "Nail Art"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const openWhatsApp = (message = "") => {
    const defaultMessage = message || "Hi! I'd like to book an appointment at Femina Beauty Parlour.";
    window.open(`https://wa.me/919880111635?text=${encodeURIComponent(defaultMessage)}`, '_blank');
  };

  const openServiceDetails = (service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Star className="w-8 h-8 text-pink-500 mr-2" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Femina
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#about" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#services" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#offers" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                  Special Offers
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#gallery" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                  Gallery
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#contact" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-pink-500 p-2 rounded-full hover:bg-pink-50 transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-pink-500 p-2 rounded-full hover:bg-pink-50 transition-all duration-300">
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={() => openWhatsApp()}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <Star className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-pink-500 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-500 font-medium">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-pink-500 font-medium">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-pink-500 font-medium">Services</a>
              <a href="#offers" className="block px-3 py-2 text-gray-700 hover:text-pink-500 font-medium">Special Offers</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-pink-500 font-medium">Gallery</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-pink-500 font-medium">Contact</a>
              <button 
                onClick={() => openWhatsApp()}
                className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Star className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Sliding Background */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Floating Stars */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Star className="absolute top-20 left-10 w-6 h-6 text-pink-300 animate-pulse" />
          <Star className="absolute top-32 right-20 w-4 h-4 text-purple-300 animate-bounce" />
          <Star className="absolute bottom-40 left-20 w-5 h-5 text-pink-400 animate-pulse" />
          <Star className="absolute bottom-60 right-32 w-3 h-3 text-purple-400 animate-bounce" />
          <Star className="absolute top-1/2 left-1/4 w-4 h-4 text-pink-200 animate-pulse" />
          <Star className="absolute top-1/3 right-1/3 w-5 h-5 text-purple-200 animate-bounce" />
        </div>

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`
              }}
            />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center justify-center">
          <div className={`text-center px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <Star className="w-12 h-12 text-yellow-400 mr-4 animate-spin-slow" />
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wide">
                Femina Beauty Parlour
              </h1>
              <Star className="w-12 h-12 text-yellow-400 ml-4 animate-spin-slow" />
            </div>
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
              {heroSlides[currentSlide].title}
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-12 font-light">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openWhatsApp()}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-2"
              >
                <Star className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>View Services</span>
              </button>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
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
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-10 left-10 w-8 h-8 text-pink-200 opacity-30" />
          <Star className="absolute top-20 right-20 w-6 h-6 text-purple-200 opacity-40" />
          <Star className="absolute bottom-20 left-1/4 w-7 h-7 text-pink-300 opacity-25" />
          <Star className="absolute bottom-32 right-1/3 w-5 h-5 text-purple-300 opacity-35" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                About Femina
              </h2>
              <Star className="w-8 h-8 text-purple-500 ml-3" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Femina, we offer the finest beauty, grooming, and self-care services designed especially for women and children. Our serene environment and skilled professionals ensure every visit is a delightful experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Safe & Hygienic</h3>
              <p className="text-gray-600">Highest standards of cleanliness and safety</p>
              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exclusive Care</h3>
              <p className="text-gray-600">Dedicated services for ladies and children only</p>
              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Flexible Hours</h3>
              <p className="text-gray-600">Open 11 AM to 9 PM for your convenience</p>
              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-16 left-16 w-6 h-6 text-pink-200 opacity-40 animate-pulse" />
          <Star className="absolute top-32 right-24 w-8 h-8 text-purple-200 opacity-30 animate-bounce" />
          <Star className="absolute bottom-24 left-32 w-5 h-5 text-pink-300 opacity-50 animate-pulse" />
          <Star className="absolute bottom-40 right-16 w-7 h-7 text-purple-300 opacity-35 animate-bounce" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                Our Services
              </h2>
              <Sparkles className="w-8 h-8 text-purple-500 ml-3" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and grooming services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => openServiceDetails(service)}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
              >
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.subtitle}</p>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-12 left-12 w-10 h-10 text-pink-200 opacity-20 animate-spin-slow" />
          <Star className="absolute top-24 right-16 w-8 h-8 text-purple-200 opacity-30 animate-pulse" />
          <Star className="absolute bottom-16 left-24 w-6 h-6 text-pink-300 opacity-40 animate-bounce" />
          <Star className="absolute bottom-32 right-20 w-9 h-9 text-purple-300 opacity-25 animate-spin-slow" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                Special Offers
              </h2>
              <Heart className="w-8 h-8 text-purple-500 ml-3" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive packages designed for your special moments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Special</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {offer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-pink-400 mr-2 fill-current" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => openWhatsApp(`Hi! I'm interested in the ${offer.title}. Can you please provide more details?`)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={closeServiceDetails}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full hover:bg-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex items-center mb-2">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                </div>
                <p className="text-lg opacity-90">{selectedService.subtitle}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 text-pink-500 mr-2" />
                    About This Service
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedService.details.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Star className="w-5 h-5 text-pink-500 mr-2" />
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.details.services.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Clock className="w-5 h-5 text-pink-500 mr-2" />
                      Service Details
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-gray-800">{selectedService.details.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timing:</span>
                        <span className="font-semibold text-pink-600">11 AM - 9 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Heart className="w-5 h-5 text-pink-500 mr-2" />
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.details.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 fill-current" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openWhatsApp(`Hi! I'm interested in ${selectedService.title}. Can you please provide more details and help me book an appointment?`)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Star className="w-5 h-5" />
                    <span>Book This Service</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-20 left-20 w-7 h-7 text-pink-200 opacity-30 animate-pulse" />
          <Star className="absolute top-40 right-32 w-5 h-5 text-purple-200 opacity-40 animate-bounce" />
          <Star className="absolute bottom-32 left-16 w-8 h-8 text-pink-300 opacity-25 animate-pulse" />
          <Star className="absolute bottom-48 right-24 w-6 h-6 text-purple-300 opacity-35 animate-bounce" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                Happy Clients
              </h2>
              <Users className="w-8 h-8 text-purple-500 ml-3" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our satisfied clients have to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-24 left-24 w-9 h-9 text-pink-200 opacity-20 animate-spin-slow" />
          <Star className="absolute top-16 right-20 w-7 h-7 text-purple-200 opacity-30 animate-pulse" />
          <Star className="absolute bottom-20 left-32 w-6 h-6 text-pink-300 opacity-40 animate-bounce" />
          <Star className="absolute bottom-36 right-28 w-8 h-8 text-purple-300 opacity-25 animate-spin-slow" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Palette className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                Our Gallery
              </h2>
              <Palette className="w-8 h-8 text-purple-500 ml-3" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our beautiful work and transformations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
             
              "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
              // "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
              // "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
              
              
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-16 left-16 w-10 h-10 text-pink-200 opacity-20 animate-spin-slow" />
          <Star className="absolute top-32 right-24 w-8 h-8 text-purple-200 opacity-30 animate-pulse" />
          <Star className="absolute bottom-24 left-20 w-7 h-7 text-pink-300 opacity-40 animate-bounce" />
          <Star className="absolute bottom-40 right-32 w-9 h-9 text-purple-300 opacity-25 animate-spin-slow" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                Contact Us
              </h2>
              <Phone className="w-8 h-8 text-purple-500 ml-3" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to pamper yourself? Get in touch with us today
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <Star className="w-8 h-8 text-pink-500 mr-3" />
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">WhatsApp</p>
                      <p className="text-gray-800 font-bold text-lg">+91 98801 11635</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Website</p>
                      <p className="text-gray-800 font-bold text-lg">feminabeautyparlour.in</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Email</p>
                      <p className="text-gray-800 font-bold text-lg">info@feminabeauty.com</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Working Hours</p>
                      <p className="text-gray-800 font-bold text-lg">11:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Star className="w-6 h-6 text-pink-500 mr-2" />
                    Book Your Appointment
                  </h4>
                  <p className="text-gray-600 mb-6">Click the button below to start a conversation with us on WhatsApp</p>
                  <button
                    onClick={() => openWhatsApp()}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mb-6 flex items-center justify-center space-x-2"
                  >
                    <Star className="w-5 h-5" />
                    <span>Send Us a Message</span>
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-6 font-medium flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-500 mr-2" />
                    Follow us on social media
                  </p>
                  <div className="flex justify-center space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-12 left-12 w-6 h-6 text-pink-300 opacity-20 animate-pulse" />
          <Star className="absolute top-20 right-20 w-8 h-8 text-purple-300 opacity-15 animate-bounce" />
          <Star className="absolute bottom-20 left-24 w-5 h-5 text-pink-400 opacity-25 animate-pulse" />
          <Star className="absolute bottom-32 right-16 w-7 h-7 text-purple-400 opacity-20 animate-bounce" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-pink-400 mr-2" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Femina Beauty Parlour
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Exclusive care for ladies and children with professional beauty services in a comfortable environment.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 cursor-pointer hover:text-pink-400 transition-colors duration-300" />
                <Facebook className="w-6 h-6 cursor-pointer hover:text-pink-400 transition-colors duration-300" />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 text-pink-400 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Services</a></li>
                <li><a href="#offers" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Special Offers</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Gallery</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Sparkles className="w-5 h-5 text-pink-400 mr-2" />
                Services
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-300">Hair Styling & Cuts</li>
                <li className="text-gray-300">Facial & Skin Care</li>
                <li className="text-gray-300">Bridal Makeup</li>
                <li className="text-gray-300">Threading & Eyebrow</li>
                <li className="text-gray-300">Kids Care</li>
                <li className="text-gray-300">Hair Treatments</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Phone className="w-5 h-5 text-pink-400 mr-2" />
                Contact Info
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300">WhatsApp: +91 98801 11635</p>
                <p className="text-gray-300">Website: feminabeautyparlour.in</p>
                <p className="text-gray-300">Hours: 11:00 AM - 9:00 PM</p>
                <p className="text-gray-300">Email: info@feminabeauty.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              <Star className="w-4 h-4 text-pink-400 mr-2" />
              © 2025 Femina Beauty Parlour. All rights reserved.
              <Star className="w-4 h-4 text-pink-400 ml-2" />
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center pulse-green"
      >
        <Phone className="w-7 h-7" />
      </button>
    </div>
  );
}