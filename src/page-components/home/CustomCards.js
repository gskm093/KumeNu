import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
function CustomCard({ post, setOpen, setProfile }) {
	return (
		<Box
			sx={{
				p: 2,
				border: '1px solid #DCDCDC',
				borderRadius: '2px',
			}}
		>
			<CardHeader
				avatar={
					<Avatar
						src={post?.userDp}
						aria-label='user'
						sx={{
							height: '40px',
						}}
						onClick={() => {
							setProfile({ name: post?.postedBy, image: post?.userDp });
							setOpen(true);
						}}
					></Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreHorizIcon />
					</IconButton>
				}
				title={
					<Stack direction={'row'} alignItems={'center'}>
						<Typography
							variant='body1'
							sx={{ fontWeight: 600, fontSize: { xs: '10px', sm: '16px' } }}
						>
							{post?.postedBy}
						</Typography>
						<Stack
							sx={{
								pl: 1.5,
								height: '100%',
							}}
						>
							<img
								src='/icons/forward.png'
								alt='forward-icon'
								height={'25px'}
								width={'25px'}
							/>
						</Stack>
						<Typography
							variant='h6'
							color={'primary'}
							sx={{
								pl: 1.5,
								fontWeight: 600,
								fontSize: { xs: '12px', sm: '16px' },
							}}
						>
							{post?.category}
						</Typography>
					</Stack>
				}
				subheader={post?.postedAt}
			/>

			<Card sx={{ pl: 1.5 }}>
				<CardContent sx={{ mt: -2 }}>
					<Typography
						variant='body2'
						color='#6B6B6B'
						sx={{
							fontSize: { xs: '12px', sm: '16px' },
						}}
					>
						{post?.caption}
					</Typography>
				</CardContent>
				<CardMedia
					component='img'
					height='270px'
					image='/images/post-img.png'
					alt='post'
					sx={{
						borderRadius: '5px',
					}}
				/>
			</Card>
			<Stack
				direction={'row'}
				justifyContent={'space-between'}
				alignItems={'center'}
			>
				<Stack direction={'row'}>
					<IconButton>
						<ExpandLessIcon
							sx={{
								color: '#4CA441',
								fontSize: { xs: '30px', sm: '60px' },
							}}
						/>
						<Typography
							color='#4CA441'
							sx={{
								fontSize: { xs: '12px', sm: '16px' },
							}}
						>
							{post?.vote}
						</Typography>
					</IconButton>
					<IconButton>
						<ExpandMoreIcon
							sx={{
								fontSize: { xs: '30px', sm: '60px' },
							}}
						/>
					</IconButton>
					<IconButton>
						<CommentRoundedIcon
							sx={{
								fontSize: { xs: '25px', sm: '35px' },
							}}
						/>
						<Typography
							sx={{
								fontSize: { xs: '12px', sm: '16px' },
							}}
						>
							{post?.vote}
						</Typography>
					</IconButton>
				</Stack>
				<Box>
					<IconButton>
						<ShareSharpIcon
							sx={{
								fontSize: { xs: '25px', sm: '35px' },
							}}
						/>
						<Typography
							sx={{
								fontSize: { xs: '12px', sm: '16px' },
							}}
						>
							{post?.vote}
						</Typography>
					</IconButton>
				</Box>
			</Stack>
		</Box>
	);
}

export default CustomCard;
