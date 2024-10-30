import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom"
import GamePlay from "../pages/gamePlay";
import GameTask from "../pages/gameTask";
import GameHistory from "../pages/gameHistory";
import GameWallet from "../pages/gameWallet";
import GameInvite from "../pages/gameInvite";
import Layout from "../layout";

const Routers = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element:
                <Layout>
                    <GamePlay />
                </Layout>

        },
        {
            path: "/game-task",
            element:
                <Layout >
                    <GameTask />
                </Layout>
        },
        {
            path: "/game-history",
            element:
                <Layout>
                    <GameHistory />
                </Layout>
        },
        {
            path: "/game-wallet",
            element:
                <Layout >
                    <GameWallet />
                </Layout>
        },
        {
            path: "/game-invite",
            element:
                <Layout>
                    <GameInvite />
                </Layout>
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Routers

