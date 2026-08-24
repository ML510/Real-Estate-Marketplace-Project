"use client"

import { useAuthModal } from "@/store/useAuthModalStore";
import Modal from "./Modal";

function RegisterModal() {
  const {openLogin,isRegisterOpen,closeRegister} = useAuthModal();
  return (
    <Modal title="Register"onClose={closeRegister}isOpen={isRegisterOpen}>
        <p>Register modal</p>
    </Modal>
  )
}

export default RegisterModal