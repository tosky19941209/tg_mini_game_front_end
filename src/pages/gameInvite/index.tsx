
import InviteImage from "../../assets/inviteFriend.svg"
import RealTokenIcon from "../../assets/tokenIcon.png"
import RocketIcon from "../../assets/rocketIcon.svg"
const GameInvite = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center items-center">
                <img
                    src={InviteImage}
                    className="w-[304px] h-[206px]"

                />
                <p className="text-[#FFFFFF] text-[15px] p-3">
                    Invite a friend and you’ll both get 25 points.
                </p>
            </div>

            <div className="mt-5 pl-8 pr-8">
                <p className="text-[#F3F4F6] text-[14px] text-left">Earned</p>
                <div className="bg-[#373D4B] h-[44px] mt-3 flex justify-start items-center gap-3 pl-5 rounded-tl-xl rounded-br-xl">
                    <div className="w-full flex justify-center items-center gap-1">
                        <img
                            className="w-[34px] h-[34px]"
                            src={RealTokenIcon}
                        />
                        <p>+0</p>
                    </div>

                    <div className="w-full flex justify-center items-center gap-1">
                        <div className="w-[27px] h-[27px] bg-[#29262F] rounded-[50%] flex justify-center items-center">
                            <img
                                className=""
                                src={RocketIcon}
                            />
                        </div>
                        <p>0.00</p>
                    </div>
                </div>

                <div className="bg-[#FCE069] h-[44px] mt-3 flex justify-center items-center rounded-tl-xl rounded-br-xl cursor-pointer text-[16px] text-[black] font-bold">
                    Invite a Friend
                </div>
            </div>
        </div>
    )
}

export default GameInvite