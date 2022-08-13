import React from 'react';
// import {Platform, StatusBar} from 'react-native';
import {usePersistedState} from '@hooks/usePersistedState';
import {PaperProvider} from '@ui/library';
import {themeDark, themeLight} from '@ui/library/theme';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => undefined,
});

type PropTypes = {
  children: React.ReactNode;
};

export default function ThemeProvider({children}: PropTypes) {
  const [theme, setTheme] = usePersistedState<Theme>('theme', 'dark');

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <PaperProvider theme={theme === 'dark' ? themeDark : themeLight}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
}

export function useToggleTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
