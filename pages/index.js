import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '../src/components/Loader';

function Home() {
	/**
	 * all state defined here
	 */
	const [loading, setLoading] = useState(true);

	const Router = useRouter();

	/**
	 * Initially It will redirect to the login page
	 */
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
		if (!loading) Router.push('/login');
	}, [loading]);

	return <>{loading ? <Loader /> : ''}</>;
}

export default Home;
