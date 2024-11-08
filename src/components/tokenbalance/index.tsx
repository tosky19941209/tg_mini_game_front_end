import TokenIcon from "../../assets/tokenIcon.png"
import RocketIcon from "../../assets/rocketIcon.svg"
import { useEffect } from "react"
import { useUtilContext } from "../../hooks"
interface PropsTokenBalance {
    isStart: boolean
}
const TokenBalance = ({ isStart }: PropsTokenBalance) => {
    const { freetokenBalance } = useUtilContext()
    useEffect(() => {

    }, [isStart])
    return (
        <div className="mr-5 ml-5 h-[50px] bg-[#151419] rounded-tl-xl rounded-br-xl p-2 flex">
            <div className="w-[50%] h-[100%] bg-[#29262F] rounded-tl-xl rounded-br-xl flex justify-center items-center gap-2">
                <img
                    className="w-[34px] h-[34px]"
                    src={TokenIcon}
                    alt="TokenIcon"
                />
                <p className="text-[14px]">
                    {freetokenBalance}
                </p>
            </div>

            <div className="w-[50%] h-[100%] rounded-tl-xl rounded-br-xl flex justify-center items-center gap-2">
                <div className="w-[27px] h-[27px] bg-[#29262F] rounded-[50%] flex justify-center items-center">
                    <img
                        className="w-[14px] h-[14px]"
                        src={RocketIcon}
                        alt="rocket"
                    />
                </div>
                <p className="text-[14px]">
                    0.00
                </p>
            </div>
        </div>
    )
}
export default TokenBalance