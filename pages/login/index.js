import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
	Box,
	Button,
	Hidden,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

/**
 * Default credential for login
 */
const defaultCredential = {
	email: 'admin@gmail.com',
	password: 'Password@1',
};

function Login() {
	/**
	 * all state defined here
	 */
	const [credential, setCredential] = useState({
		email: 'admin@gmail.com',
		password: 'Password@1',
	});
	const [showPassword, setShowPassword] = useState(false);
	const [errorObj, setErrorObj] = useState({});
	const [loading, setLoading] = useState(false);

	const { enqueueSnackbar } = useSnackbar();
	const Router = useRouter();

	/**
	 * this function will change the current state
	 */
	const handleCredentialChange = (event, type) => {
		setCredential((_credential) => {
			if (type === 'email') {
				_credential.email = event?.target?.value;
				return { ..._credential };
			}
			if (type === 'password') {
				_credential.password = event?.target?.value;
				return { ..._credential };
			}
		});
	};

	/**
	 * Show password toggle
	 */
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	/**
	 * Validation and Login
	 */
	const handleLogin = () => {
		let returned = false;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(credential.email)) {
			returned = true;
			setErrorObj((_credential) => {
				_credential.email = 'Please enter a valid email address';
				return { ..._credential };
			});
		} else {
			setErrorObj((_credential) => {
				_credential.email = '';
				return { ..._credential };
			});
		}
		if (credential.password.length < 6) {
			returned = true;
			setErrorObj((_credential) => {
				_credential.password = 'Password must be at least 6 characters long';
				return { ..._credential };
			});
		} else {
			setErrorObj((_credential) => {
				_credential.password = '';
				return { ..._credential };
			});
		}
		if (returned) return;
		setErrorObj({});
		if (credential?.email !== defaultCredential?.email) {
			enqueueSnackbar('Email does not match. Try again.', {
				variant: 'error',
			});
		} else if (credential?.password !== defaultCredential?.password) {
			enqueueSnackbar('Password does not match. Try again.', {
				variant: 'error',
			});
		} else {
			enqueueSnackbar('Login Successfull. Please wait...', {
				variant: 'success',
			});
			Router.push('/home');
		}
	};

	return (
		<Stack
			direction={'row'}
			sx={{
				height: '100vh',
			}}
		>
			<Hidden smDown>
				<Stack
					sx={{
						justifyContent: 'flex-end',
						alignItems: 'end',
						backgroundColor: '#F7E2FF',
						width: '50%',
					}}
				>
					<Box
						sx={{
							height: '100%',
							width: '100%',
							position: 'relative',
						}}
					>
						<img
							src='/images/login-bgimage.svg'
							alt='login-img'
							style={{
								width: '100%',
								height: '100%',
								position: 'absolute',
								top: '0',
								left: 0,
								objectFit: 'cover',
							}}
						/>
					</Box>
				</Stack>
			</Hidden>
			<Stack
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					width: { xs: '100%', sm: '50%' },
				}}
			>
				<Stack
					sx={{
						width: { xs: '90%', md: '70%' },
					}}
				>
					<Hidden smUp>
						<Stack
							justifyContent={'center'}
							sx={{
								width: '100%',
								my: 3,
							}}
						>
							<img src='/logo/logo.svg' height={'120px'} />
						</Stack>
					</Hidden>
					<Typography color={'primary'} variant='h4' sx={{ fontWeight: 800 }}>
						Login
					</Typography>
					<Box mt={1} />
					<Typography
						variant='body2'
						sx={{
							color: '#494949',
							fontSize: '18px',
							fontWeight: 400,
						}}
					>
						Sign in to continue
					</Typography>
					<Box mt={3.5}>
						<Typography
							variant='subtitle1'
							sx={{
								color: '#939393',
								fontSize: '18px',
								fontWeight: 400,
							}}
						>
							Your Email
						</Typography>
						<TextField
							autoFocus
							color='primary'
							placeholder='Enter your email here'
							error={errorObj?.email}
							fullWidth
							helperText={errorObj?.email}
							onChange={(e) => handleCredentialChange(e, 'email')}
							type={'email'}
							value={credential?.email}
							variant='outlined'
						/>
					</Box>
					<Box mt={2}>
						<Typography
							variant='subtitle1'
							sx={{
								color: '#939393',
								fontSize: '18px',
								fontWeight: 400,
							}}
						>
							Your Password
						</Typography>
						<TextField
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton onClick={handleClickShowPassword}>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
							color={'primary'}
							placeholder='Enter your password here'
							error={errorObj?.password}
							fullWidth
							helperText={errorObj?.password}
							onChange={(e) => handleCredentialChange(e, 'password')}
							type={showPassword ? 'text' : 'password'}
							value={credential?.password}
							variant='outlined'
						/>
					</Box>
					<Typography
						variant='caption'
						sx={{
							color: '#939393',
							fontSize: '14px',
							fontWeight: 400,
						}}
					>
						By creating an account or logging in, you agree to our Terms &
						Privacy Policy.
					</Typography>
					<Stack mt={4}>
						<Button
							color='primary'
							// disabled={loading}
							onClick={handleLogin}
							sx={{ height: 50, minWidth: 150, fontSize: 17, color: 'white' }}
							variant={'contained'}
						>
							{/* {loading ? <CircularProgress size={24} /> : 'Sign In'} */}
							Login
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}

export default Login;
