import { Node } from '../../utils/helpers/node.helpers';

export class Menu {
	constructor() {
		this.nodeList = Node.getAll('.menu');
	}

	onMounted() {
		if (!this.nodeList) return;

		this.targetToggle();
	}

	targetToggle() {
		this.nodeList.forEach((nodeEl) => {
			nodeEl.addEventListener('click', () => {
				if (nodeEl.querySelector('.menu__collapse')) {
					nodeEl.querySelector('.menu__collapse')
						.classList.toggle('hidden');

					document.body.classList.toggle('lock');
				}
			});
		});
	}
}
