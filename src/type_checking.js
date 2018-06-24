/**
 * @file js 数据类型判断工具函数
 * @author sqliang
 */


/**
 * 类型check函数
 * @param {Object} obj 待检测数据
 * @return {String} 数据类型返回值
 */
export function typeOf(obj) {
    const toString = Object.prototype.toString;
    const typeMap = {
        '[object String]': 'string',
        '[object Number]': 'number',
        '[object Boolean]': 'boolean',
        '[object Symbol]': 'symbol',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
        '[object Array]': 'array',
        '[object Function]': 'function',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Error]': 'error'
    };

    return typeMap[toString.call(obj)];
}

/**
 * check HTML element
 * @param {Object} value
 * @return {Boolean}
 */
export function isNode(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
}

/**
 * check a list of HTML element
 * @param {Object} value
 * @return {Boolean}
 */
export function isNodeList(value) {
    const type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || isNode(value[0]));
}

/**
 * check is svg
 * @param {Object} value
 * @return {Boolean}
 */
export function isSvg(value) {
    return value !== undefined && value instanceof SVGElement;
}
