interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'pure-cyan';
  css?: object;
  onClick?: () => void;
}

export default ButtonProps;
