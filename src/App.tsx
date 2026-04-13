import SocialIcons from "./SocialIcons";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, MapPin, Phone, Clock, Star, 
  ChefHat, Utensils, GlassWater, Coffee, 
  Calendar, Users, MessageCircle, ChevronRight,
  Instagram, Facebook, Twitter, CheckCircle2
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-jamun-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-serif font-bold text-gold-500 tracking-wider">
              JAAMUN TREE
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">About</a>
            <a href="#menu" className="text-white hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">Menu</a>
            <a href="#gallery" className="text-white hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">Gallery</a>
            <a href="#contact" className="text-white hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">Contact</a>
            <a href="#reservation" className="bg-gold-500 hover:bg-gold-400 text-jamun-900 px-6 py-2 rounded-full font-medium transition-colors uppercase tracking-wider text-sm">
              Reserve a Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-jamun-900 shadow-xl border-t border-jamun-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white block px-3 py-2 text-base uppercase tracking-widest">About</a>
              <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-white block px-3 py-2 text-base uppercase tracking-widest">Menu</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-white block px-3 py-2 text-base uppercase tracking-widest">Gallery</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white block px-3 py-2 text-base uppercase tracking-widest">Contact</a>
              <a href="#reservation" onClick={() => setIsMobileMenuOpen(false)} className="bg-gold-500 text-jamun-900 block px-3 py-3 rounded-md text-center font-medium uppercase tracking-wider mt-4">
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
          alt="Jaamun Tree Restaurant Ambience" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-jamun-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-jamun-900/80 via-transparent to-jamun-900/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block text-gold-400 font-serif italic text-xl md:text-2xl mb-4"
        >
          Welcome to Jaamun Tree
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
        >
          Experience Fine Dining Like <br className="hidden md:block" /> Never Before in Aurangabad
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Where exquisite flavors meet unparalleled elegance.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#reservation" className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-jamun-900 px-8 py-4 rounded-full font-medium transition-all uppercase tracking-wider text-sm flex items-center justify-center group">
            Reserve a Table
            <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#menu" className="w-full sm:w-auto bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-medium transition-all uppercase tracking-wider text-sm">
            View Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <div className="bg-jamun-900 text-white py-6 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <div className="flex items-center gap-2">
          <div className="flex text-gold-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <span className="font-medium ml-2 text-lg">4.8/5</span>
        </div>
        <div className="hidden md:block w-px h-8 bg-white/20"></div>
        <p className="text-cream-100 uppercase tracking-widest text-sm font-medium text-center">
          Loved by 80+ diners in Aurangabad
        </p>
        <div className="hidden md:block w-px h-8 bg-white/20"></div>
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Reviewer" className="w-10 h-10 rounded-full border-2 border-gold-500 object-cover" referrerPolicy="no-referrer" />
          <p className="text-sm italic text-cream-100">"The best fine dining experience..."</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold-600 font-serif italic text-xl mb-2">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-jamun-900 mb-6 leading-tight">
              A Culinary Journey <br/> Rooted in Tradition
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Jaamun Tree is not just a restaurant — it’s an experience. Nestled in Garkheda, Aurangabad, we bring together the rich heritage of Indian spices with modern culinary techniques to create pure vegetarian dishes that delight the senses.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're planning a romantic date night, a joyful family weekend dinner, or a celebration with friends, our aesthetic ambience and premium service ensure every moment is memorable.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h5 className="text-3xl font-serif text-jamun-800 mb-1">10+</h5>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years of Excellence</p>
              </div>
              <div>
                <h5 className="text-3xl font-serif text-jamun-800 mb-1">50+</h5>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Signature Dishes</p>
              </div>
            </div>

            <a href="#reservation" className="inline-flex items-center text-jamun-800 font-medium uppercase tracking-wider hover:text-gold-600 transition-colors">
              Discover More <ChevronRight size={16} className="ml-1" />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop" 
                alt="Restaurant Interior" 
                className="rounded-t-full w-full h-80 object-cover mt-12 shadow-xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop" 
                alt="Signature Dish" 
                className="rounded-b-full w-full h-80 object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center text-jamun-900 shadow-lg border-4 border-cream-50">
              <Star size={32} fill="currentColor" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SignatureMenu = () => {
  const categories = ['Starters', 'Main Course', 'Desserts', 'Beverages'];
  const [activeCategory, setActiveCategory] = useState('Main Course');

  const menuItems = [
    { name: "Truffle Mushroom Galouti", desc: "Melt-in-mouth mushroom kebabs with truffle oil", price: "₹450", cat: "Starters", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=400&auto=format&fit=crop" },
    { name: "Jaamun Tree Special Paneer", desc: "Cottage cheese in our signature rich purple gravy", price: "₹550", cat: "Main Course", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=400&auto=format&fit=crop" },
    { name: "Smoked Dal Makhani", desc: "Slow-cooked black lentils finished with fresh cream", price: "₹400", cat: "Main Course", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400&auto=format&fit=crop" },
    { name: "Awadhi Dum Biryani", desc: "Fragrant basmati rice cooked with exotic spices", price: "₹650", cat: "Main Course", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&auto=format&fit=crop" },
    { name: "Saffron Pistachio Kulfi", desc: "Traditional Indian ice cream with nuts and saffron", price: "₹250", cat: "Desserts", img: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?q=80&w=400&auto=format&fit=crop" },
    { name: "Jamun Mocktail", desc: "Refreshing blend of fresh jamun, mint, and lime", price: "₹220", cat: "Beverages", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop" },
  ];

  const filteredMenu = menuItems.filter(item => item.cat === activeCategory || activeCategory === 'All').slice(0, 4);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold-600 font-serif italic text-xl mb-2">Culinary Masterpieces</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-jamun-900 mb-6">Signature Menu</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                activeCategory === cat 
                  ? 'bg-jamun-900 text-white' 
                  : 'bg-cream-100 text-jamun-900 hover:bg-gold-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {filteredMenu.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-cream-100 group-hover:border-gold-500 transition-colors">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-jamun-900">{item.name}</h3>
                  <span className="text-gold-600 font-medium ml-4">{item.price}</span>
                </div>
                <div className="w-full border-b border-dashed border-gray-300 mb-2"></div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-block border border-jamun-900 text-jamun-900 hover:bg-jamun-900 hover:text-white px-8 py-3 rounded-full font-medium transition-all uppercase tracking-wider text-sm">
            Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Star size={32} />, title: "Premium Dining", desc: "An unmatched fine dining experience in the city." },
    { icon: <ChefHat size={32} />, title: "Expert Chefs", desc: "Culinary masters crafting every dish to perfection." },
    { icon: <GlassWater size={32} />, title: "Aesthetic Ambience", desc: "Instagram-worthy interiors for perfect moments." },
    { icon: <Users size={32} />, title: "Perfect for Celebrations", desc: "Ideal for birthdays, anniversaries, and dates." },
  ];

  return (
    <section className="py-20 bg-jamun-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-jamun-800 rounded-full flex items-center justify-center text-gold-500 mb-6 border border-jamun-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
              <p className="text-cream-100/70 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://content.jdmagicbox.com/v2/comp/aurangabad-maharashtra/z7/9999px240.x240.240425183404.q3z7/catalogue/jaamun-tree-osmanpura-aurangabad-maharashtra-pure-veg-restaurants-xnhbvf7ub5.jpg?imwidth=463.3333333333333",
    "https://content.jdmagicbox.com/v2/comp/aurangabad-maharashtra/z7/9999px240.x240.240425183404.q3z7/catalogue/jaamun-tree-sneha-nagar-sillod-pure-veg-restaurants-czw5v5zj30.jpg?imwidth=463.3333333333333",
    "https://content.jdmagicbox.com/v2/comp/aurangabad-maharashtra/z7/9999px240.x240.240425183404.q3z7/catalogue/jaamun-tree-osmanpura-aurangabad-maharashtra-pure-veg-restaurants-xnhbvf7ub5.jpg?imwidth=463.3333333333333",
    "https://content.jdmagicbox.com/v2/comp/aurangabad-maharashtra/z7/9999px240.x240.240425183404.q3z7/catalogue/jaamun-tree-sneha-nagar-sillod-pure-veg-restaurants-wbwszfoylt.jpg?imwidth=463.3333333333333",
    "https://content.jdmagicbox.com/v2/comp/aurangabad-maharashtra/z7/9999px240.x240.240425183404.q3z7/catalogue/jaamun-tree-sneha-nagar-sillod-pure-veg-restaurants-ba6dsqalkm.jpg?imwidth=463.3333333333333",
    "https://content.jdmagicbox.com/v2/comp/aurangabad-maharashtra/z7/9999px240.x240.240425183404.q3z7/catalogue/jaamun-tree-sneha-nagar-sillod-pure-veg-restaurants-xghkdz05g8.jpg?imwidth=463.3333333333333"
  ];

  return (
    <section id="gallery" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold-600 font-serif italic text-xl mb-2">Visual Journey</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-jamun-900 mb-6">Our Gallery</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden group aspect-[4/3] rounded-lg cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-jamun-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", text: "Absolutely stunning ambience and the food is out of this world. The Jamun Tree Special Paneer is a must-try!", rating: 5 },
    { name: "Rahul Deshmukh", text: "Perfect place for a date night in Aurangabad. The staff is courteous and the vibe is just premium.", rating: 5 },
    { name: "Sneha Patil", text: "We celebrated our anniversary here. They arranged a beautiful table and the desserts were fantastic.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold-600 font-serif italic text-xl mb-2">Guest Book</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-jamun-900 mb-6">What Diners Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream-50 p-8 rounded-2xl border border-cream-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex text-gold-500 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
              <h4 className="font-serif text-jamun-900 font-medium">— {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reservation = () => {
  return (
    <section id="reservation" className="py-24 bg-jamun-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#D4AF37" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.4,-2.3C98,13.4,93.2,29.3,84.2,42.7C75.2,56.1,62,67,47.4,74.5C32.8,82,16.4,86.1,0.5,85.2C-15.4,84.3,-30.8,78.4,-44.6,70.3C-58.4,62.2,-70.6,51.9,-78.9,39.1C-87.2,26.3,-91.6,11,-90.6,-3.8C-89.6,-18.6,-83.2,-32.9,-73.9,-44.6C-64.6,-56.3,-52.4,-65.4,-39.3,-73.1C-26.2,-80.8,-13.1,-87.1,1.1,-88.9C15.3,-90.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-gold-500 font-serif italic text-xl mb-2">Book a Table</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Reserve Your <br/> Premium Experience
            </h2>
            <p className="text-cream-100/80 mb-8 max-w-md">
              Join us for an unforgettable dining experience. We recommend booking in advance, especially for weekends and special occasions.
            </p>
            
            <div className="bg-jamun-800/50 border border-gold-500/30 p-4 rounded-lg inline-flex items-center gap-3 mb-8">
              <Clock className="text-gold-500" size={24} />
              <div>
                <p className="text-white text-sm font-medium">Limited seats available on weekends</p>
                <p className="text-cream-100/60 text-xs">Book early to secure your spot</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-200 focus:border-gold-500 py-2 outline-none transition-colors bg-transparent" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full border-b-2 border-gray-200 focus:border-gold-500 py-2 outline-none transition-colors bg-transparent" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <div className="relative">
                    <input type="date" className="w-full border-b-2 border-gray-200 focus:border-gold-500 py-2 outline-none transition-colors bg-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <select className="w-full border-b-2 border-gray-200 focus:border-gold-500 py-2 outline-none transition-colors bg-transparent">
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <select className="w-full border-b-2 border-gray-200 focus:border-gold-500 py-2 outline-none transition-colors bg-transparent">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-jamun-900 hover:bg-jamun-800 text-white py-4 rounded-full font-medium uppercase tracking-wider transition-colors">
                  Book Your Table Now
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h4 className="text-gold-600 font-serif italic text-xl mb-2">Visit Us</h4>
            <h2 className="text-4xl font-serif text-jamun-900 mb-8">Location & Contact</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold-600 shrink-0 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-jamun-900 mb-1">Address</h4>
                  <p className="text-gray-600">Garkheda<br/>Aurangabad, Maharashtra</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold-600 shrink-0 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-jamun-900 mb-1">Reservations</h4>
                  <p className="text-gray-600 mb-2">+91 91752 12341</p>
                  <a href="https://wa.me/919175212341" className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                    <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold-600 shrink-0 shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-jamun-900 mb-1">Opening Hours</h4>
                  <p className="text-gray-600">Mon - Sun: 12:00 PM - 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg border border-cream-100">
            {/* Placeholder for Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120055.45277341231!2d75.2351709!3d19.8761653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2297a976207%3A0x3915159778b730fb!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-jamun-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif text-gold-500 tracking-wider mb-4">JAAMUN TREE</h3>
            <p className="text-cream-100/70 max-w-md mb-6 leading-relaxed">
              Jaamun Tree is not just a restaurant — it’s an experience. Discover the finest dining in Aurangabad, where every meal is a celebration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-jamun-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-jamun-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-jamun-900 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-cream-100/70 hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-cream-100/70 hover:text-gold-400 transition-colors">Our Menu</a></li>
              <li><a href="#reservation" className="text-cream-100/70 hover:text-gold-400 transition-colors">Reservations</a></li>
              <li><a href="#gallery" className="text-cream-100/70 hover:text-gold-400 transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2 text-cream-100/70">
              <li>Garkheda, Aurangabad, Maharashtra</li>
              <li>+91 91752 12341</li>
              <li>info@jaamuntree.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream-100/50">
          <p>&copy; {new Date().getFullYear()} Jaamun Tree. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919175212341" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-jamun-900/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl text-center"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-jamun-900"
        >
          <X size={24} />
        </button>
        
        <div className="w-16 h-16 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Star size={32} fill="currentColor" />
        </div>
        
        <h2 className="text-3xl font-serif text-jamun-900 mb-2">Wait! Don't Leave Yet</h2>
        <p className="text-gray-600 mb-6">Get <span className="font-bold text-jamun-900">10% off</span> on your first visit. Book your table now and experience fine dining at its best.</p>
        
        <a 
          href="#reservation" 
          onClick={() => setIsOpen(false)}
          className="block w-full bg-gold-500 hover:bg-gold-400 text-jamun-900 py-4 rounded-full font-medium uppercase tracking-wider transition-colors mb-3"
        >
          Claim Offer & Book Now
        </a>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-sm text-gray-500 hover:text-jamun-900 underline"
        >
          No thanks, I'll pass
        </button>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-jamun-900 selection:bg-gold-500 selection:text-jamun-900">
      <SocialIcons />
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <SignatureMenu />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ExitIntentPopup />
    </div>
  );
}

