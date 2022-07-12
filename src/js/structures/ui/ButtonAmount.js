import { Node } from '../../utils/helpers/node.helpers';

export class ButtonAmount {
	constructor() {
		this.nodeList = Node.getAll('.button-amount');
	}

	onMounted() {
		if (!this.nodeList) return;

		this.nodeList.forEach((nodeEl) => {
			this.onRender(nodeEl, 0);
			let value = 0;

			nodeEl.querySelector('.button-amount__icon--plus')
				.addEventListener('click', () => {
					value += 1;

					this.onRender(nodeEl, value);
				});

			nodeEl.querySelector('.button-amount__icon--minus')
				.addEventListener('click', () => {
					value = value === 0 ? 0 : value -= 1;

					this.onRender(nodeEl, value);
				});
		});
	}

	onRender(nodeEl, value) {
		nodeEl.querySelector('.button-amount__number')
			.innerHTML = `x${value}`;
	}
}
