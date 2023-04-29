import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#4B1C7C',
		},
		secondary: {
			main: '#F7E2FF',
		},
		background: {
			default: '#FFFFFF;',
		},
	},
	typography: {
		fontFamily: 'Poppins, sans-serif',
	},
});

export default theme;
