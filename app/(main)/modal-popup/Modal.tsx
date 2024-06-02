import React from 'react'

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<Props> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 min-h-screen flex justify-center items-center transition-colors
    ${open ? "visible bg-black/20" : "invisible"}`}>
      <div className={`bg-white rounded-lg shadow p-6 transition-all max-w-md
        ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 px-2 border border-neutral-200 rounded-md
             text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-600'>
          X
        </button>
        {/* このchildrenにはModalタグ内のコンテンツが渡ってくる */}
        {children}
      </div>
    </div>
  )
}