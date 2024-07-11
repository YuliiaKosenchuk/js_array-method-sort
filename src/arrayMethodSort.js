'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = undefined) {
    for (let i = 0; i < this.length - 1; i++) {
      if (String(this[i]) > String(this[i + 1])) {
        const currentIndex = this[i];

        this[i] = this[i + 1];
        this[i + 1] = currentIndex;

        i = -1;
      }
    }

    if (compareFunction !== undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const currentIndex = this[i];

          this[i] = this[i + 1];
          this[i + 1] = currentIndex;

          i = -1;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
