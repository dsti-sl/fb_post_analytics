import React, { ReactNode } from "react";

interface SectionProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  bgColor?: string;
  explanation?: string;
  children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  imageSrc,
  bgColor = "white",
  explanation,
  children,
}) => {
  return (
    <section className={`mb-10 p-4 rounded-lg`} style={{ backgroundColor: bgColor }}>
      {title && <h2 className="text-lg font-semibold text-[#20223d] mb-2">{title}</h2>}
      {description && <p className="text-gray-600 text-sm sm:text-base mb-3">{description}</p>}

      {/* Render Image if exists */}
      {imageSrc && (
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm mb-2">
          <img src={imageSrc} className="w-full h-auto" />
        </div>
      )}

      {/* Explanation always goes under the image */}
      {explanation && <p className="text-gray-500 text-sm italic mb-3">{explanation}</p>}

      {/* Render children (like author grids) */}
      {children}
    </section>
  );
};

export default Section;
