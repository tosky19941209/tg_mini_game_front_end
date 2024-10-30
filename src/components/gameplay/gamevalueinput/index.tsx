const GameValueInput = () => {
    return (
        <div className=" flex p-2 gap-2">
            <div className="w-[50%] flex flex-col items-start">
                <p className="text-[14px]">Bet</p>
                <input
                    type="number"
                    className="h-[44px] w-[100%] bg-[#373D4B] rounded-tl-lg rounded-br-lg pl-3"
                    placeholder="Jonathan"
                />
                <p className="text-[12px] text-[#A0A8BA]">Minimal Bet is 1 Coin</p>
            </div>

            <div className="w-[50%] flex flex-col items-start">
                <p className="text-[14px]">Auto Stop</p>
                <input
                    type="number"
                    className="h-[44px] w-[100%] bg-[#373D4B] rounded-tl-lg rounded-br-lg pl-3"
                    placeholder="Jonathan"
                />
                <p className="text-[12px] text-[#A0A8BA] text-left">Auto Cash Out When this amount will be reachted</p>
            </div>
        </div>
    )
}

export default GameValueInput