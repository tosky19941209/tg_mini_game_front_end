import TokenIcon from "../../../assets/tokenIcon.png"
import AlertIcon from "../../../assets/alert.svg"
const ShowGameState = () => {
    return (
        <div className="h-[65px] flex justify-center items-center gap-2">
            <img
                src={TokenIcon}
                className="w-[70px] h-[70px]"
            />

            <p className="text-[28px]">
                92010304.30
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