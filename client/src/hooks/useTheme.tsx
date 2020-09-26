import React, {useState, useEffect, FunctionComponent} from 'react';

interface Theme {
    '--theme-main-color': string;
    '--theme-secondary-color': string;
    '--theme-hover-color': string;
}

const blackAndWhite: Theme = {
    "--theme-main-color": "black",
    "--theme-secondary-color": "grey",
    "--theme-hover-color": "#DDDDDD"
}

const colorful: Theme = {
    "--theme-main-color": "#0036e2",
    "--theme-secondary-color": "#ffcd88",
    "--theme-hover-color": "#001c6d"
}

export const themes = {
    blackAndWhite,
    colorful
}

export function useTheme(theme: keyof typeof themes) {
    const defaultTheme = blackAndWhite;
    const [actualTheme, setTheme] = useState(defaultTheme);

    // This is *really* weird code, but it simulates that on app startup the theme takes a while to load, and afterwards
    // theme changes are immediate
    useEffect(() => {
        setTimeout(() => {
            setTheme(themes[theme]);
        }, 1500)
    }, [])
    useEffect(() => {
        setTheme(themes[theme]);
    }, [theme])

    return actualTheme;
}

type ThemeWrapperType = FunctionComponent<{ name: keyof typeof themes }>;
const ThemeWrapper: ThemeWrapperType = (props) => {
    const theme = useTheme(props.name);
    const variablesValues = {...theme} as React.CSSProperties;
    return (
        <div style={variablesValues}>
            {props.children}
        </div>
    )
}
export default ThemeWrapper;
