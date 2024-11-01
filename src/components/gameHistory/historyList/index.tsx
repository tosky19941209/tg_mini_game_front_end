import { useEffect, useState } from "react"
import FailIcon from "../../../assets/fail.svg"
import { GameHistoryAPI } from "../../../service"
import { useUtilContext } from "../../../hooks"

interface PropsHistory {
    bet: number,
    profit: number,
    stopcrash: number,
}
const HistoryComponent = ({ bet, profit, stopcrash }: PropsHistory) => {
    return (
        <div className={`mr-5 ml-5 h-[49px] ${profit < 0 ? "bg-[black]" : ""} flex justify-between items-center gap-1 p-3 rounded-tl-xl rounded-br-xl`}>
            <p className={`w-full text-left text-[#A0A8BA]`}>{bet.toFixed(2)}</p>
            {
                profit >= 0 ?
                    <p className="w-full text-center text-[#A0A8BA]">x{stopcrash.toFixed(2)}</p> :
                    <img
                        src={FailIcon}
                        className="w-[26px] h-[26px]"
                        alt="failed"
                    />

            }
            <p className={`w-full text-right ${profit < 0 ? "text-[#FF3D00]" : "text-[#4CAF50]"}`}>{profit < 0 ? profit : "+" + profit.toFixed(2)}</p>
        </div>
    )
}

const HistoryList = () => {

    const { user } = useUtilContext()
    const [histories, setHistory] = useState<any>([])

    useEffect(() => {
        const getHistory = async () => {
            const historyData = await GameHistoryAPI.post('/getGameHistory', { user })
            setHistory(historyData.data.message)
        }
        getHistory()
    }, [])

    return (
        <div className="flex flex-col gap-3 h-[60vh] focus:scroll-auto scroll-smooth hover:scroll-m-0  scroll-m-8 overflow-y-auto">
            {
                histories.map((item: any, idx: number) => (
                    <HistoryComponent
                        bet={item.bet}
                        profit={item.profit}
                        stopcrash={item.stopcrash}
                        key={idx}
                    />
                ))
            }
        </div>
    )
}

export default HistoryList