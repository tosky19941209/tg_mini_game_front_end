import React from "react"
import UtilContextProvider from "./util"
import ToastProvider from "./toastr"
import TonWalletProvider from "./tonwalletprovider"
const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UtilContextProvider>
      <ToastProvider>
        <TonWalletProvider>
          {children}
        </TonWalletProvider>
      </ToastProvider>
    </UtilContextProvider>
  )
}

export default Providers