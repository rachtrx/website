"use client"

import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      // fonts: {
      //   body: { value: "Inter, sans-serif" },
      //   heading: { value: ["Roboto Mono", "sans-serif"] },
      // },
    },
    semanticTokens: {
      colors: {
				// pageBg: {
				// 	value: { base: "{colors.background}", _dark: "{colors.darkbackground}" },
				// },
				focusRing: {
					value: { base: "{colors.red.500}", _dark: "{colors.red.500}" },
				},
				highlightBg: {
					value: { base: "{colors.red}", _dark: "{colors.darkred}" }
				},
        danger: {
          value: { base: "{colors.red}", _dark: "{colors.darkred}" },
        },
        success: {
          value: { base: "{colors.green}", _dark: "{colors.darkgreen}" },
        },
        bg: {
          DEFAULT: {
            value: { _light: '{colors.white}', _dark: '{colors.black}' },
          },
          subtle: {
            value: { _light: '{colors.gray.50}', _dark: '{colors.gray.950}' },
          },
          muted: {
            value: { _light: '{colors.gray.100}', _dark: '{colors.gray.900}' },
          },
          emphasized: {
            value: { _light: '{colors.gray.200}', _dark: '{colors.gray.800}' },
          },
          inverted: {
            value: { _light: '{colors.black}', _dark: '{colors.white}' },
          },
          panel: {
            value: { _light: '{colors.white}', _dark: '{colors.gray.950}' },
          },
          error: {
            value: { _light: '{colors.red.50}', _dark: '{colors.red.950}' },
          },
          warning: {
            value: {
              _light: '{colors.orange.50}',
              _dark: '{colors.orange.950}',
            },
          },
          success: {
            value: { _light: '{colors.green.50}', _dark: '{colors.green.950}' },
          },
          info: {
            value: { _light: '{colors.blue.50}', _dark: '{colors.blue.950}' },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: '{colors.black}', _dark: '{colors.white}' },
          },
          muted: {
            value: { _light: '{colors.gray.600}', _dark: '{colors.gray.400}' },
          },
          subtle: {
            value: { _light: '{colors.gray.400}', _dark: '{colors.gray.500}' },
          },
          inverted: {
            value: { _light: '{colors.gray.50}', _dark: '{colors.black}' },
          },
          error: {
            value: { _light: '{colors.red.500}', _dark: '{colors.red.400}' },
          },
        }
      },
    },
		breakpoints: {
			sm: "320px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		}
  },
  globalCss: {
    '@keyframes textSlideIn': {
      '0%': { clipPath: 'inset(0 100% 0 0)' },
      '100%': { clipPath: 'inset(0 0 0 0)' },
    },
    'svg, path, .icon-animate path': {
      strokeWidth: 2,
      // strokeDasharray: 10000,
      // strokeDashoffset: 10000,
      animation: '4s ease-in-out forwards',
    },
    'h1, h2, h3, h4, h5, h6, p, span, a, strong, li, div': {
      animation: 'textSlideIn 0.5s ease-in-out forwards',
    },
    'strong': {
      color: 'fg'
    }
    // '.chakra-badge': {
    //   padding: '2px'
    // }
  }
})

export default createSystem(defaultConfig, config)

