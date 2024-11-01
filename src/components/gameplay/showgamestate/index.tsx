import TokenIcon from "../../../assets/tokenIcon.png"
import AlertIcon from "../../../assets/alert.svg"
import { useEffect } from "react"
import { useUtilContext } from "../../../hooks"

interface PropsShowGameState {
    isStart: boolean
}
const ShowGameState = ({ isStart }: PropsShowGameState) => {
    const { freetokenBalance } = useUtilContext()
    useEffect(() => {

    }, [isStart])
    return (
        <div className="h-[65px] flex justify-center items-center gap-2">
            <img
                src={TokenIcon}
                className="w-[70px] h-[70px]"
            />

            <p className="text-[28px]">
                {freetokenBalance}
            </p>

            <div className="w-[34px] h-[34px] bg-[#151419] flex justify-center items-center rounded-sm">
                <img
                    src={AlertIcon}
                    className="w-[24px] h-[24px]"
                />
            </div>
        </div>
    )
}

export default ShowGameState