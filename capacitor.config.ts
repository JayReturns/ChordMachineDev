import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.dhbw.chordmachine',
  appName: 'chord-machine-app',
  webDir: 'dist/chord-machine-app',
  server: {
    androidScheme: 'https',
    cleartext: true,
    url: "http://192.168.178.42:8100",
  },
  plugins: {
    CapacitorSQLite: {
      androidIsEncryption: true,
      androidBiometric: {
        biometricAuth: false,
        biometricTitle: "Biometric login for capacitor sqlite",
        biometricSubTitle: "Log in using your biometric"
      }
    }
  }
};

export default config;
