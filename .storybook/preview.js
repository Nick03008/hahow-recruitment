import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  Laptop: {
    name: 'Laptop',
    styles: {
      width: '1440px',
      height: '700px',
    },
  },
  LaptopNoFullScreen: {
    name: 'Laptop (when no full screen)',
    styles: {
      width: '1440px',
      height: '600px',
    },
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1960px',
      height: '800px',
    },
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
     ...customViewports,
   },
  }
}