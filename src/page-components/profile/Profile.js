import {
	Avatar,
	Box,
	Button,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { favorites } from '../../data/FakeData.js';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));

function Profile({ handleDrawerClose, profileDetails }) {
	const theme = useTheme();

	return (
		<>
			<DrawerHeader>
				<IconButton onClick={() => handleDrawerClose(false)}>
					{theme.direction === 'rtl' ? (
						<ChevronLeftIcon fontSize='30px' />
					) : (
						<ChevronRightIcon fontSize='30px' />
					)}
				</IconButton>
			</DrawerHeader>
			<Box>
				<Stack
					justifyContent={'center'}
					alignItems={'center'}
					width={'100%'}
					spacing={1}
				>
					<Box>
						<Avatar
							src={profileDetails?.image}
							aria-label='user'
							sx={{
								height: '100px',
								width: '100px',
							}}
						/>
					</Box>
					<Box>
						<Typography variant='h5' sx={{ fontWeight: 600 }}>
							{profileDetails?.name}
						</Typography>
						<Typography
							variant='subtitle2'
							sx={{
								textAlign: 'center',
								fontSize: '12px',
								color: '#B1B1B1',
							}}
						>
							Utkal University
						</Typography>
					</Box>
					<Box>
						<Typography
							variant='subtitle2'
							sx={{ textAlign: 'center', fontSize: '12px', color: '#B1B1B1' }}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
							est mattis...
						</Typography>
					</Box>
					<Button
						sx={{
							backgroundColor: '#EAF9DE',
							color: '#59832F',
						}}
					>
						View Profile
					</Button>
				</Stack>
				<Box>
					<Typography variant='h5' sx={{ pl: 2, fontWeight: 400 }}>
						Favourites
					</Typography>
					<Box>
						{favorites?.map((each) => {
							return (
								<Stack
									direction={'row'}
									alignItems={'center'}
									sx={{
										p: 2,
										mx: 2,
										border: '1px solid #DCDCDC',
										borderRadius: '5px',
									}}
								>
									<Box
										sx={{
											width: '15%',
										}}
									>
										<Avatar
											src={each?.image}
											sx={{
												height: '40px',
												width: '40px',
											}}
										/>
									</Box>
									<Stack
										justifyContent={'start'}
										alignItems={'center'}
										sx={{
											width: '75%',
										}}
									>
										<Box>
											<Typography variant='h5' sx={{ fontWeight: 400 }}>
												{each?.title}
											</Typography>
											<Typography variant='subtitle2' color='#B1B1B1'>
												{each?.subtitle}
											</Typography>
										</Box>
									</Stack>
									<Box
										sx={{
											width: '15%',
										}}
									>
										<img src='/icons/hert.png' height={'20px'} width={'20px'} />
									</Box>
								</Stack>
							);
						})}
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default Profile;
