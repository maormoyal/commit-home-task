import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run user-interface:serve',
        production: 'nx run user-interface:preview',
      },
      ciWebServerCommand: 'nx run user-interface:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
