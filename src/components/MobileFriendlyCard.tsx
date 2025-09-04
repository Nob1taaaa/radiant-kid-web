import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MobileFriendlyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  children?: React.ReactNode;
}

const MobileFriendlyCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "orange-medium",
  children 
}: MobileFriendlyCardProps) => {
  return (
    <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 p-4 sm:p-6 border border-border/50 hover:border-primary/20">
      {/* Mobile-optimized icon */}
      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${color}/10 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}>
        <Icon size={24} className={`sm:w-8 sm:h-8 text-${color} group-hover:text-${color}/80`} />
      </div>
      
      {/* Content */}
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      {children}
    </div>
  );
};

export default MobileFriendlyCard;