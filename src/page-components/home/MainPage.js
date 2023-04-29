import {
	Box,
	Divider,
	Drawer,
	Grid,
	Hidden,
	Stack,
} from '@mui/material';
import { categoryList, posts } from '../../data/FakeData.js';
import { useEffect, useState } from 'react';
import CustomCard from './CustomCards.js';
import Loader from '../../components/Loader.js';
import Slidebar from '../../components/Sidebar.js';
import DataNotFound from '../../components/DataNotFound.js';
import CategoryList from './CategoryList.js';
import Profile from '../profile/Profile.js';

function MainPage() {
	/**
	 * all state defined here
	 */
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [loading, setLoading] = useState(true);
	let [filteredPost, setFilteredPost] = useState([]);
	const [open, setOpen] = useState(false);
	const [profileDetails, setProfileDetails] = useState({ name: '', image: '' });

	/**
	 * When filter is selected at time it will filter and reload 
	 */
	useEffect(() => {
		const filterPosts = posts.filter((eachPost) => {
			if (selectedCategory === 'All') return eachPost;
			else if (selectedCategory === eachPost?.category) return eachPost;
		});
		setFilteredPost(filterPosts);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [selectedCategory]);

	return (
		<>
			<Stack direction={'row'} width={'100%'}>
				<Hidden smDown>
					<Slidebar />
				</Hidden>
				<Stack
					sx={{
						width: { xs: '100%', sm: '90%', md: '93%' },
						height: '100vh',
						position: 'relative',
						left: { xs: 0, sm: 100 },
						top: { xs: 0, sm: 100 },
					}}
				>
					<Box
						sx={{
							mt: { xs: 3, sm: 5 },
							pl: { xs: 1, sm: 5 },
							mb: 2,
							width: '100%',
						}}
					>
						<Stack direction={'row'}>
							<CategoryList
								list={categoryList}
								selectedCategory={selectedCategory}
								activateChip={(each) => {
									setLoading(true);
									setSelectedCategory(each);
								}}
							/>
						</Stack>
					</Box>
					<Stack>
						<Divider sx={{ color: 'black' }} />
					</Stack>
					<Box>
						<Grid container>
							{loading ? (
								<Loader height={'50vh'} />
							) : filteredPost.length === 0 ? (
								<DataNotFound />
							) : (
								filteredPost?.map((post) => {
									return (
										<Grid item md={open ? 12 : 6} sx={{}}>
											<Box
												px={open ? 50 : 0}
												sx={{
													width: '99%',
													pl: { xs: 0, md: 5 },
													py: { xs: 1, sm: 2 },
												}}
											>
												<CustomCard
													post={post}
													setOpen={(value) => {
														setOpen(value);
													}}
													setProfile={setProfileDetails}
												/>
											</Box>
										</Grid>
									);
								})
							)}
						</Grid>
					</Box>
					<Drawer
						sx={{
							width: { xs: '100%', sm: 400 },
							flexShrink: 0,
							'& .MuiDrawer-paper': {
								width: { xs: '100%', sm: 400 },
								transition: '1s',
							},
						}}
						variant='persistent'
						anchor='right'
						open={open}
					>
						<Profile handleDrawerClose={(value) => setOpen(value)} profileDetails={profileDetails}/>
					</Drawer>
				</Stack>
			</Stack>
		</>
	);
}

export default MainPage;
