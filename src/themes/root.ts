export const theme = {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        100: "#E2E2E2",
        200: "#A9A9A9",
        300: "#808080",
        500: "#696969",
        600: "#4F4F4F",
        700: "#363636",
        800: "#1C1C1C",
      },
      yellow: {
        500: "#F5B400",
        600: "#FF7B00",
      },
      red: {
        300: "#A72D58",
        400: "#8D0D43",
        500: "#FF1425",
      },
      green: {
        400: "#4B971C",
        500: "#00FF00",
      },
      blue: {
        400: "#3158A6",
        600: "#07438D",
      },
    },
  };
  
  export const backgroundColors = {
    primary: theme.colors.gray[100],
    secondary: theme.colors.gray[600],
  };
  
  export const textColors = {
    primary: theme.colors.black,
    secondary: theme.colors.white,
    gray: theme.colors.gray[700],
  };
  
  export const textSizes = {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  };
  
  export const buttonColors = {
    primary: theme.colors.blue[600],
    secondary: theme.colors.red[300],
    success: theme.colors.green[500],
    error: theme.colors.red[500],
    info: theme.colors.blue[400],
  };