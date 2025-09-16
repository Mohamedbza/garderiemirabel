import React, { useState } from 'react';
import logo from "./assets/hero-img.jpg";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { useTranslation } from "react-i18next";
import i18n from './i18n';
import HeroSection from './sections/HeroSection';
import Navigation from './components/navigation';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Programmes from './sections/Programmes';
import PlacesAvailable from './sections/PlacesAvailable';
import Testimonials from './sections/testimonials';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation("heroSection");

  return (
    <div className="min-h-screen bg-white">
      

      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <HeroSection /> 
      {/* About Us */}
      <AboutUs /> 
      {/* Services */}
      <Services /> 
      {/* Programmes */}
      <Programmes /> 
      {/* PlacesAvailable */}
      <PlacesAvailable /> 
      {/* Testimonials */}
      <Testimonials /> 
    </div>
  );
};

export default App;