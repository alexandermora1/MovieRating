import { Theme, ThemeProvider, createTheme } from "@mui/material";
import { create } from 'zustand';
import React from "react";


declare module "@mui/material/styles" {
    interface Palette {
        darkgrey: Palette["primary"];
    }
    
    interface PaletteOptions {
        darkgray?: PaletteOptions["primary"];
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        darkgray: true;
    }
}

let defaultTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#fff",
        },
        darkgray: {
            main: "#646464",
            contrastText: "#fff",
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

type ColorMode = "light" | "dark";

type ThemeState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    setMode: (colorMode: ColorMode) => void;
    updateColors: (primary: string | undefined, secondary: string | undefined, success: string | undefined) => void;
};

export const themeStore = create<ThemeState>((setState) => ({
    theme: defaultTheme,
    setTheme: (theme) => setState((state) => ({ ...state, theme })),
    setMode: (colorMode) => {
        const currentState = themeStore.getState();
        const updatedTheme = createTheme({
            ...currentState.theme,
            palette: {
                ...currentState.theme.palette,
                background: {
                    default: colorMode === "light" ? "#fff" : "#000",
                },
                text: {
                    primary: colorMode === "light" ? "#000" : "#fff",
                },
                mode: colorMode,
                },    
        });
        
        themeStore.setState({ ...currentState, theme: updatedTheme });
    },
    updateColors: (primary, secondary, success) => {
        const currentState = themeStore.getState();
        const updatedTheme = createTheme({
            ...currentState.theme,
            palette: {
                ...currentState.theme.palette,
                primary: {
                    main: primary ? primary : currentState.theme.palette.primary.main,
                },
                secondary: {
                    main: secondary ? secondary : currentState.theme.palette.secondary.main,
                },
                success: {
                    main: success ? success : currentState.theme.palette.success.main,
                },
            },
        });

        themeStore.setState({ ...currentState, theme: updatedTheme });
    },
}));



interface Props { children: JSX.Element | JSX.Element[] }

const BaseTheme = ({ children }: Props) => {

    const [theme, setTheme] = React.useState(themeStore.getState().theme);

    return (
        <ThemeProvider theme={defaultTheme}>
            {children}
        </ThemeProvider>
    )
}


export { BaseTheme };