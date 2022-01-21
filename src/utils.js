export const getWinRate = (wins, losses) => {
	return Math.trunc((wins / (wins + losses)) * 100);
};

export const getLossRate = (wins, losses) => {
	return Math.trunc((losses / (wins + losses)) * 100);
};
