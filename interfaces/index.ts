import { ReactNode } from "react";  

// Interface for the Card component
export interface CardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  price: number;
}

// Interface for the Button component
export interface ButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  disabled?: boolean;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}
