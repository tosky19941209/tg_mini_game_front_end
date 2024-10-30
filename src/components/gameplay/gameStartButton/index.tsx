interface PropsStartButton {
    onClick: (id: any) => void;
    isStart: boolean
}
const GameStartButton = ({ onClick, isStart }: PropsStartButton) => {
    return (
        <div className="h-[52px] pr-5 pl-5">
            <button className="w-[100%] h-[100%] bg-[#FCE069] rounded-tl-xl rounded-br-xl"
                onClick={onClick}
            >
                <p className="text-[16px] text-[black]">
                    {
                        isStart === false ? "Start" : "Stop"
                    }
                </p>
            </button>
        </div>
    )
}


export default GameStartButton