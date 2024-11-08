import { useState, useMemo, useEffect } from "react"
import UtilContext from "../../contexts"
import { FreeTokenAPI, UserAPI } from "../../service"
import { tg_token } from "../../constant"
import Loading from "../../components/gameplay/loadingAnimation"
const UtilContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarNumber, setSidebarNumber] = useState<number>(0)
    const [user, setUser] = useState<string | undefined>("")
    const [realName, setrealName] = useState<string>("")
    const [tgUserId, setTgUserId] = useState<number | undefined>(0)
    const [refresh, setRefresh] = useState<string>("")
    const [freetokenBalance, setFreeTokenBalance] = useState<number>(0)
    const [todayClaimAmount, setTodayClaimAmount] = useState<number>(0)
    const [isDailyClaimed, setIsDailyClaimed] = useState<boolean>(false)
    const [avatarUrl, setAvatarUrl] = useState<string | undefined>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const getProfileAvatar = async (userId: any, bot_token: any) => {
        const profilesResponse = await fetch(`https://api.telegram.org/bot${bot_token}/getUserProfilePhotos?user_id=${userId}`);
        const profiles = await profilesResponse.json();

        if (profiles.result.photos.length > 0) {
            const fileResponse = await fetch(`https://api.telegram.org/bot${bot_token}/getFile?file_id=${profiles.result.photos[0][2].file_id}`);
            const filePath = await fileResponse.json();

            const userAvatarUrl = `https://api.telegram.org/file/bot${bot_token}/${filePath.result.file_path}`;
            return userAvatarUrl;
        }
    }

    const getTelegramUserName = async () => {
        const webapp = window.Telegram?.WebApp.initDataUnsafe;

        // Get the inviter's ID from the link
        const urlParams = new URLSearchParams(window.location.search);
        const inviterUserId = urlParams.get('start');
        console.log("inivited from =>", inviterUserId)

        if (webapp) {
            const lastName = webapp["user"]["last_name"] && (" " + webapp["user"]["last_name"]);
            const realName = webapp["user"]["first_name"] + lastName;
            const userName = webapp["user"]["username"];
            const userId = webapp["user"]["id"];
            const avatarUrl = await getProfileAvatar(userId, tg_token)
            console.log("lastName =>", lastName)
            console.log("realName =>", realName)
            console.log("userName =>", userName)
            console.log("userID =>", userId)
            await UserAPI.post("/setuser", { user: userName, tgUserId: userId, realName: realName, avatarUrl: avatarUrl })
            await setUser(userName)
            await setTgUserId(userId)
            await setrealName(realName)
            await setAvatarUrl(avatarUrl)
            await setIsLoading(true)
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
        tgUserId: tgUserId,
        realName: realName,
        avatarUrl: avatarUrl
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
        setTgUserId,
        realName,
        avatarUrl
    ])

    useEffect(() => {
        init();
    }, [])

    return (
        <UtilContext.Provider value={value}>
            {isLoading ? children : <Loading />}
        </UtilContext.Provider>
    )
}

export default UtilContextProvider