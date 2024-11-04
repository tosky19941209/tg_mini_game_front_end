export type UtilContextType = {
    sidebarNumber: number,
    setSidebarNumber: (id: number) => void;
    user: string | undefined,
    setUser: (id: string) => void;
    refresh: string,
    setRefresh: (id: string) => void;
    freetokenBalance: number,
    setFreeTokenBalance: (id: number) => void;
    todayClaimAmount: number,
    setTodayClaimAmount: (id: number) => void;
    isDailyClaimed: boolean,
    setIsDailyClaimed: (id: boolean) => void;
    tgUserId: number | undefined;
    setTgUserId: (id: number) => void;
    realName: string;

}