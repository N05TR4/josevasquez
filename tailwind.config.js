module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // "Petrol & Amber" — source-of-truth tokens
        ink: '#0E1A1A',        // near-black, green undertone
        petrol: {
          DEFAULT: '#0D3B36',  // deep teal — primary brand
          light: '#12514A',
          dark: '#082825',
        },
        amber: {
          DEFAULT: '#F2A900',  // signal accent — the one bold color
          soft: '#F7C04A',
        },
        paper: '#FAF8F3',      // warm light bg
        mist: '#5B6B68',       // muted secondary text
        line: {
          DEFAULT: '#1E2E2B',  // hairline on dark
          light: '#E4E0D4',    // hairline on paper
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
