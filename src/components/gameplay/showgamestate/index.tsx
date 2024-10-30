import TokenIcon from "../../../assets/tokenIcon.png"
import AlertIcon from "../../../assets/alert.svg"
const ShowGameState = () => {
    return (
        <div className="h-[100px] m-3 flex justify-center items-center gap-2">
            <img
                src={TokenIcon}
                className="w-[78px] h-[78px]"
            />

            <p className="text-[32px]">
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