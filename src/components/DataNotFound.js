import { Stack, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function DataNotFound() {
	return (
		<Stack
			height={'500px'}
			width={'100%'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<SentimentVeryDissatisfiedIcon
				sx={{
					fontSize: '200px',
					color: '#BDBDBD',
				}}
			/>
			<Typography
				variant='h5'
				sx={{
					fontSize: '20px',
					color: '#BDBDBD',
				}}
			>
				No Data Found
			</Typography>
		</Stack>
	);
}

export default DataNotFound;
