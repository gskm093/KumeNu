import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

function MobileTopBar() {
	/**
	 * all state defined here
	 */
	const [open, setOpen] = useState(false);
	const [selectedSection, setSelectedSection] = useState(0);

	const Router = useRouter();
	const { enqueueSnackbar } = useSnackbar();

	return (
		<>
			<Stack direction={'row'} spacing={2}>
				<IconButton onClick={() => setOpen(true)}>
					<MenuIcon />
				</IconButton>
				<Stack direction={'row'} spacing={2} alignItems={'center'}>
					<Box>
						<img src='/icons/kemnu-icon.svg' height={'50px'} />
					</Box>
					<Stack>
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
					</Stack>
				</Stack>
			</Stack>
			<Drawer anchor={'left'} open={open} onClose={() => setOpen(false)}>
				<Stack
					alignItems={'center'}
					justifyContent={'space-between'}
					sx={{
						height: '100vh',
					}}
				>
					<Stack
						spacing={2}
						alignItems={'center'}
						justifyContent={'center'}
						sx={{
							width: '100px',
						}}
					>
						<IconButton onClick={() => setSelectedSection(0)}>
							<WidgetsIcon
								color={selectedSection === 0 ? 'primary' : '#BDBDBD'}
								sx={{
									fontSize: '40px',
								}}
							/>
						</IconButton>
						<IconButton onClick={() => setSelectedSection(1)}>
							<TextsmsRoundedIcon
								color={selectedSection === 1 ? 'primary' : '#BDBDBD'}
								sx={{
									fontSize: '40px',
								}}
							/>
						</IconButton>
						<IconButton onClick={() => setSelectedSection(2)}>
							<PeopleRoundedIcon
								color={selectedSection === 2 ? 'primary' : '#BDBDBD'}
								sx={{
									fontSize: '40px',
								}}
							/>
						</IconButton>
						<IconButton onClick={() => setSelectedSection(3)}>
							<NotificationsRoundedIcon
								color={selectedSection === 3 ? 'primary' : '#BDBDBD'}
								sx={{
									fontSize: '40px',
								}}
							/>
						</IconButton>
						<IconButton onClick={() => setSelectedSection(4)}>
							<SettingsIcon
								color={selectedSection === 4 ? 'primary' : '#BDBDBD'}
								sx={{
									fontSize: '40px',
								}}
							/>
						</IconButton>
					</Stack>
					<IconButton
						onClick={() => {
							Router.push('/');
							enqueueSnackbar('Loged out. Redirecting to login page...', {
								variant: 'success',
							});
							setSelectedSection(5);
						}}
					>
						<LogoutSharpIcon
							color={selectedSection === 5 ? 'primary' : '#BDBDBD'}
							sx={{
								fontSize: '40px',
								transform: 'scaleX(-1)',
							}}
						/>
					</IconButton>
				</Stack>
			</Drawer>
		</>
	);
}

export default MobileTopBar;
