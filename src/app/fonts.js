// Create a fonts.js file in your project
// Place this in a location like /app/fonts.js or /lib/fonts.js

import localFont from 'next/font/local';

// Load each font variant
export const proximaNovaAltThin = localFont({
  src: '../../public/fonts/ProximaNovaAltThin.otf',
  variable: '--font-proxima-nova-alt-thin',
  display: 'swap',
});

export const proximaNovaBold = localFont({
  src: '../../public/fonts/ProximaNovaBold.otf',
  variable: '--font-proxima-nova-bold',
  display: 'swap',
});

export const proximaNovaSemibold = localFont({
  src: '../../public/fonts/ProximaNovaSemibold.otf',
  variable: '--font-proxima-nova-semibold',
  display: 'swap',
});

export const proximaNovaThin = localFont({
  src: '../../public/fonts/ProximaNovaThin.otf',
  variable: '--font-proxima-nova-thin',
  display: 'swap',
});

export const proximaNovaRegular = localFont({
  src: '../../public/fonts/ProximaNova-Regular.otf',
  variable: '--font-proxima-nova-regular',
  display: 'swap',
});