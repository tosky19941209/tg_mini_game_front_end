import GameplayHeader from "../../components/gameplay/header"
import TokenBalance from "../../components/tokenbalance"
import ShowGameState from "../../components/gameplay/showgamestate"
import GamePlayBoard from "../../components/gameplay/gameplayboard"
import GameValueInput from "../../components/gameplay/gamevalueinput"
import GameStartButton from "../../components/gameplay/gameStartButton"

const Dashboard = () => {
    return (
        <div className="w-full">
            <GameplayHeader />
            <TokenBalance />
            <ShowGameState />
            <GamePlayBoard />
            <GameValueInput />
            <GameStartButton />
        </div>
    )
}

export default Dashboard