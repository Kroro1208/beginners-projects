import { CloseIcon } from '@/app/components/icon/Closeicon';
import React from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 min-h-screen flex justify-center items-center transition-colors
    ${open ? "visible bg-black/20" : "invisible"}`}>
      <div className={`bg-white rounded-lg shadow p-8 transition-all max-w-2xl w-full h-auto max-h-screen
        ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}>
        <button
          onClick={onClose}
          className='absolute top-2 right-2'>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};
