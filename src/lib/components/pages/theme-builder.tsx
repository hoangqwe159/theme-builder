export interface ThemeBuilderProps {
  onClose: () => void
  onExport: () => void
}

export const ThemeBuilder = (props: ThemeBuilderProps): React.ReactElement => {
  return (
    <div>
      <h1>ThemeBuilder</h1>
    </div>
  )
}
