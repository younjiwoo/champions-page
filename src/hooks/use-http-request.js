import { useState, useCallback } from 'react';

const useHttpRequest = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestConfig, applyData) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(requestConfig.url);

			if (!response.ok) {
				throw new Error('something went wrong!');
			}

			const data = await response.json();
			console.log('useHttpRequest에서 data--', data);
			applyData(data);
		} catch (error) {
			setError(error.message || 'Something went wrong!');
			console.log('error here!', error);
		}

		setIsLoading(false);
	}, []);

	return { sendRequest, isLoading, error };
};

export default useHttpRequest;
