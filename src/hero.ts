import { heroui, type ThemeColors } from '@heroui/react';

export default heroui({
  themes: {
    light: {
      colors: {
        background: '#f9f9f9',
        muted: '#71717a',
        'muted-foreground': '#71717a',
      } as Partial<ThemeColors> & { muted: string; 'muted-foreground': string },
    },
    dark: {
      colors: {
        muted: '#909090',
        'muted-foreground': '#a1a1aa',
      } as Partial<ThemeColors> & { muted: string; 'muted-foreground': string },
    },
  },
});
