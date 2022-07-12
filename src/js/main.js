import { debounce } from './utils/throttle/debounce';
import { FluidTypography } from './structures/FluidTypography';
import { ResponsiveImage } from './structures/ResponsiveImage';
import { ButtonAmount } from './structures/ui/ButtonAmount';

const listening = debounce(() => {
	const fluidTypography = new FluidTypography();
	fluidTypography.onMounted();
	fluidTypography.onResize();

	const responsiveImage = new ResponsiveImage();
	responsiveImage.onMounted();

	const buttonAmount = new ButtonAmount();
	buttonAmount.onMounted();

	console.log('App JS listening...');
}, 0, false);

listening();
