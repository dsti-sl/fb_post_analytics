"use client";
import React from "react";
import {
  Minus,
  ThumbsUp,
  Users,
  MessageCircle,
  DollarSign,
  Star,
  Eye,
  Share2,
  Heart,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

// Type definitions
interface StatCardData {
  label: string;
  value: number | string;
  change?: number;
  trend?: "up" | "down" | "neutral";
  iconType?: keyof typeof iconMap;
  bgColor?: string;
  textColor?: string;
  loading?: boolean;
  format?: "number" | "percentage" | "currency";
  currency?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const iconMap = {
  likes: <ThumbsUp className="w-5 h-5" />,
  followers: <Users className="w-5 h-5" />,
  engagement: <MessageCircle className="w-5 h-5" />,
  revenue: <DollarSign className="w-5 h-5" />,
  reach: <Eye className="w-5 h-5" />,
  shares: <Share2 className="w-5 h-5" />,
  reactions: <Heart className="w-5 h-5" />,
  performance: <Zap className="w-5 h-5" />,
  default: <Star className="w-5 h-5" />,
};

export default function StatCard({
  label,
  value,
  change,
  trend = "neutral",
  iconType,
  bgColor = "bg-gradient-to-br from-gray-900 to-gray-800",
  textColor = "text-white",
  loading = false,
  format = "number",
  currency = "$",
  size = "md",
  onClick,
}: StatCardData) {
  const getAutoIcon = () => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes("like")) return iconMap.likes;
    if (lowerLabel.includes("follower")) return iconMap.followers;
    if (lowerLabel.includes("engagement")) return iconMap.engagement;
    if (lowerLabel.includes("revenue") || lowerLabel.includes("income"))
      return iconMap.revenue;
    if (lowerLabel.includes("reach") || lowerLabel.includes("impression"))
      return iconMap.reach;
    if (lowerLabel.includes("share")) return iconMap.shares;
    if (lowerLabel.includes("reaction")) return iconMap.reactions;
    if (lowerLabel.includes("performance")) return iconMap.performance;
    return iconMap.default;
  };

  const displayIcon = iconType ? iconMap[iconType] : getAutoIcon();

  const formatValue = (val: number | string) => {
    if (typeof val === "string") return val;

    const formatNumber = (n: number) => {
      // Always remove decimals and round down
      return Math.floor(n);
    };

    switch (format) {
      case "percentage":
        return `${val}%`;
      case "currency":
        return `${currency}${val.toLocaleString()}`;
      case "number":
      default:
        if (val >= 1000000) {
          return `${formatNumber(val / 1000000)}M+`;
        } else if (val >= 1000) {
          return `${formatNumber(val / 1000)}K+`;
        }
        return val.toLocaleString();
    }
  };

  const getDirectionIcon = () => {
    switch (trend) {
      case "up":
        return <ArrowUpRight className="w-4 h-4" />;
      case "down":
        return <ArrowDownRight className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-400";
      case "down":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getTrendBgColor = () => {
    switch (trend) {
      case "up":
        return "bg-green-500/20";
      case "down":
        return "bg-red-500/20";
      default:
        return "bg-gray-500/20";
    }
  };

  const sizeClasses = {
    sm: "p-4 min-h-[100px]",
    md: "p-6 min-h-[120px]",
    lg: "p-8 min-h-[140px]",
  };

  const iconSizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  if (loading) {
    return (
      <div
        className={`rounded-xl shadow-lg ${sizeClasses[size]
          } relative overflow-hidden animate-pulse ${typeof bgColor === "string" && bgColor.startsWith("bg-")
            ? bgColor
            : ""
          }`}
        style={
          typeof bgColor === "string" && !bgColor.startsWith("bg-")
            ? { backgroundColor: bgColor }
            : {}
        }
      >
        <div className="flex flex-col h-full justify-between">
          <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
          <div className="h-8 bg-gray-600 rounded w-3/4"></div>
          <div className="h-3 bg-gray-700 rounded w-1/3 mt-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        rounded-xl shadow-lg relative overflow-hidden group cursor-pointer transition-all duration-300
        hover:scale-105 hover:shadow-xl active:scale-95
        ${sizeClasses[size]}
        ${typeof bgColor === "string" && bgColor.startsWith("bg-")
          ? bgColor
          : ""
        }
        ${textColor}
      `}
      style={
        typeof bgColor === "string" && !bgColor.startsWith("bg-")
          ? { backgroundColor: bgColor }
          : {}
      }
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-grid-white/[0.2]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-medium opacity-80 tracking-wide">
            {label}
          </p>
          {displayIcon && (
            <div
              className={`p-2 rounded-lg ${getTrendBgColor()} transform group-hover:scale-110 transition-transform duration-300`}
            >
              <div className={`${iconSizeClasses[size]} ${getTrendColor()}`}>
                {displayIcon}
              </div>
            </div>
          )}
        </div>

        {/* Value */}
        <div className="mb-2">
          <p className="text-2xl font-bold tracking-tight">
            {formatValue(value)}
          </p>
        </div>

        {/* Change indicator */}
        {change !== undefined && (
          <div className="flex items-center space-x-2 mt-auto">
            <div className={`p-1 rounded-full ${getTrendBgColor()}`}>
              {getDirectionIcon()}
            </div>
            <span className={`text-sm font-medium ${getTrendColor()}`}>
              approx {Math.abs(change)}%
            </span>
            <span className="text-xs opacity-70">vs last period</span>
          </div>
        )}
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
