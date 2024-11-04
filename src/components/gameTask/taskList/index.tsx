import RealTokenIcon from "../../../assets/tokenIcon.png"
import CheckIcon from "../../../assets/check.svg"
import StartBtnIcon from "../../../assets/startbtn.svg"
import { useNavigate } from "react-router-dom"
import { FreeTokenAPI } from "../../../service"
import { useUtilContext } from "../../../hooks"
import { showToast } from "../../../helper"

interface PropsTaskComponent {
    isCompleted: boolean
}

const TaskComponent = ({ isCompleted }: PropsTaskComponent) => {

    const navigate = useNavigate()
    return (
        <div className="h-[62px] bg-[#151419CC] flex justify-center items-center gap-2 p-3 mt-3">
            <img
                src={RealTokenIcon}
                className="w-[44px] h-[44px]"
                alt="RealToken"
            />
            <div className="w-full flex flex-col justify-center items-start">
                <p className="text-[12px] text-[#F3F4F6]">
                    Make Opulence Wallet
                </p>
                <p className="text-[14px] text-[#A0A8BA]">
                    +1000 Coins
                </p>
            </div>
            {
                isCompleted ? <img
                    src={CheckIcon}
                    className="w-[30px] h-[30px]"
                    alt="CheckIcon"
                /> :
                    <img
                        src={StartBtnIcon}
                        className="w-[68px] h-[28px] cursor-pointer"
                        alt="CheckIcon"
                        onClick={() => navigate("/game-wallet")}
                    />
            }
        </div>
    )
}

const DailyTaskComponent = () => {
    const { tgUserId, todayClaimAmount, isDailyClaimed, setFreeTokenBalance } = useUtilContext()


    const getDailyClaim = async () => {
        try {

            const requestClaim = await FreeTokenAPI.post('/getDailyClaim', { tgUserId: tgUserId, balance: todayClaimAmount })
            if (requestClaim.data.message === true) {
                showToast("success", `Today you got ${todayClaimAmount} Coins!`)
                const tokenBalanceData = await FreeTokenAPI.post('/currentBalance', { tgUserId })
                const tokenBalance = tokenBalanceData.data.message
                setFreeTokenBalance(tokenBalance)
            }

            else showToast("warning", "You can obtain coins every 24 hours")
        } catch (err) {
            showToast("error", "Network Error")
        }
    }



    return (
        <div className="h-[62px] bg-[#151419CC] flex justify-center items-center gap-2 p-3 mt-3">
            <img
                src={RealTokenIcon}
                className="w-[44px] h-[44px]"
                alt="RealToken"
            />
            <div className="w-full flex flex-col justify-center items-start">
                <p className="text-[12px] text-[#F3F4F6]">
                    Make Opulence Wallet
                </p>
                <p className="text-[14px] text-[#A0A8BA]">
                    +{todayClaimAmount} Coins
                </p>
            </div>
            {!isDailyClaimed ?
                <img
                    src={CheckIcon}
                    className="w-[30px] h-[30px]"
                    alt="CheckIcon"
                /> :
                <img
                    src={StartBtnIcon}
                    className="w-[68px] h-[28px] cursor-pointer"
                    alt="CheckIcon"
                    onClick={getDailyClaim}
                />
            }
        </div>
    )
}

const TaskList = () => {
    return (
        <div className="p-5">
            <p className="text-left">Task</p>
            <DailyTaskComponent />
            <TaskComponent isCompleted={false} />
        </div>
    )
}

export default TaskList