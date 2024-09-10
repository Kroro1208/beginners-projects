import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../features/cart/CartSlice";
import { closeModal } from "../features/modal/ModalSlice";
import type { RootState } from "../store";

const Modal: NextPage = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    return (
        <aside className={`fixed inset-0 flex items-center justify-center transition-all bg-gray-800 bg-opacity-50 z-50
        ${isOpen ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}>
            <div className="bg-white p-8 flex flex-col items-center rounded-lg shadow-lg max-w-xl w-full">
                <h4 className="text-2xl font-bold mb-4">かごの中身を空にしますか？</h4>
                <div className="flex justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(clearCart())
                            dispatch(closeModal())
                        }}
                        className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-red-600 border-red-700 border-b-4 active:border-b-0 transition-all transform active:scale-95">
                        OK
                    </button>
                    <button
                        type="button"
                        onClick={() => dispatch(closeModal())}
                        className="bg-gray-500 px-5 py-2 rounded-lg text-white hover:bg-gray-600 border-gray-700 border-b-4 active:border-b-0 transition-all transform active:scale-95">
                        NO
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal
