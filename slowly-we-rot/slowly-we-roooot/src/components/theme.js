import { createTheme } from "@material-ui/core"
import { deepOrange } from "@material-ui/core/colors";


const theme = createTheme({ 
        palette: {
          primary: {
            main: '#000',
          },
          secondary: {
            main: '#b9f6ca',
          },
        },
        typography: {
            fontFamily: 'Metal Mania'
        }
}
)

export default theme;