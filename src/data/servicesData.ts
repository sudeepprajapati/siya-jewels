
import {
  Globe, ShoppingCart, Smartphone, Database,
  Gem, Diamond, Box, Camera, Video,
  Image, MessageSquare, Instagram, Mail, Settings,
  Pen, BookmarkCheck
} from 'lucide-react';

// Service data organized by categories
export const serviceCategories = [
  {
    id: 'tech',
    title: 'Tech Development',
    color: 'from-blue-500 to-purple-500',
    description: 'Cutting-edge digital solutions for modern businesses',
    services: [
      {
        id: 'website',
        title: 'Website Development',
        icon: Globe,
        description: 'Custom-designed, responsive websites optimized for both performance and aesthetics.',
        benefits: ['SEO-friendly architecture', 'Mobile-optimized design', 'Content management system'],
      },
      {
        id: 'ecommerce',
        title: 'E-commerce Development',
        icon: ShoppingCart,
        description: 'Full-featured online stores with secure payment gateways and inventory management.',
        benefits: ['Secure payment processing', 'Product catalog management', 'Customer account features'],
      },
      {
        id: 'mobile',
        title: 'Mobile App Development',
        icon: Smartphone,
        description: 'Native and cross-platform applications for iOS and Android devices.',
        benefits: ['Intuitive user interface', 'Cross-platform compatibility', 'Push notification features'],
      },
      {
        id: 'billing',
        title: 'Billing Software Development',
        icon: Database,
        description: 'Custom billing solutions designed specifically for jewelry businesses.',
        benefits: ['Inventory tracking', 'Sales analytics', 'Invoice generation'],
      }
    ]
  },
  {
    id: 'jewelry',
    title: 'Jewelry Solutions',
    color: 'from-gold-light to-gold-dark',
    description: 'Professional jewelry design and visualization services',
    services: [
      {
        id: 'cad',
        title: 'Jewelry CAD Designing',
        icon: Gem,
        description: 'Precise computer-aided design for jewelry pieces with attention to detail.',
        benefits: ['Production-ready files', 'Realistic previews', 'Multiple revisions'],
      },
      {
        id: 'rendering',
        title: '3D Jewelry Rendering',
        icon: Box,
        description: 'Photorealistic 3D renderings of jewelry for marketing and presentations.',
        benefits: ['Studio-quality images', 'Multiple angles', 'Material simulations'],
      },
      {
        id: 'hiphop',
        title: 'Hip-Hop Cuban Jewelry CAD Design',
        icon: Diamond,
        description: 'Specialized designs for hip-hop and Cuban link style jewelry.',
        benefits: ['Custom engravings', 'Gemstone placements', 'Unique closures'],
      },
      {
        id: 'premium',
        title: 'Premium 5D Designing',
        icon: Box,
        description: 'Ultra high-quality designs with advanced material simulation and details.',
        benefits: ['Superior detail work', 'Advanced gemstone settings', 'Complete set designs'],
      }
    ]
  },
  {
    id: 'creative',
    title: 'Creative & Media',
    color: 'from-pink-500 to-purple-500',
    description: 'Visual content creation for impactful marketing',
    services: [
      {
        id: 'product-photos',
        title: 'Product Photoshoot',
        icon: Camera,
        description: 'Professional photography services specialized for jewelry and products.',
        benefits: ['360° product views', 'White background options', 'Detail closeups'],
      },
      {
        id: 'model-photos',
        title: 'Model Photoshoot',
        icon: Camera,
        description: 'Lifestyle photography showcasing jewelry pieces being worn.',
        benefits: ['Professional models', 'Style direction', 'Environment selection'],
      },
      {
        id: 'videos',
        title: 'Creative Animated Videos',
        icon: Video,
        description: 'Eye-catching animated videos to showcase products and services.',
        benefits: ['Custom storyboarding', 'Professional voiceovers', 'Brand integration'],
      },
      {
        id: 'social-media',
        title: 'Social Media Posters & Marketing',
        icon: Image,
        description: 'Engaging visual content designed for social media platforms.',
        benefits: ['Platform-optimized sizes', 'Engagement-focused design', 'Consistent branding'],
      },
      {
        id: 'ads',
        title: 'Advertisement Video Creation',
        icon: Video,
        description: 'Professional video advertisements for digital and social media channels.',
        benefits: ['Target audience focus', 'Call-to-action optimization', 'Various format options'],
      }
    ]
  },
  {
    id: 'ai',
    title: 'AI Automation',
    color: 'from-cyan-500 to-blue-500',
    description: 'Intelligent automation solutions for business efficiency',
    services: [
      {
        id: 'chatbots',
        title: 'AI Chatbots & WhatsApp Automation',
        icon: MessageSquare,
        description: 'Intelligent chat systems that handle customer inquiries automatically.',
        benefits: ['24/7 customer support', 'Inquiry qualification', 'Seamless handoff to humans'],
      },
      {
        id: 'social-automation',
        title: 'AI-Powered Social Media Automation',
        icon: Instagram,
        description: 'Automated content scheduling and engagement systems for social platforms.',
        benefits: ['Content calendar management', 'Engagement tracking', 'Performance analytics'],
      },
      {
        id: 'email-automation',
        title: 'AI Email & Call Automation',
        icon: Mail,
        description: 'Intelligent systems for managing email campaigns and call scheduling.',
        benefits: ['Personalized messaging', 'Follow-up sequences', 'Response analytics'],
      },
      {
        id: 'sales-automation',
        title: 'AI Sales & Operations Automation',
        icon: Settings,
        description: 'Comprehensive systems for streamlining sales and operational workflows.',
        benefits: ['Lead scoring', 'Sales pipeline automation', 'Operational efficiency metrics'],
      }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Legal',
    color: 'from-amber-500 to-red-500',
    description: 'Establish and protect your brand identity',
    services: [
      {
        id: 'logo',
        title: 'Logo Pre-Design',
        icon: Pen,
        description: 'Professional logo design services to establish your brand identity.',
        benefits: ['Multiple concepts', 'Vector file formats', 'Brand guidelines'],
      },
      {
        id: 'trademark',
        title: 'Trademark Club Registration Assistance',
        icon: BookmarkCheck,
        description: 'Support services for registering your brand trademark.',
        benefits: ['Application preparation', 'Registration monitoring', 'Renewal reminders'],
      }
    ]
  }
];
