import GameplayHeader from "../../components/gameplay/header"
import TokenBalance from "../../components/tokenbalance"
import ShowGameState from "../../components/gameplay/showgamestate"
import GamePlayBoard from "../../components/gameplay/gameplayboard"
import GameValueInput from "../../components/gameplay/gamevalueinput"
import GameStartButton from "../../components/gameplay/gameStartButton"
import { useState } from "react"
import { showToast } from "../../helper"
import { useUtilContext } from "../../hooks"

const Dashboard = () => {
    const { freetokenBalance } = useUtilContext()
    const [isStart, setIsStart] = useState<boolean>(false)
    const [bet, setBet] = useState<number>(10)
    const [autoStop, setAutoStop] = useState<number>(1.1)

    return (
        <div className="h-[90vh] flex flex-col justify-between">
            <div>
                <GameplayHeader isStart={isStart} />
                <TokenBalance isStart={isStart} />
                <ShowGameState isStart={isStart} />
            </div>
            <GamePlayBoard
                isStart={isStart}
                setIsStart={setIsStart}
                bet={bet}
                autoStop={autoStop}
            />
            <div>
                <GameValueInput
                    isStart={isStart}
                    bet={bet}
                    autoStop={autoStop}
                    setBet={setBet}
                    setAutoStop={setAutoStop}
                />
                <GameStartButton
                    onClick={() => {
                        if (autoStop < 1.1) {
                            showToast("warning", "Autostop value should be 1.1 at least")
                        }
                        else if (freetokenBalance < 10) showToast("warning", "Lack of Token!")
                        else setIsStart(!isStart)
                    }}
                    isStart={isStart} />
            </div>
        </div>
    )
}

export default Dashboard