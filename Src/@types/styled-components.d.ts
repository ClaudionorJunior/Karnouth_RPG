import { Colors } from '~/Hooks/ContextProvider';

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {}
}
