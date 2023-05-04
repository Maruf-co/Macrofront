interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'pure-cyan';
  className?: string;
  onClick?: () => void;
}

export default ButtonProps;
