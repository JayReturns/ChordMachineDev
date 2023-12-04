import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.dhbw.chordmachine',
  appName: 'chord-machine-app',
  webDir: 'dist/chord-machine-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
