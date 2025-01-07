import type { ThemeBuilderProps } from './ThemeBuilder.style'
import StoreProvider from '../../providers/StoreProvider'
import MuiThemeProvider from '../../providers/MuiThemeProvider'
import RootView from '../containers/RootView'
import { DEFAULT_SCHEME } from '../../context/theme'

export const ThemeBuilder = (props: ThemeBuilderProps): React.ReactElement => {
  return (
    <StoreProvider initialState={props.colorSchemes ?? DEFAULT_SCHEME}>
      <MuiThemeProvider>
        <RootView {...props} />
      </MuiThemeProvider>
    </StoreProvider>
  )
}
