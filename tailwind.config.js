/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'10': '#eae5ff',
  				'20': '#d9d8ff',
  				'30': '#c9cafe',
  				'40': '#b8bdfd',
  				'50': '#a8b0fb',
  				'60': '#97a3f9',
  				'70': '#8796f7',
  				'80': '#7689f5',
  				'90': '#667cf3',
  				'100': '#5570F1',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'10': '#FFF9F7',
  				'20': '#FFF6F3',
  				'30': '#FFF1EE',
  				'40': '#FFECEB',
  				'50': '#FFE7DD',
  				'60': '#FFE2CB',
  				'70': '#FFDCB8',
  				'80': '#FFD7B6',
  				'90': '#FFD1A3',
  				'100': '#FFCC91',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			black: {
  				'10': '#A3A3A4',
  				'20': '#949596',
  				'30': '#858689',
  				'40': '#76777A',
  				'50': '#67686A',
  				'60': '#58595C',
  				'70': '#494A4D',
  				'80': '#3A3B3E',
  				'90': '#2B2C30',
  				'100': '#1C1D22'
  			},
  			actions: {
  				go: '#519C68',
  				stop: '#CC5F5F'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			inter: ['Inter', 'sans-serif'],
  			poppins: ['Poppins', 'sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}