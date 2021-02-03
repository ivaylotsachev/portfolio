import 'grained';

class Grained {
    constructor(element) {
        this.options = {
            animate: true,
            parentWidth: "100%",
            grainOpacity: 0.08,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1
        }

        this.element = element;

        this._init();
    }

    _init() {
        return grained(this.element, this.options)
    }
}

export default Grained;