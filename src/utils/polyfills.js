window.requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || (function (fn) { setTimeout(fn, 17); });

if (!Number.isFinite) {
    Object.defineProperty(Number, 'isFinite', {
        value: function (value) {
            return typeof value === 'number' && isFinite(value);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}

if (!Number.isNaN) {
    Object.defineProperty(Number, 'isNaN', {
        value: function (value) {
            return typeof value === 'number' && isNaN(value);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            'use strict';
            if (this == null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}

if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            'use strict';
            if (this == null) {
                throw new TypeError('Array.prototype.findIndex called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return i;
                }
            }
            return -1;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}