interface HeaderProps {
  height?: number;
  background?: string;
  textBlock: {
    title: string;
    description: string;
    position: 'left' | 'right';
  };
  contentBlock?: React.ReactNode;
}

export default HeaderProps;
