import TaskList from "../../components/gameTask/taskList"
import TokenBalance from "../../components/tokenbalance"
const GameTask = () => {
    return (
        <div className="w-full">
            <TokenBalance />
            <TaskList />
        </div>
    )
}

export default GameTask