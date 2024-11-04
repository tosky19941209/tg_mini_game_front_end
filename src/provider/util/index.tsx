import { useState, useMemo, useEffect } from "react"
import UtilContext from "../../contexts"
import { FreeTokenAPI, UserAPI } from "../../service"
// import { tg_token } from "../../constant"

const UtilContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarNumber, setSidebarNumber] = useState<number>(0)
    const [user, setUser] = useState<string | undefined>("goldhorse")
    const [tgUserId, setTgUserId] = useState<number | undefined>(0)
    const [refresh, setRefresh] = useState<string>("")
    const [freetokenBalance, setFreeTokenBalance] = useState<number>(0)
    const [todayClaimAmount, setTodayClaimAmount] = useState<number>(0)
    const [isDailyClaimed, setIsDailyClaimed] = useState<boolean>(false)

    const getTelegramUserName = async () => {
        const webapp = window.Telegram?.WebApp.initDataUnsafe;
        // const bot_token = tg_token

        // console.log("not TG =>")
        // const _userId = 719328
        // const IsnewUser = await UserAPI.post("/setuser", { user: "goldhorse", tgUserId: _userId, realName: "Gold horse" })
        // console.log(IsnewUser)
        // await setUser("goldhorse")
        // await setTgUserId(_userId)

        if (webapp) {
            const lastName = webapp["user"]["last_name"] && (" " + webapp["user"]["last_name"]);
            const realName = webapp["user"]["first_name"] + lastName;
            const userName = webapp["user"]["username"];
            const userId = webapp["user"]["id"];
            console.log("lastName =>", lastName)
            console.log("realName =>", realName)
            console.log("userName =>", userName)
            console.log("userID =>", userId)
            await UserAPI.post("/setuser", { user: userName, tgUserId: userId, realName: realName })
            await setUser(userName)
            await setTgUserId(userId)

            console.log("Authentication!")
        } else {

        }
    }


    const init = async () => {
        try {

            await getTelegramUserName()


        } catch (err) {
        }
    }

    useEffect(() => {
        const getBasicParameter = async () => {
            console.log("TG ID =>", tgUserId)
            const tokenBalanceData = await FreeTokenAPI.post('/currentBalance', { tgUserId })
            const tokenBalance = tokenBalanceData.data.message

            const todayClaimAmountData = await FreeTokenAPI.post('/todayClaimAmount', { tgUserId })
            const isClaimAvailable = await FreeTokenAPI.post("/isDailyClaim", { tgUserId })

            await setIsDailyClaimed(isClaimAvailable.data.message)
            await setFreeTokenBalance(tokenBalance)
            await setTodayClaimAmount(todayClaimAmountData.data.message)
        }
        if (tgUserId !== 0) getBasicParameter()
    }, [user, tgUserId])

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
        setIsDailyClaimed: setIsDailyClaimed,
        setTgUserId: setTgUserId,
        tgUserId: tgUserId
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
        setIsDailyClaimed,
        tgUserId,
        setTgUserId
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