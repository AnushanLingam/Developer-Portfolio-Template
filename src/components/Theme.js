import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { red, indigo, blue} from '@material-ui/core/colors/';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: indigo,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
        type: 'light', // Switching the dark mode on is a single property value change.
    },
    typography: { useNextVariants: true },
});

const appTheme = (CustomComponent) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CustomComponent />
        </MuiThemeProvider>
    )
}

export default appTheme;