import { useEffect, useState } from 'react';
import PlayerBear from "../../../assets/gameBear.svg"
import FirewallPng from "../../../assets/firewall.png"
const GamePlayBoard = () => {
    const [playerPosition, setPlayerPosition] = useState<number>(50)
    const [firewallPosition1, setFireWallPosition1] = useState<number>(0)
    const [firewallPosition2, setFireWallPosition2] = useState<number>(-50)
    const [firewallPosition3, setFireWallPosition3] = useState<number>(-100)
    const [firewallPosition4, setFireWallPosition4] = useState<number>(-150)
    const [isChangeDirector, setIsChangeDirector] = useState<boolean>(true)
    const [changeNumberDirector, setChangeNumberDirector] = useState<number>(0)
    const playerStep = 0.4
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
        if (firewallPosition1 > 95) setFireWallPosition1(-Math.random() * 70)
        if (firewallPosition2 > 95) setFireWallPosition2(-Math.random() * 70)
        if (firewallPosition3 > 95) setFireWallPosition3(-Math.random() * 70)
        if (firewallPosition4 > 95) setFireWallPosition4(-Math.random() * 70)
        if (playerPosition > 95) setPlayerPosition(5)
        if (playerPosition < 5) setPlayerPosition(95)
    },
        [
            firewallPosition1,
            firewallPosition2,
            firewallPosition3,
            firewallPosition4,
            playerPosition
        ]
    )

    return (
        <div className="h-full flex flex flex-col relative overflow-y-auto scroll-m-0"
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

            <div className="w-[35vw] h-[20px] bg-cover"
                style={{
                    position: "absolute",
                    left: "0px",
                    top: `${firewallPosition1}%`,
                    backgroundImage: `url(${FirewallPng})`,

                }}
            />




            <div className="w-[35vw] h-[20px] bg-cover"
                style={{
                    position: "absolute",
                    right: "0px",
                    top: `${firewallPosition2}%`,
                    backgroundImage: `url(${FirewallPng})`,

                }}
            />

            <div className="w-[35vw] h-[20px] bg-cover"
                style={{
                    position: "absolute",
                    left: "0px",
                    top: `${firewallPosition3}%`,
                    backgroundImage: `url(${FirewallPng})`,

                }}
            />

            <div className="w-[35vw] h-[20px] bg-cover"
                style={{
                    position: "absolute",
                    right: "0px",
                    top: `${firewallPosition4}%`,
                    backgroundImage: `url(${FirewallPng})`,

                }}
            />
        </div>
    )
}

export default GamePlayBoard