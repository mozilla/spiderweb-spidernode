/* Generated by make_unicode.py DO NOT MODIFY */
/* Unicode version: 9.0.0 */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var onlySpace = String.fromCodePoint(0x9, 0xa, 0xb, 0xc, 0xd, 0x20, 0xa0, 0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200a, 0x2028, 0x2029, 0x202f, 0x205f, 0x3000, 0xfeff);

assertEq(/^\s+$/.exec(onlySpace) !== null, true);
assertEq(/^[\s]+$/.exec(onlySpace) !== null, true);
assertEq(/^[^\s]+$/.exec(onlySpace) === null, true);

assertEq(/^\S+$/.exec(onlySpace) === null, true);
assertEq(/^[\S]+$/.exec(onlySpace) === null, true);
assertEq(/^[^\S]+$/.exec(onlySpace) !== null, true);

// Also test with Unicode RegExps.
assertEq(/^\s+$/u.exec(onlySpace) !== null, true);
assertEq(/^[\s]+$/u.exec(onlySpace) !== null, true);
assertEq(/^[^\s]+$/u.exec(onlySpace) === null, true);

assertEq(/^\S+$/u.exec(onlySpace) === null, true);
assertEq(/^[\S]+$/u.exec(onlySpace) === null, true);
assertEq(/^[^\S]+$/u.exec(onlySpace) !== null, true);

if (typeof reportCompare === "function")
    reportCompare(true, true);
