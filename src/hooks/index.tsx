import { useContext } from 'react';

import UtilContext from "../contexts/index"


export const useUtilContext = () => {
  const context = useContext(UtilContext);
  if (!context) throw new Error("context must be use inside provider");
  return context
}

