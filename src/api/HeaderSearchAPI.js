export const getSummoners = async (e) => {
	// TODO
	try {
		const searchTerm = e.target.value;
		const response = await fetch(
			`https://codingtest.op.gg/api/summoner/${searchTerm}/matches`
		);
		const data = await response.json();
		const { games } = data;
		console.log('summoner API res: ', games);
		return games;
	} catch (error) {
		console.log('error here! ', error);
	}

	// const { summoner } = response;

	// console.log('summoner API res: ', summoner);
};
