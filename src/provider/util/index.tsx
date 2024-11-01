import { useState, useMemo, useEffect } from "react"
import UtilContext from "../../contexts"
import { FreeTokenAPI } from "../../service"

const UtilContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarNumber, setSidebarNumber] = useState<number>(0)
    const [user, setUser] = useState<string>("@goldhorse")
    const [refresh, setRefresh] = useState<string>("")
    const [freetokenBalance, setFreeTokenBalance] = useState<number>(0)
    const [todayClaimAmount, setTodayClaimAmount] = useState<number>(0)
    const [isDailyClaimed, setIsDailyClaimed] = useState<boolean>(false)
    const init = async () => {
        try {
            const tokenBalanceData = await FreeTokenAPI.post('/currentBalance', { user })
            const tokenBalance = tokenBalanceData.data.message

            const todayClaimAmountData = await FreeTokenAPI.post('/todayClaimAmount', { user })
            const isClaimAvailable = await FreeTokenAPI.post("/isDailyClaim", { user: user })

            setIsDailyClaimed(isClaimAvailable.data.message)
            setFreeTokenBalance(tokenBalance)
            setTodayClaimAmount(todayClaimAmountData.data.message)
        } catch (err) {
        }
    }

    const value = useMemo(() => ({
        sidebarNumber: sidebarNumber,
        setSidebarNumber: setSidebarNumber,
        user: user,
        setUser: setUser,
        refresh: refresh,
        setRefresh: setRefresh,
        freetokenBalance: freetokenBalance,
        setFreeTokenBalance: setFreeTokenBalance,
        todayClaimAmount: todayClaimAmount,
        setTodayClaimAmount: setTodayClaimAmount,
        isDailyClaimed: isDailyClaimed,
        setIsDailyClaimed: setIsDailyClaimed
    }), [
        sidebarNumber,
        setSidebarNumber,
        user,
        setUser,
        refresh,
        setRefresh,
        freetokenBalance,
        setFreeTokenBalance,
        todayClaimAmount,
        setTodayClaimAmount,
        isDailyClaimed,
        setIsDailyClaimed
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