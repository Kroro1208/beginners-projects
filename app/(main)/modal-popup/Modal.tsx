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
          className='absolute top-2 right-1 px-3 bg-gray-500 py-1 rounded-lg text-white
          hover:bg-gray-500/90 border-gray-600 border-b-4 active:border-b-0'>
          X
        </button>
        {/* このchildrenにはModalタグ内のコンテンツが渡ってくる */}
        {children}
      </div>
    </div>
  )
}