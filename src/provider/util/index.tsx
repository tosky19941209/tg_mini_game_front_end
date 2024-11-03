import { useState, useMemo, useEffect } from "react"
import UtilContext from "../../contexts"
import { FreeTokenAPI } from "../../service"
// import { tg_token } from "../../constant"

const UtilContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarNumber, setSidebarNumber] = useState<number>(0)
    const [user, setUser] = useState<string>("@goldhorse")
    const [refresh, setRefresh] = useState<string>("")
    const [freetokenBalance, setFreeTokenBalance] = useState<number>(0)
    const [todayClaimAmount, setTodayClaimAmount] = useState<number>(0)
    const [isDailyClaimed, setIsDailyClaimed] = useState<boolean>(false)

    const getTelegramUserName = () => {
        console.log("Getting UserName")
        const webapp = window.Telegram?.WebApp.initDataUnsafe;
        // const bot_token = tg_token
        if (webapp) {
            const lastName = webapp["user"]["last_name"] && (" " + webapp["user"]["last_name"]);
            const realName = webapp["user"]["first_name"] + lastName;
            const userName = webapp["user"]["username"];
            const userId = webapp["user"]["id"];
            // const userId = 6977492118;
            // const realName = "aaa";
            // const userName = "fff";
            // const historySize = 100;
            console.log("lastName =>", lastName)
            console.log("realName =>", realName)
            console.log("userName =>", userName)
            console.log("userID =>", userId)
        }
    }


    const init = async () => {
        try {

            getTelegramUserName()

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