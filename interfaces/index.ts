// Interface for the Card component
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Interface for the Button component
export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}
