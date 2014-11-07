/**
 * @fileoverview 타입체크 모듈
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }

    function isDefined(obj) {
        return obj !== null && obj !== undefined;
    }

    function isTruthy(obj) {
        return isDefined(obj) && obj !== false;
    }

    var toString = Object.prototype.toString;

    /**
     * 인자가 배열인지 확인
     * @param {*} obj
     * @return {boolean}
     */
    function isArray(obj) {
        return isDefined(Array.isArray) ? Array.isArray(obj) : toString.call(obj) === '[object Array]';
    }

    /**
     * 인자가 객체인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     */
    function isObject(obj) {
        return obj === Object(obj);
    }

    /**
     * 인자가 함수인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     */
    function isFunction(obj) {
        return toString.call(obj) === '[object Function]';
    }

    /**
     * 인자가 숫자인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     */
    function isNumber(obj) {
        return toString.call(obj) === '[object Number]';
    }

    /**
     * 인자가 문자열인지 확인하는 메서드
     * @param obj
     * @return {boolean}
     */
    function isString(obj) {
        return toString.call(obj) === '[object String]';
    }

    /**
     * 인자가 불리언 타입인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     */
    function isBoolean(obj) {
        return toString.call(obj) === '[object Boolean]';
    }

    /**
     * HTMLElement타입 검사
     * @param {HTMLElement} html
     * @return {Boolean} HTMLElement 인지 여부
     */
    function isHTMLElement(html)	{
        if(typeof(HTMLElement) === 'object') {
            return(html && (html instanceof HTMLElement));
        }
        return !!(html && html.nodeType);
    }

    /**
     *
     * @param {*} obj 평가할 대상
     * @return {boolean}
     */
    function isFalsy(obj) {
        return !isTruthy(obj);
    }
    /**
     * 값이 비어있는지 확인 한다.
     * - type 이 Object 의 경우 : 값이 하나라도 있으면 false 로 간주
     * - 그 외의 경우 : boolean 으로 변경하여 평가함.
     * @param {*} obj 평가할 대상
     * @return {boolean}
     */
    function isEmpty(obj) {
        var empty = true,
            name;
        if (typeof obj === 'object') {
            for (name in obj) {
                empty = false;
                break;
            }
        } else {
            empty = !obj;
        }
        return empty;
    }
    /**
     * 값이 비어있는지 확인 한다.
     * - type 이 Object 의 경우 : 값이 하나라도 있으면 true 로 간주
     * - 그 외의 경우 : boolean 으로 변경하여 평가함.
     * @param {*} obj 평가할 대상
     * @return {boolean}
     */
    function isNotEmpty(obj) {
        return !isEmpty(obj);
    }



    ne.isDefined = isDefined;
    ne.isTruthy = isTruthy;
    ne.isArray = Array.isArray || isArray;
    ne.isObject = isObject;
    ne.isFunction = isFunction;
    ne.isNumber = isNumber;
    ne.isString = isString;
    ne.isBoolean = isBoolean;
    ne.isHTMLElement = isHTMLElement;
    ne.isEmpty = isEmpty;
    ne.isNotEmpty = isNotEmpty;

})(window.ne);
