import { Box, Chip, Stack } from '@mui/material';

function CategoryList({ list, selectedCategory, activateChip }) {
	return (
		<>
			<Box
				sx={{
					width: '100%',
					overflowX: 'auto',
					scrollBehavior: 'smooth',
				}}
			>
				<Stack
					direction={'row'}
					sx={{
						width: { xs: '600px', sm: '100%' },
						py: 1.5,
					}}
					spacing={2}
				>
					{list?.map((each, index) => {
						return (
							<Chip
								label={each}
								variant={each === selectedCategory ? 'filled' : 'outlined'}
								color='primary'
								backgroundColor={
									each === selectedCategory ? '#4B1C7C' : '#F7E2FF'
								}
								sx={{
									py: 2,
									px: 1,
								}}
								onClick={() => activateChip(each)}
							/>
						);
					})}
				</Stack>
			</Box>
		</>
	);
}

export default CategoryList;
