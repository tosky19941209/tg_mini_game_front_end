import { useState, useMemo, useEffect } from "react"
import UtilContext from "../../contexts"

const UtilContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarNumber, setSidebarNumber] = useState<number>(0)
    const [user, setUser] = useState<string>("")
    const [refresh, setRefresh] = useState<string>("")
    const init = () => {
    }

    const value = useMemo(() => ({
        sidebarNumber: sidebarNumber,
        setSidebarNumber: setSidebarNumber,
        user: user,
        setUser: setUser,
        refresh: refresh,
        setRefresh: setRefresh
    }), [
        sidebarNumber,
        setSidebarNumber,
        user,
        setUser,
        refresh,
        setRefresh
    ])

    useEffect(() => {
        init();
    }, [])

    return (
        <UtilContext.Provider value={value}>
            {children}
        </UtilContext.Provider>
    )
}

export default UtilContextProvider