import { CircularProgress, Stack, Typography } from '@mui/material';

function Loader({ height = '100vh' }) {
	return (
		<Stack
			justifyContent={'center'}
			alignItems={'center'}
			sx={{
				height: `${height}`,
				width: '100%',
			}}
		>
			{height === '100vh' ? (
				<Stack
					justifyContent={'center'}
					sx={{
						width: '100%',
						my: 3,
					}}
				>
					<img src='/logo/logo.svg' height={'120px'} />
				</Stack>
			) : (
				''
			)}
			<CircularProgress
				size={25}
				sx={{
					color: 'primary',
				}}
			/>
			<Typography sx={{ mt: 3, fontSize: 24 }} color={'primary'}>
				Please Wait
			</Typography>
			<Typography sx={{ mt: 1 }} color={'primary'}>
				Loading your information...
			</Typography>
		</Stack>
	);
}

export default Loader;
