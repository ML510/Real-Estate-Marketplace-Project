"use client"

import { useAuthModal } from "@/store/useAuthModalStore";
import Modal from "./Modal";

function LoginModal() {
  const {openRegister,isLoginOpen,closeLogin} = useAuthModal();
  return (
    <Modal title="Login"onClose={closeLogin}isOpen={isLoginOpen}>
        <p>Login modal</p>
    </Modal>
  )
}

export default LoginModal