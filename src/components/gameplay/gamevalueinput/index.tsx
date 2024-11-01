import { useEffect } from "react"

interface PropsGameValueInput {
    isStart: boolean,
    bet: number,
    autoStop: number,
    setAutoStop: (id: any) => void;
    setBet: (id: any) => void;
}

const GameValueInput = ({ isStart, bet, autoStop, setAutoStop, setBet }: PropsGameValueInput) => {

    useEffect(() => {

    }, [isStart])

    return (
        <div className=" flex p-2 gap-2">
            <div className="w-[50%] flex flex-col items-start">
                <p className="text-[14px]">Bet</p>
                <input
                    type="number"
                    className="h-[44px] w-[100%] bg-[#373D4B] rounded-tl-lg rounded-br-lg pl-3"
                    placeholder="Jonathan"
                    value={bet}
                    onChange={(e: any) => setBet(e.target.value)}
                />
                <p className="text-[12px] text-[#A0A8BA]">Minimal Bet is 1 Coin</p>
            </div>

            <div className="w-[50%] flex flex-col items-start">
                <p className="text-[14px]">Auto Stop</p>
                <div
                    className="flex h-[44px] w-[100%] bg-[#373D4B] rounded-tl-lg rounded-br-lg pl-3 justify-center items-center gap-1">
                    <p>x</p>
                    <input
                        className="w-full outline-none bg-transparent"
                        type="number"
                        placeholder="Jonathan"
                        value={autoStop}
                        onChange={(e: any) => setAutoStop(e.target.value)}
                        min={1.1}
                        max={100} />
                </div>
                <p className="text-[12px] text-[#A0A8BA] text-left">Auto Cash Out When this amount will be reachted</p>
            </div>
        </div>
    )
}

export default GameValueInput