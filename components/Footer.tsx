"use client";
import React from "react";
import {
  Heart,
  Users,
  MessageCircle,
  TrendingUp,
  Facebook,
} from "lucide-react";
import { PLATFORM_CONFIG, SOCIAL_LINKS } from "./constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [{ name: "Facebook", icon: Facebook, href: "#" }];

  const stats = [
    { icon: Users, label: "Participants", value: "2.5K+" },
    { icon: MessageCircle, label: "Comments", value: "10.7K" },
    { icon: Heart, label: "Engagements", value: "15.2K" },
    { icon: TrendingUp, label: "Growth", value: "48%" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {PLATFORM_CONFIG.NAME} - #TogetherWeWillDeliver
                </h3>
                <p className="text-sm text-gray-400">Community Challenge</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A community-driven initiative to create awareness and promote
              growth through creative engagement and social impact campaigns.
            </p>

          </div>

          {/* Social & CTA Section */}
          <div className="space-y-6">
            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-3">Follow the campaign</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button - Link to CM's official facebook page*/}
            <button
              onClick={() => window.open(SOCIAL_LINKS.FACEBOOK.URL, "_blank")}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join the Campaign
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} {PLATFORM_CONFIG.NAME} - Community Challenge.
                All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Data analyzed from community submissions and social engagement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full blur-sm"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
