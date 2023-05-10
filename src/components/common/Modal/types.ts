export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  title: string;
}
