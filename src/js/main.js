import { debounce } from './utils/throttle/debounce';
import { FluidTypography } from './structures/FluidTypography';
import { ResponsiveImage } from './structures/ResponsiveImage';
import { ButtonAmount } from './structures/ui/ButtonAmount';
import { ButtonCross } from './structures/ui/ButtonCross';
import { Cutter } from './utils/enums/cutter.enums';

const listening = debounce(() => {
	const fluidTypography = new FluidTypography();
	fluidTypography.onMounted();
	fluidTypography.onResize();

	const responsiveImage = new ResponsiveImage();
	responsiveImage.onMounted();

	const buttonAmount = new ButtonAmount();
	buttonAmount.onMounted();

	const cartButtonCross = new ButtonCross('.cart .button-cross');
	cartButtonCross.onClick((event) => {
		event.currentTarget.closest('.cart__column').remove();
	});

	const cutterProductTitle = new Cutter('.product-title');
	cutterProductTitle.cut(36);

	console.log('App JS listening...');
}, 0, false);

listening();
