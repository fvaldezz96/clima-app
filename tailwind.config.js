module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Manrope, Arial, sans-serif',
      },
    },
  },
  plugins: [
    require('tailwindcss-animatecss')({
      classes: [
        'animate__animated',
        'animate__fadeIn',
        'animate__bounceIn',
        'animate__lightSpeedOut',
      ],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
};
