import { Box, Hidden, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Loader from '../../src/components/Loader';
import MainPage from '../../src/page-components/home/MainPage';
import MobileTopBar from '../../src/components/MobileTopBar';

function KemnuHome() {
	/**
	 * all state defined here
	 */
	const [loading, setLoading] = useState(true);

	/**
	 * Just for feel like real time loading
	 */
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [loading]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Stack>
					<Hidden smDown>
						<Stack
							direction={'row'}
							sx={{
								width: '100%',
								position: 'fixed',
								top: 0,
								left: 0,
								backgroundColor: '#ffffff',
								zIndex: 100,
								p: 4,
							}}
						>
							<Stack alignItems={'center'} justifyContent={'center'} sx={{}}>
								<Box mt={-2}>
									<img src='/icons/kemnu-icon.svg' alt='icon' />
								</Box>
							</Stack>
							<Box sx={{ ml: 5 }}>
								<Typography
									variant='h4'
									color={'primary'}
									sx={{
										fontWeight: '700',
									}}
								>
									Kemnu
								</Typography>
								<Typography variant='subtitle2'>
									Welcome Back, <b>Admin</b>
								</Typography>
							</Box>
						</Stack>
					</Hidden>
					<Hidden smUp>
						<MobileTopBar />
					</Hidden>
					<MainPage />
				</Stack>
			)}
		</>
	);
}

export default KemnuHome;
