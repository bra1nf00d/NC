import { debounce } from './utils/throttle/debounce';
import { FluidTypography } from './structures/FluidTypography';

const listening = debounce(() => {
	const fluidTypography = new FluidTypography();
	fluidTypography.onMounted();
	fluidTypography.onResize();

	console.log('App JS listening...');
}, 0, false);

listening();
