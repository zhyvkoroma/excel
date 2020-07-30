import {capitaliza} from '@core/utils';

export class DOMListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DOMListener`);
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener);
            const name = this.name || '';
            if (!this[method]) {
                throw new Error(
                    `Method ${method} is not implemented in ${name} Component`);
            }
            this.$root.on(listener, this[method].bind(this));
        });
    }

    removeDOMListeners() {}
}

function getMethodName(eventName) {
    return 'on' + capitaliza(eventName);
}
