import React, { ReactNode } from 'react';

interface HorizontalScrollableCardProps {
  children: ReactNode;
  className?: string;
  cardClassName?: string;
}

const HorizontalScrollableCard = ({ 
  children, 
  className = "",
  cardClassName = ""
}: HorizontalScrollableCardProps) => {
  return (
    <div className={`${className}`}>
      {/* Mobile: Horizontal scroll */}
      <div className="block lg:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 px-3 scrollbar-hide">
          {React.Children.map(children, (child, index) => (
            <div 
              key={index}
              className={`flex-none w-[280px] sm:w-[320px] ${cardClassName}`}
            >
              {child}
            </div>
          ))}
        </div>
        {/* Scroll indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            {React.Children.map(children, (_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-primary/20"
              />
            ))}
          </div>
          <div className="text-xs text-muted-foreground ml-3">Swipe to see more →</div>
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden lg:block">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollableCard;