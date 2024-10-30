import { useEffect, useState, useRef } from 'react';
import PlayerBear from "../../../assets/gameBear.svg"
import FirewallPng from "../../../assets/firewall.png"

interface PropsGamePlayBoard {
    isStart: boolean,
    setIsStart: (id: boolean) => void;
}
const GamePlayBoard = ({ isStart, setIsStart }: PropsGamePlayBoard) => {
    const gameBoardRef = useRef<HTMLDivElement | null>(null)
    const playerRef = useRef<HTMLDivElement | null>(null);
    const wallRef_1 = useRef<HTMLDivElement | null>(null);
    const wallRef_2 = useRef<HTMLDivElement | null>(null);
    const wallRef_3 = useRef<HTMLDivElement | null>(null);
    const wallRef_4 = useRef<HTMLDivElement | null>(null);

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
        if (isStart === true)
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
    }, [isChangeDirector, isStart])

    const IsCrash = () => {
        const y_rate = 100
        const left_x = 0
        const right_x = 95
        if (wallRef_1.current && gameBoardRef.current && playerRef.current) {
            const width_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().width
            const height_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().height

            const player_height = (playerRef.current?.getBoundingClientRect().height) * 100 / height_GameBoard;
            // const player_width = (playerRef.current?.getBoundingClientRect().width) * 100 / width_GameBoard;

            const width_wall_1 = (wallRef_1.current?.getBoundingClientRect().width) * 100 / width_GameBoard;
            // const height_wall_1 = (wallRef_1.current?.getBoundingClientRect().height) * 100 / height_GameBoard

            const isCrash_x = width_wall_1 - playerPosition
            const isCrash_y = firewallPosition1 + player_height
            if (isCrash_x > left_x && isCrash_y > y_rate) {
                setIsStart(false)
            }
        }

        if (wallRef_3.current && gameBoardRef.current && playerRef.current) {
            const width_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().width
            const height_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().height

            const player_height = (playerRef.current?.getBoundingClientRect().height) * 100 / height_GameBoard;
            // const player_width = (playerRef.current?.getBoundingClientRect().width) * 100 / width_GameBoard;

            const width_wall_3 = (wallRef_3.current?.getBoundingClientRect().width) * 100 / width_GameBoard;
            // const height_wall_3 = (wallRef_3.current?.getBoundingClientRect().height) * 100 / height_GameBoard

            const isCrash_x = width_wall_3 - playerPosition
            const isCrash_y = firewallPosition3 + player_height
            if (isCrash_x > left_x && isCrash_y > y_rate) {
                setIsStart(false)
            }
        }

        if (wallRef_2.current && gameBoardRef.current && playerRef.current) {
            const width_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().width
            const height_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().height

            const player_height = (playerRef.current?.getBoundingClientRect().height) * 100 / height_GameBoard;
            // const player_width = (playerRef.current?.getBoundingClientRect().width) * 100 / width_GameBoard;

            const width_wall_2 = (wallRef_2.current?.getBoundingClientRect().width) * 100 / width_GameBoard;
            // const height_wall_2 = (wallRef_2.current?.getBoundingClientRect().height) * 100 / height_GameBoard

            const isCrash_x = width_wall_2 + playerPosition
            const isCrash_y = firewallPosition2 + player_height
            if (isCrash_x > right_x && isCrash_y > y_rate) {
                setIsStart(false)
            }
        }

        if (wallRef_4.current && gameBoardRef.current && playerRef.current) {
            const width_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().width
            const height_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().height

            const player_height = (playerRef.current?.getBoundingClientRect().height) * 100 / height_GameBoard;
            // const player_width = (playerRef.current?.getBoundingClientRect().width) * 100 / width_GameBoard;

            const width_wall_4 = (wallRef_4.current?.getBoundingClientRect().width) * 100 / width_GameBoard;
            // const height_wall_4 = (wallRef_4.current?.getBoundingClientRect().height) * 100 / height_GameBoard

            const isCrash_x = width_wall_4 + playerPosition
            const isCrash_y = firewallPosition4 + player_height
            if (isCrash_x > right_x && isCrash_y > y_rate) {
                setIsStart(false)
            }
        }


    }

    useEffect(() => {
        IsCrash()
        if (firewallPosition1 > 90) setFireWallPosition1(-Math.random() * 70)
        if (firewallPosition2 > 90) setFireWallPosition2(-Math.random() * 70)
        if (firewallPosition3 > 90) setFireWallPosition3(-Math.random() * 70)
        if (firewallPosition4 > 90) setFireWallPosition4(-Math.random() * 70)
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

    useEffect(() => {
        if (isStart === true) {
            setIsChangeDirector(!isChangeDirector)
            setChangeNumberDirector(prev => prev + 1)
        }
        else {
            setPlayerPosition(50)
            setFireWallPosition1(0)
            setFireWallPosition2(-50)
            setFireWallPosition3(-100)
            setFireWallPosition4(-150)
        }
    }, [isStart])


    return (
        <div className="h-full flex flex flex-col relative overflow-y-auto scroll-m-0"
            ref={gameBoardRef}
            onClick={() => {
                if (isStart === true) {
                    setIsChangeDirector(!isChangeDirector)
                    setChangeNumberDirector(prev => prev + 1)
                }
            }}
        >
            <div
                ref={playerRef}
                className="w-[70px] h-[60px] -translate-x-1/2"
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

            <div
                ref={wallRef_1}
                className="w-[35vw] h-[20px] bg-cover"
                style={{
                    position: "absolute",
                    left: "0px",
                    top: `${firewallPosition1}%`,
                    backgroundImage: `url(${FirewallPng})`,

                }}
            />

            <div
                ref={wallRef_2}
                className="w-[35vw] h-[20px] bg-cover"
                style={{
                    position: "absolute",
                    right: "0px",
                    top: `${firewallPosition2}%`,
                    backgroundImage: `url(${FirewallPng})`,

                }}
            />

            <div
                ref={wallRef_3}
                className="w-[35vw] h-[20px] bg-cover"
                style={{
                    position: "absolute",
                    left: "0px",
                    top: `${firewallPosition3}%`,
                    backgroundImage: `url(${FirewallPng})`,

                }}
            />

            <div
                ref={wallRef_4}
                className="w-[35vw] h-[20px] bg-cover"
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