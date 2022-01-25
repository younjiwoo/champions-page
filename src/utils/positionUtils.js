import adc from './assets/icon-mostposition-adc.svg';
import mid from './assets/icon-mostposition-mid.svg';
import sup from './assets/icon-mostposition-sup.svg';
import jng from './assets/icon-mostposition-jng.svg';
import top from './assets/icon-mostposition-top.svg';

export const getPositionInfo = (position) => {
	let kor = '';
	let imageUrl = '';

	switch (position) {
		case 'SUP':
			kor = '서포터';
			imageUrl = sup;
			break;

		case 'TOP':
			kor = '탑';
			imageUrl = top;
			break;

		case 'ADC':
			kor = '원딜';
			imageUrl = adc;
			break;

		case 'JNG':
			kor = '정글';
			imageUrl = jng;
			break;
		case 'MID':
			kor = '미드';
			imageUrl = mid;
			break;
		default:
			break;
	}

	return { kor, imageUrl };
};
