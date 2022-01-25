export const getWinRate = (wins, losses) => {
	return Math.trunc((wins / (wins + losses)) * 100);
};

export const getLossRate = (wins, losses) => {
	return Math.trunc((losses / (wins + losses)) * 100);
};
export const getKda = (kills, deaths, assists) => {
	return ((kills + assists) / deaths).toFixed(2);
};
export const getKdaColor = (kda) => {
	return kda >= 5 ? 'yellow' : kda >= 4 ? 'blue' : kda >= 3 ? 'green' : '';
};
