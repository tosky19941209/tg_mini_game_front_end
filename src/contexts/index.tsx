import {
    createContext,
} from "react"

import { UtilContextType } from "../types/index"

const UtilContext = createContext<UtilContextType | null>(null)

export default UtilContext