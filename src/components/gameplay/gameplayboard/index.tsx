import { useEffect, useState } from 'react';
import PlayerBear from "../../../assets/gameBear.svg"
import Firewall from "../../../assets/firewall.svg"

const GamePlayBoard = () => {
    const [playerPosition, setPlayerPosition] = useState<number>(50)
    const [firewallPosition1, setFireWallPosition1] = useState<number>(0)
    const [firewallPosition2, setFireWallPosition2] = useState<number>(-50)
    const [firewallPosition3, setFireWallPosition3] = useState<number>(-100)
    const [firewallPosition4, setFireWallPosition4] = useState<number>(-150)
    const [isChangeDirector, setIsChangeDirector] = useState<boolean>(true)
    const [changeNumberDirector, setChangeNumberDirector] = useState<number>(0)
    const playerStep = 0.2
    const wallStep = 0.5

    useEffect(() => {
        if (changeNumberDirector != 0) {
            const interval = setInterval(() => {
                setFireWallPosition1(prev => prev + wallStep)
                setFireWallPosition2(prev => prev + wallStep)
                setFireWallPosition3(prev => prev + wallStep)
                setFireWallPosition4(prev => prev + wallStep)
                if (isChangeDirector === true)
                    setPlayerPosition(prev => prev + playerStep)
                else setPlayerPosition(prev => prev - playerStep)

            }, 10)
            return () => clearInterval(interval)
        }
    }, [isChangeDirector])

    useEffect(() => {
        if (firewallPosition1 > 120) setFireWallPosition1(-Math.random() * 50)
        if (firewallPosition2 > 120) setFireWallPosition2(-Math.random() * 50)
        if (firewallPosition3 > 120) setFireWallPosition3(-Math.random() * 50)
        if (firewallPosition4 > 120) setFireWallPosition4(-Math.random() * 50)
    },
        [
            firewallPosition1,
            firewallPosition2,
            firewallPosition3,
            firewallPosition4
        ]
    )

    return (
        <div className="h-full flex flex flex-col relative overflow-y-auto"
            onClick={() => {
                setIsChangeDirector(!isChangeDirector)
                setChangeNumberDirector(prev => prev + 1)
            }}
        >
            <div className="w-[70px] h-[60px] -translate-x-1/2"
                style={{
                    position: "absolute",
                    bottom: "5px",
                    left: `${playerPosition}%`
                }}>
                <img
                    className="w-[100%] h-[100%]"
                    src={PlayerBear}
                />
            </div>

            <div className="w-[160px] h-[28px]"
                style={{
                    position: "absolute",
                    left: "0px",
                    top: `${firewallPosition1}%`
                }}
            >
                <img
                    className='w-[100%] h-[100%]'
                    src={Firewall}
                />
            </div>


            <div className="w-[160px] h-[28px]"
                style={{
                    position: "absolute",
                    right: "0px",
                    top: `${firewallPosition2}%`
                }}
            >
                <img
                    className='w-[100%] h-[100%]'
                    src={Firewall}
                />
            </div>

            <div className="w-[160px] h-[28px]"
                style={{
                    position: "absolute",
                    left: "0px",
                    top: `${firewallPosition3}%`
                }}
            >
                <img
                    className='w-[100%] h-[100%]'
                    src={Firewall}
                />
            </div>

            <div className="w-[160px] h-[28px]"
                style={{
                    position: "absolute",
                    right: "0px",
                    top: `${firewallPosition4}%`
                }}
            >
                <img
                    className='w-[100%] h-[100%]'
                    src={Firewall}
                />
            </div>
        </div>
    )
}

export default GamePlayBoard