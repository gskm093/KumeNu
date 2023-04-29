import { IconButton, Stack } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

function Slidebar() {
	/**
	 * all state defined here
	 */
	const [selectedSection, setSelectedSection] = useState(0);

	const { enqueueSnackbar } = useSnackbar();
	const Router = useRouter();

	return (
		<Stack
			sx={{
				width: { sm: '10%', md: '7%' },
				height: '100vh',
				position: 'fixed',
				backgroundColor: '#ffffff',
				top: 150,
				zIndex: 100,
			}}
		>
			<Stack
				alignItems={'center'}
				justifyContent={'start'}
				sx={{
					height: '70%',
				}}
			>
				<Stack spacing={4}>
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
			</Stack>
			<Stack
				alignItems={'center'}
				justifyContent={'start'}
				sx={{
					height: '10%',
				}}
			>
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
							transform: 'scaleX(-1)',
							fontSize: '40px',
						}}
					/>
				</IconButton>
			</Stack>
		</Stack>
	);
}

export default Slidebar;
