import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../utils/Themes';
import { BrowserRouter } from 'react-router-dom';

export const withTheme = (Story, context) => {
  const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </ThemeProvider>
  );
};