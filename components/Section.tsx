"use client";

import React, { ReactNode, useState } from "react";
import { getAssetPath } from "@/lib/utils";

interface SectionProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  bgColor?: string;
  explanation?: string;
  children?: ReactNode;
  imageAlt?: string;
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
  tabs?: {
    label: string;
    content: ReactNode;
    icon?: ReactNode;
  }[];
  defaultTab?: number;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  imageSrc,
  bgColor = "white",
  explanation,
  children,
  imageAlt = "Section image",
  shadow = "lg",
  border = false,
  padding = "lg",
  align = "left",
  tabs,
  defaultTab = 0,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const paddingClasses = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-5 sm:p-6",
    lg: "p-6 sm:p-8",
    xl: "p-8 sm:p-10",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  return (
    <section
      className={`
        rounded-xl transition-all duration-300
        ${shadowClasses[shadow]}
        ${paddingClasses[padding]}
        ${border ? "border border-gray-200" : ""}
        ${alignClasses[align]}
      `}
      style={{ backgroundColor: bgColor }}
    >
      {/* Title */}
      {title && (
        <h2
          className={`
          font-bold text-gray-900 mb-3 sm:mb-4
          ${align === "center" ? "mx-auto" : ""}
          text-xl sm:text-2xl lg:text-3xl
          ${description || explanation ? "mb-3 sm:mb-4" : "mb-0"}
        `}
        >
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p
          className={`
          text-gray-600 leading-relaxed mb-4 sm:mb-6
          ${align === "center" ? "mx-auto" : ""}
          text-base sm:text-lg
          max-w-4xl
          ${imageSrc || explanation || tabs ? "mb-4 sm:mb-6" : "mb-0"}
        `}
        >
          {description}
        </p>
      )}

      {/* Tabs Navigation */}
      {tabs && tabs.length > 0 && (
        <div className="mb-6 sm:mb-8">
          <div className={`flex ${align === "center" ? "justify-center" : ""}`}>
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${
                      activeTab === index
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  {tab.icon && (
                    <span className="w-4 h-4 flex items-center justify-center">
                      {tab.icon}
                    </span>
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab Content */}
      {tabs && tabs.length > 0 ? (
        <div className="tab-content">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`
                transition-all duration-300
                ${activeTab === index ? "block animate-fadeIn" : "hidden"}
              `}
            >
              {tab.content}
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Image */}
          {imageSrc && (
            <div
              className={`
                overflow-hidden rounded-lg mb-4 sm:mb-6
                ${shadow !== "none" ? "shadow-md" : ""}
                ${border ? "border border-gray-200" : ""}
              `}
            >
              <img
                src={imageSrc.startsWith('http') ? imageSrc : getAssetPath(imageSrc)}
                alt={imageAlt}
                className="w-full h-auto object-cover transition-all duration-500 hover:scale-105 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          )}

          {/* Explanation */}
          {explanation && (
            <div
              className={`
                text-gray-500 mb-4 sm:mb-6
                ${align === "center" ? "mx-auto" : ""}
                max-w-4xl
              `}
            >
              <p className="text-sm sm:text-base leading-relaxed italic border-l-4 border-blue-200 pl-4 py-1 bg-blue-50/50 rounded-r-lg">
                {explanation}
              </p>
            </div>
          )}

          {/* Children */}
          {children && (
            <div
              className={`
                ${
                  title || description || imageSrc || explanation
                    ? "mt-6 sm:mt-8"
                    : "mt-0"
                }
                ${align === "center" ? "flex justify-center" : ""}
              `}
            >
              {children}
            </div>
          )}
        </>
      )}

      {/* Decorative element for centered alignment */}
      {align === "center" && !tabs && (
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
      )}
    </section>
  );
};

export default Section;
