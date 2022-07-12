import { Node } from '../helpers/node.helpers';

export class Cutter {
	constructor(el) {
		this.nodeList = Node.getAll(el);
	}

	cut(length) {
		if (!this.nodeList) return;

		this.nodeList.forEach((nodeEl) => {
			nodeEl.innerText = this.mutatingString(nodeEl.innerText, length);
		});
	}

	mutatingString(string, length) {
		string = `${string[0].toUpperCase() + string.slice(1, length)} ...`;
		return string;
	}
}
