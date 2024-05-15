import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { ReactNode } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface FormModalProps { 
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode; // Define the type for children
}

const DefaultModal: React.FC<FormModalProps> = ({
  open,
  setOpen,
  children, // Include children in the destructuring
}) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default DefaultModal;
