'use strict';

var graphicsModule = require('./graphics/graphicsbase.js');
var dataStructuresModule = require('./datastructures/datastructuresbase.js');
var consoleModule = require('./console/console.js');
var keyboardModule = require('./keyboard/keyboard.js');

// This is currently being attached to the window to allow non-modular
// JavaScript to have access to it. Once all libraries (Karel et al.)
// are ported to modules this will be redundant and can be simply
// replaced with a `require` in those files.
window.CodeHSGraphics = graphicsModule.CodeHSGraphics;
window.CodeHSConsole = consoleModule.CodeHSConsole;

// Quick fixes until Karel modules are ported.
window.Polygon = graphicsModule.Polygon;
window.Rectangle = graphicsModule.Rectangle;
window.WebImage = graphicsModule.WebImage;
window.WebVideo = graphicsModule.WebVideo;
window.ImageLibrary = graphicsModule.ImageLibrary;
window.Grid = graphicsModule.Grid;
window.chsText = graphicsModule.Text;
window.Circle = graphicsModule.Circle;
window.chsSet = dataStructuresModule.chsSet;
window.Stack = dataStructuresModule.Stack;
window.Line = graphicsModule.Line;
window.Keyboard = keyboardModule;

// Use apply to pass CodeHSConsole to the function as `this`, rather than window
// which results as undefined.
var CodeHSConsole = new window.CodeHSConsole();
window.globalCodeHSConsoleInstance = CodeHSConsole;
window.quietPrintln = function() {
    return CodeHSConsole.quietPrintln.apply(CodeHSConsole, arguments);
};
window.quietPrint = function() {
    return CodeHSConsole.quietPrint.apply(CodeHSConsole, arguments);
};
window.println = function() {
    return CodeHSConsole.println.apply(CodeHSConsole, arguments);
};
window.print = function() {
    return CodeHSConsole.print.apply(CodeHSConsole, arguments);
};
window.readInt = function() {
    return CodeHSConsole.readInt.apply(CodeHSConsole, arguments);
};
window.readBoolean = function() {
    return CodeHSConsole.readBoolean.apply(CodeHSConsole, arguments);
};
window.readFloat = function() {
    return CodeHSConsole.readFloat.apply(CodeHSConsole, arguments);
};
window.readLine = function() {
    return CodeHSConsole.readLine.apply(CodeHSConsole, arguments);
};

// The following are special cases, where namespaces are used but
// the objects are never constructed.
window.Randomizer = graphicsModule.Randomizer;
window.Color = graphicsModule.Color;
