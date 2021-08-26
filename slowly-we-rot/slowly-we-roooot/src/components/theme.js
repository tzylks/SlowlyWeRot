import { createTheme } from "@material-ui/core"



const theme = createTheme({ 
        palette: {
          primary: {
            main: '#000',
          },
          secondary: {
            main: 'rgba(185, 246, 202, 1)',
          },
        },
        typography: {
            fontFamily: 'Metal Mania'
        },       
}
)

export default theme;