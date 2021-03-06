import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      dark: string;
      orange: string;
      red: string;
    };
  }
}
