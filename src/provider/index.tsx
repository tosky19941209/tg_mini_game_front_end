import React from "react"
import UtilContextProvider from "./util"
import ToastProvider from "./toastr"

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UtilContextProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </UtilContextProvider>
  )
}

export default Providers