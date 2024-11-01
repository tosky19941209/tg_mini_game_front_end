import TokenBackIcon from "../../assets/tokenBack.svg"
import WalletIcon from "../../assets/walletIcon.svg"
import { useTonAddress, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";

const GameWallet = () => {
    const [tonconnectUi] = useTonConnectUI();
    let wallet = useTonAddress();
    const tonwallet = useTonWallet();

    const disconnectFunction = async () => {
        console.log(tonwallet)
        await tonconnectUi.disconnect();
    }

    const tonWalletAction = () => {
        if (!wallet) {
            tonconnectUi.openModal()
        }
        else {
            disconnectFunction()
        }
    }

    return (
        <div className="w-full">
            <div className="flex flex-col justify-center items-center">
                <img
                    src={TokenBackIcon}
                    className="w-[304px] h-[206px]"

                />
                <p className="text-[#FFFFFF] text-[15px] p-3">
                    Connect your Token Wallet to be able to play with Token and Receive rewards from the platform
                </p>
            </div>

            <div className="mt-5 pl-8 pr-8">
                <p className="text-[#F3F4F6] text-[14px] text-left">Wallet</p>
                <div className="bg-[#373D4B] h-[44px] mt-3 flex justify-start items-center gap-3 pl-5 rounded-tl-xl rounded-br-xl">
                    <img
                        src={WalletIcon}
                        className="w-[20px] h-[20px]"
                        alt="WalletConnnect"
                    />
                    <p>Not Connected</p>
                </div>

                <div className="bg-[#FCE069] h-[44px] mt-3 flex justify-center items-center rounded-tl-xl rounded-br-xl cursor-pointer text-[16px] text-[black] font-bold"
                    onClick={() => tonWalletAction()}>
                    Connect Wallet
                </div>
            </div>
        </div>
    )
}

export default GameWallet