import FollowUp from "../../../assets/followup.svg"
import FollowDown from "../../../assets/followdown.svg"
import { useEffect } from "react"
import { useUtilContext } from "../../../hooks"
interface PropsGameplayHeader {
    isStart: boolean
}
const GameplayHeader = ({ isStart }: PropsGameplayHeader) => {
    const { realName, avatarUrl } = useUtilContext()
    useEffect(() => {

    }, [isStart])
    return (
        <div className="h-[89px] mr-2 ml-2 mb-1 mt-1 border rounded-tl-xl rounded-br-xl border-[#F0B90B] flex justify-center items-center bg-[#29262F]">
            <div className="w-full h-[100%] ml-4 flex items-center">
                <img
                    className="rounded-[50%] w-[59px] h-[59px] bg-red-100  "
                    src={avatarUrl}
                    alt="avatar"
                />
                <div className="flex ml-3 flex-col justify-center">
                    <p className="text-left font-bold text-[12px]">
                        {realName}
                    </p>
                    <p className="text-left font-bold text-[12px]">
                        God of Space
                    </p>
                    <p className="text-left text-[14px]">
                        235
                    </p>
                </div>
            </div>
            <div className="w-full h-[100%] gap-2 flex flex-col justify-center items-end">
                <div className="w-[125px] h-[30px] mr-4 bg-[#3F3B47] rounded-sm flex items-center justify-between p-2">
                    <img
                        className="w-[19px] h-[19px]"
                        alt="follow"
                        src={FollowUp}
                    />
                    <p>Won</p>
                    <p>1910</p>
                </div>

                <div className="w-[125px] h-[30px] mr-4 bg-[#3F3B47] rounded-sm flex items-center justify-between p-2">
                    <img
                        className="w-[19px] h-[19px]"
                        alt="follow"
                        src={FollowDown}
                    />
                    <p>Lost</p>
                    <p>1765</p>
                </div>

            </div>
        </div>
    )
}

export default GameplayHeader