import { type ReactNode, useMemo, useReducer } from 'react'
import { ThemeContext, themeReducer, ThemeState, useSelector } from '../context/theme'

const StoreProvider = ({ children, initialState }: { children: ReactNode; initialState: ThemeState }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  const value = useMemo(() => ({ state, dispatch, useSelector }), [state, dispatch])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default StoreProvider
