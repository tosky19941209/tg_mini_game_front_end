import TokenBalance from "../../components/tokenbalance"
import HistoryTitle from "../../components/gameHistory/historyTitle"
import HistoryList from "../../components/gameHistory/historyList"

const GameHistory = () => {
    return (
        <div className="w-full">
            <TokenBalance />
            <HistoryTitle />
            <HistoryList />
        </div>
    )
}

export default GameHistory