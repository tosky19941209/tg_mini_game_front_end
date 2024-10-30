import GameplayHeader from "../../components/gameplay/header"
import TokenBalance from "../../components/tokenbalance"
import ShowGameState from "../../components/gameplay/showgamestate"
import GamePlayBoard from "../../components/gameplay/gameplayboard"
import GameValueInput from "../../components/gameplay/gamevalueinput"
import GameStartButton from "../../components/gameplay/gameStartButton"
import { useState } from "react"

const Dashboard = () => {
    const [isStart, setIsStart] = useState<boolean>(false)
    return (
        <div className="h-[90vh] flex flex-col justify-between">
            <div>
                <GameplayHeader isStart={isStart} />
                <TokenBalance isStart={isStart} />
                <ShowGameState isStart={isStart} />
            </div>
            <GamePlayBoard isStart={isStart} setIsStart={setIsStart} />
            <div>
                <GameValueInput isStart={isStart} />
                <GameStartButton onClick={() => setIsStart(!isStart)} isStart={isStart} />
            </div>
        </div>
    )
}

export default Dashboard