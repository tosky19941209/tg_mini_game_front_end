import FailIcon from "../../../assets/fail.svg"

interface PropsHistory {
    total: number,
    benefit: number,
    plus: number,
}
const HistoryComponent = ({ total, benefit, plus }: PropsHistory) => {
    return (
        <div className={`mr-5 ml-5 h-[49px] ${benefit < 0 ? "bg-[black]" : ""} flex justify-between items-center gap-1 p-3 rounded-tl-xl rounded-br-xl`}>
            <p className={`w-full text-left text-[#A0A8BA]`}>{total.toFixed(2)}</p>
            {
                benefit >= 0 ?
                    <p className="w-full text-center text-[#A0A8BA]">x{benefit}</p> :
                    <img
                        src={FailIcon}
                        className="w-[26px] h-[26px]"
                        alt="failed"
                    />

            }
            <p className={`w-full text-right ${plus < 0 ? "text-[#FF3D00]" : "text-[#4CAF50]"}`}>{plus < 0 ? plus : "+" + plus}</p>
        </div>
    )
}

const HistoryList = () => {

    const histories = [
        { total: 10000, benefit: 1.04, plus: +400 },
        { total: 10000, benefit: 1.04, plus: +0 },
        { total: 100, benefit: 1.04, plus: +20 },
        { total: 10023, benefit: -1, plus: -400 },
        { total: 101, benefit: 1, plus: -400 },
        { total: 100, benefit: -3, plus: +400 },
    ]

    return (
        <div className="flex flex-col gap-3">
            {
                histories.map((item: any, idx: number) => (
                    <HistoryComponent
                        total={item.total}
                        benefit={item.benefit}
                        plus={item.plus}
                        key={idx}
                    />
                ))
            }
        </div>
    )
}

export default HistoryList