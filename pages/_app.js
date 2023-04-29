import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from '../src/utils/theme';
import { SnackbarProvider } from 'notistack';
import { Grow } from '@mui/material';

function MyApp({ Component, pageProps }) {
	return (
		<SnackbarProvider
			maxSnack={3}
			preventDuplicate
      autoHideDuration= {2000}
      // disableWindowBlurListene={true}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			TransitionComponent={Grow}
		>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</SnackbarProvider>
	);
}

export default MyApp;
