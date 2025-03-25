/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          text: {
            primary: '#0F172A',
            secondary: '#0F172AA3', // 64%
            tertiary: '#0F172A7A', // 48%
            disabled: '#0F172A52', // 32%
            placeholder: '#0F172A7A' // 48%
          },
          icon: {
            primary: '#0F172A',
            secondary: '#0F172AA3', // 64%
            tertiary: '#0F172A7A', // 48%
            disabled: '#0F172A52' // 32%
          },
          focus: {
            DEFAULT: '#94A3B8',
          },
          cta: {
            DEFAULT: '#3A1780',
            hover: '#6241A3',
            active: '#3A1780',
            contrast: '#FFFFFF'
          },
          primary: {
            DEFAULT: '#0F172A',
            hover: '#1E293B',
            active: '#0F172A',
            contrast: '#FFFFFF'
          },
          secondary: {
            DEFAULT: '#FFFFFF',
            hover: '#F1F5F9',
            active: '#FFFFFF',
            contrast: '#0F172A'
          },
          border: {
            DEFAULT: '#CBD5E1',
            hover: '#94A3B8',
            active: '#CBD5E1'
          },
          ghost: {
            DEFAULT: 'transparent',
            hover: '#F1F5F9',
            active: '#FFFFFF',
            contrast: '#0F172A'
          },
          danger: {
            DEFAULT: '#EF4444',
            hover: '#DC2626',
            active: '#EF4444',
            contrast: '#FFFFFF'
          },
          paper: {
            DEFAULT: '#FFFFFF',
            hover: '#F1F5F9',
            active: '#F1F5F9',
            disable: '#FFFFFF7A', // 48%
            contrast: '#FFFFFF'
          }
        },
        opacity: {
          '32': '0.32',
          '48': '0.48',
          '64': '0.64',
        },
        fontFamily: {
          'sans': ['Instrument Sans', 'sans-serif'],
        },
        letterSpacing: {
          'tighter-1': '-0.01em',
        },
      },
    },
    plugins: [
      function({ addUtilities }) {
        addUtilities({
          '.button-text': {
            'font-family': 'Instrument Sans, sans-serif',
            'font-weight': '500',
            'font-size': '13px',
            'line-height': '16px'
          },
          '.text-p-small': {
            'font-family': 'Instrument Sans, sans-serif',
            'font-weight': '400',
            'font-size': '13px',
            'line-height': '16px',
            'letter-spacing': '-0.01em'
          },
          '.text-p-small-semibold': {
            'font-family': 'Instrument Sans, sans-serif',
            'font-weight': '500',
            'font-size': '13px',
            'line-height': '16px',
            'letter-spacing': '-0.01em'
          }
        })
      }
    ],
  };
  