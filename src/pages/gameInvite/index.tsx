
import RealTokenIcon from "../../assets/tokenIcon.png"
import RocketIcon from "../../assets/rocketIcon.svg"
import { useUtilContext } from "../../hooks"
import { initUtils } from '@telegram-apps/sdk'
import { tg_inviteName } from "../../constant"
import { useEffect, useState } from "react"
import { FriendsAPI } from "../../service"
import CoinImg from "../../assets/coin-y.svg"
import Loading from "../../components/gameplay/loadingAnimation"
const FriendListComponent = (props: any) => {
    return (
        <div className="h-[70px] ml-5 mr-5 flex justify-between items-center pr-3 pl-3">
            <div className="flex gap-3 items-center">
                <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    alt="avatar"
                    src={props.avatarUrl}
                />
                <p className="text-[white]">
                    {props.realName}
                </p>
            </div>
            <div className="flex items-center gap-3">
                <img
                    className="w-[30px] h-[30px]"
                    src={CoinImg}
                    alt="coin"
                />
                <div>
                    <p className="text-right">+25</p>
                    <p className="text-right opacity-70">
                        {props.balance}
                    </p>
                </div>
            </div>
        </div>
    )
}

const GameInvite = () => {
    const { freetokenBalance, tgUserId } = useUtilContext()
    const [friendList, setFriendList] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const utils = initUtils();
    const generateInviteLink = () => {
        const tmpURL = `https://t.me/${tg_inviteName}?start=${tgUserId}`;
        const tmpTEXT = "Bear Game: Play and Get Rewards.🚀💰🤑";
        const fullURL = `https://t.me/share/url?url=${tmpURL}&text=${tmpTEXT}`;
        return fullURL;
    };

    // Function to handle invite
    const inviteUser = () => {
        utils.openTelegramLink(generateInviteLink());
    };

    useEffect(() => {
        const getFriendlist = async () => {
            const _friendList = await FriendsAPI.post('/getFriendlist', { tgUserId: tgUserId })
            const friendList = _friendList.data.message
            console.log(friendList)
            await setFriendList(friendList)
            await setIsLoading(true)
        }

        getFriendlist()
    }, [])

    return (
        <div className="w-full">
            <div className="flex justify-between pr-5 pl-5 pt-5 pb-3">
                <p className="text-left">Friends</p>
                <p className="text-left text-[20px]">0</p>
            </div>
            <div className="flex flex-col gap-3 h-[50vh] focus:scroll-auto scroll-smooth hover:scroll-m-0  scroll-m-8 overflow-y-auto">
                {/* <img
                    src={InviteImage}
                    className="w-[304px] h-[206px]"
                />
                <p className="text-[#FFFFFF] text-[15px] p-3">
                    Invite a friend and you’ll both get 25 points.
                </p> */}
                {
                    isLoading ?
                        friendList.map((itx: any, idx: number) => (
                            <FriendListComponent
                                avatarUrl={itx.avatarUrl}
                                realName={itx.realName}
                                balance={itx.balance}
                                key={idx}
                            />
                        )) : <Loading />
                }
            </div>

            <div className="mt-5 pl-8 pr-8">
                <p className="text-[#F3F4F6] text-[14px] text-left">Earned</p>
                <div className="bg-[#373D4B] h-[44px] mt-3 flex justify-start items-center gap-3 pl-5 rounded-tl-xl rounded-br-xl">
                    <div className="w-full flex justify-center items-center gap-1">
                        <img
                            className="w-[34px] h-[34px]"
                            src={RealTokenIcon}
                        />
                        <p>+{freetokenBalance}</p>
                    </div>

                    <div className="w-full flex justify-center items-center gap-1">
                        <div className="w-[27px] h-[27px] bg-[#29262F] rounded-[50%] flex justify-center items-center">
                            <img
                                className=""
                                src={RocketIcon}
                            />
                        </div>
                        <p>0.00</p>
                    </div>
                </div>

                <div className="bg-[#FCE069] h-[44px] mt-3 flex justify-center items-center rounded-tl-xl rounded-br-xl cursor-pointer text-[16px] text-[black] font-bold"
                    onClick={() => {
                        inviteUser()
                    }}>
                    Invite a Friend
                </div>
            </div>
        </div>
    )
}

export default GameInvite