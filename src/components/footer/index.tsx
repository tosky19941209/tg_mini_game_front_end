import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';

import PlayBar from "../../assets/footer_play_icon.svg"
import PlayBarHover from "../../assets/footer_play_icon_hover.svg"
import EarnBar from "../../assets/footer_earn_icon.svg"
import EarnBarHover from "../../assets/footer_earn_icon_hover.svg"
import FriendBar from "../../assets/footer_friends_icon.svg"
import FriendBarHover from "../../assets/footer_friends_icon_hover.svg"
import StateBar from "../../assets/footer_state_icon.svg"
import StateBarHover from "../../assets/footer_state_icon_hover.svg"
import WalletBar from "../../assets/footer_wallet_icon.svg"
import WalletBarHover from "../../assets/footer_wallet_icon_hover.svg"

const Footer = () => {
    const Sidebar = [PlayBar, EarnBar, FriendBar, StateBar, WalletBar]
    const HoverSidebar = [PlayBarHover, EarnBarHover, FriendBarHover, StateBarHover, WalletBarHover]
    const Links = [
        "/",
        "/game-task",
        "/game-invite",
        "/game-history",
        "/game-wallet",

    ]
    const [sideBarId, setSideBarId] = useState<number>(0)

    useEffect(() => {
        const pathname = window.location.pathname;
        for (let i = 0; i < Links.length; i++) {
            if (Links[i] === pathname)
                setSideBarId(i)
        }
    }, [])
    return (
        <>
            <nav className="flex h-[10vh] p-2 justify-between items-center">
                {
                    Sidebar.map((item: string, idx: number) => (
                        <NavLink
                            to={Links[idx]}
                            key={idx}
                            onClick={() => setSideBarId(idx)}>
                            <img
                                src={sideBarId === idx ? HoverSidebar[idx] : item}
                                alt="Sidebar"
                            />
                        </NavLink>
                    ))
                }

            </nav>
        </>
    );
};

export default Footer

//Git