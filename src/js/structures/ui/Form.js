import { Node } from '../../utils/helpers/node.helpers';
import { Select } from './Select';

export class Form {
	constructor(el) {
		this.nodeList = Node.getAll(el);
		this.select = new Select(`${el} .select`);
	}

	onMounted() {
		if (!this.nodeList && !this.select) return;

		this.select.onMounted();
	}
}
