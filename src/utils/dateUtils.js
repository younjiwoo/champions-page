export const getElapsedTime = (timestamp) => {
	const pastTime = new Date(timestamp);
	const currentTime = +new Date();

	const diffTime = Math.abs(currentTime - pastTime);
	const diffSeconds = Math.floor(diffTime / 1000);
	const diffMinutes = Math.floor(diffSeconds / 60);
	const diffHours = Math.floor(diffMinutes / 60);
	const diffDays = Math.floor(diffHours / 24);
	const diffMonths = Math.floor(diffDays / 30);
	const diffYears = Math.floor(diffDays / 365);

	if (diffMinutes) {
		if (diffHours) {
			if (diffDays) {
				if (diffMonths) {
					if (diffYears) {
						return `${diffYears}년 전`;
					} else {
						return `${diffMonths}달 전`;
					}
				} else {
					return `${diffDays === 1 ? '하루' : '일'} 전`;
				}
			} else {
				return `${diffHours}시간 전`;
			}
		} else {
			return `${diffMinutes}분 전`;
		}
	} else {
		return `${diffSeconds}초 전`;
	}
};

export const getMinSec = (sec) => {
	const decimalMinutes = sec / 60;
	const minutes = Math.floor(decimalMinutes);
	const seconds = Math.floor((decimalMinutes - minutes) * 60);

	return minutes
		? `${minutes}분${seconds ? ` ${seconds}초` : ''}`
		: `${seconds}초`;
};
