import type { ThemeBuilderProps } from './ThemeBuilder.style'
import StoreProvider from '../../providers/StoreProvider'
import MuiThemeProvider from '../../providers/MuiThemeProvider'
import RootView from '../containers/RootView'

export const ThemeBuilder = (props: ThemeBuilderProps): React.ReactElement => {
  return (
    <StoreProvider initialState={props.colorSchemes}>
      <MuiThemeProvider>
        <RootView {...props} />
      </MuiThemeProvider>
    </StoreProvider>
  )
}
