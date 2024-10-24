// theme/index.jsx
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Palette from './palette';
import Typography from './typography';
import CustomShadows from './shadows';
import componentsOverride from './overrides';

// Updated themes configuration with red theme
const themeConfigs = {
  default: {
    name: 'default',
    mode: 'light',
  },
  dark: {
    name: 'dark',
    mode: 'dark',
  },
  blue: {
    name: 'blue',
    mode: 'light',
    primary: {
      lighter: '#CCE3FF',
      light: '#66B2FF',
      main: '#0072F5',
      dark: '#005BC4',
      darker: '#00419E'
    },
    secondary: {
      lighter: '#D6E4FF',
      light: '#84A9FF',
      main: '#3366FF',
      dark: '#1939B7',
      darker: '#091A7A'
    }
  },
  red: {
    name: 'red',
    mode: 'light',
    primary: {
      lighter: '#FFE6E6',
      light: '#FF8F8F',
      main: '#FF3D3D',
      dark: '#E62E2E',
      darker: '#B22222'
    },
    secondary: {
      lighter: '#FFF0E6',
      light: '#FFB088',
      main: '#FF7842',
      dark: '#E65C2E',
      darker: '#B24422'
    }
  }
};

export default function ThemeCustomization({ children, currentTheme = 'default' }) {
  // Get theme configuration based on currentTheme
  const themeConfig = themeConfigs[currentTheme];
  
  // Generate theme palette based on configuration
  const theme = Palette(themeConfig.mode, themeConfig.name);
  
  const themeTypography = Typography(`'Public Sans', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440
        }
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: {
        ...theme.palette,
        mode: themeConfig.mode,
        ...(themeConfig.primary && { primary: themeConfig.primary }),
        ...(themeConfig.secondary && { secondary: themeConfig.secondary })
      },
      customShadows: themeCustomShadows,
      typography: themeTypography
    }),
    [theme, themeTypography, themeCustomShadows, themeConfig]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node,
  currentTheme: PropTypes.oneOf(['default', 'dark', 'blue', 'red'])
};