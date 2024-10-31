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

    const [playerPosition_x, setPlayerPositionX] = useState<number>(50)
    const [playerPosition_y, setPlayerPositionY] = useState<number>(0)
    const [rotation, setRotation] = useState<number>(0);
    const [firewallPosition1, setFireWallPosition1] = useState<number>(0)
    const [firewallPosition2, setFireWallPosition2] = useState<number>(-50)
    const [firewallPosition3, setFireWallPosition3] = useState<number>(-100)
    const [firewallPosition4, setFireWallPosition4] = useState<number>(-150)
    const [changeNumberDirector, setChangeNumberDirector] = useState<number>(0)
    const [isChangeDirector, setIsChangeDirector] = useState<boolean>(true)
    const [isCrashed, setIsCrashed] = useState<boolean>(false)
    const playerStep = 0.4
    const wallStep = 0.5


    const PlayingGame = () => {
        setFireWallPosition1(prev => prev + wallStep)
        setFireWallPosition2(prev => prev + wallStep)
        setFireWallPosition3(prev => prev + wallStep)
        setFireWallPosition4(prev => prev + wallStep)
        if (isChangeDirector === true)
            setPlayerPositionX(prev => prev + playerStep)
        else setPlayerPositionX(prev => prev - playerStep)
    }


    const IsCrash = () => {
        const y_rate = 95
        const left_x = -5
        const right_x = 95
        if (wallRef_1.current && gameBoardRef.current && playerRef.current) {
            const width_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().width
            const height_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().height

            const player_height = (playerRef.current?.getBoundingClientRect().height) * 100 / height_GameBoard;
            // const player_width = (playerRef.current?.getBoundingClientRect().width) * 100 / width_GameBoard;

            const width_wall_1 = (wallRef_1.current?.getBoundingClientRect().width) * 100 / width_GameBoard;
            // const height_wall_1 = (wallRef_1.current?.getBoundingClientRect().height) * 100 / height_GameBoard

            const isCrash_x = width_wall_1 - playerPosition_x
            const isCrash_y = firewallPosition1 + player_height
            if (isCrash_x > left_x && isCrash_y > y_rate) {
                setIsStart(false)
                setIsCrashed(true)
            }
        }

        if (wallRef_3.current && gameBoardRef.current && playerRef.current) {
            const width_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().width
            const height_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().height

            const player_height = (playerRef.current?.getBoundingClientRect().height) * 100 / height_GameBoard;
            // const player_width = (playerRef.current?.getBoundingClientRect().width) * 100 / width_GameBoard;

            const width_wall_3 = (wallRef_3.current?.getBoundingClientRect().width) * 100 / width_GameBoard;
            // const height_wall_3 = (wallRef_3.current?.getBoundingClientRect().height) * 100 / height_GameBoard

            const isCrash_x = width_wall_3 - playerPosition_x
            const isCrash_y = firewallPosition3 + player_height
            if (isCrash_x > left_x && isCrash_y > y_rate) {
                setIsStart(false)
                setIsCrashed(true)
            }
        }

        if (wallRef_2.current && gameBoardRef.current && playerRef.current) {
            const width_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().width
            const height_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().height

            const player_height = (playerRef.current?.getBoundingClientRect().height) * 100 / height_GameBoard;
            // const player_width = (playerRef.current?.getBoundingClientRect().width) * 100 / width_GameBoard;

            const width_wall_2 = (wallRef_2.current?.getBoundingClientRect().width) * 100 / width_GameBoard;
            // const height_wall_2 = (wallRef_2.current?.getBoundingClientRect().height) * 100 / height_GameBoard

            const isCrash_x = width_wall_2 + playerPosition_x
            const isCrash_y = firewallPosition2 + player_height
            if (isCrash_x > right_x && isCrash_y > y_rate) {
                setIsStart(false)
                setIsCrashed(true)
            }
        }

        if (wallRef_4.current && gameBoardRef.current && playerRef.current) {
            const width_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().width
            const height_GameBoard: number = gameBoardRef.current?.getBoundingClientRect().height

            const player_height = (playerRef.current?.getBoundingClientRect().height) * 100 / height_GameBoard;
            // const player_width = (playerRef.current?.getBoundingClientRect().width) * 100 / width_GameBoard;

            const width_wall_4 = (wallRef_4.current?.getBoundingClientRect().width) * 100 / width_GameBoard;
            // const height_wall_4 = (wallRef_4.current?.getBoundingClientRect().height) * 100 / height_GameBoard

            const isCrash_x = width_wall_4 + playerPosition_x
            const isCrash_y = firewallPosition4 + player_height
            if (isCrash_x > right_x && isCrash_y > y_rate) {
                setIsStart(false)
                setIsCrashed(true)
            }
        }
    }
//Playing Game while Player is not died.
    useEffect(() => {
        if (isStart === true)
            if (changeNumberDirector != 0) {
                const interval = setInterval(() => {
                    PlayingGame()
                }, 10)
                return () => clearInterval(interval)
            }
    }, [isChangeDirector, isStart])


//When player is died, firewall is formatted
    useEffect(() => {
        IsCrash()
        if (firewallPosition1 > 90) setFireWallPosition1(-Math.random() * 70)
        if (firewallPosition2 > 90) setFireWallPosition2(-Math.random() * 70)
        if (firewallPosition3 > 90) setFireWallPosition3(-Math.random() * 70)
        if (firewallPosition4 > 90) setFireWallPosition4(-Math.random() * 70)
        if (playerPosition_x > 95) setPlayerPositionX(5)
        if (playerPosition_x < 5) setPlayerPositionX(95)
    },
        [
            firewallPosition1,
            firewallPosition2,
            firewallPosition3,
            firewallPosition4,
            playerPosition_x
        ]
    )


//When start btn is pushed, the Game will get started
    useEffect(() => {
        if (isStart === true) {
            setIsChangeDirector(!isChangeDirector)
            setChangeNumberDirector(prev => prev + 1)
            setIsCrashed(false)
        }
    }, [isStart])


//When player is crashed with Firewall, the crashing animation will be done.
    useEffect(() => {
        if (!isCrashed) return
        let t: number = 0
        const interval = setInterval(() => {
            const g = 0.00005
            const initialV = 0.015
            t = t + 5
            if (t < 1000) {
                setPlayerPositionY(prev => prev + initialV * t - 0.5 * g * t * t)
                setRotation(prev => prev + 10)
            }

            else {
                clearInterval(interval)
                setPlayerPositionY(5)
                setPlayerPositionX(50)
                setRotation(0)
                setFireWallPosition1(0)
                setFireWallPosition2(-50)
                setFireWallPosition3(-100)
                setFireWallPosition4(-150)
            }
        }, 7)

        return () => clearInterval(interval)
    }, [isCrashed])


    return (
        <div className="h-full flex flex flex-col relative overflow-y-auto"
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
                className="w-[70px] h-[60px]"
                style={{
                    position: "absolute",
                    bottom: `${playerPosition_y}px`,
                    left: `${playerPosition_x}%`,
                    transform: `translateX(-50%) rotate(${rotation}deg)`,
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