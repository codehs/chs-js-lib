'use strict';

var graphicsModule = require('codehs-graphics');
var dataStructuresModule = require('codehs-datastructures');
var consoleModule = require('codehs-console');
var randomizerModule = graphicsModule.Randomizer;
var keyboardModule = require('codehs-keyboard');

// This is the insertion point for the distributed JS library.
var CodeHSGraphics = graphicsModule.CodeHSGraphics;
var CodeHSConsole = consoleModule.CodeHSConsole;
var CodeHSDatastructures = dataStructuresModule;

var domready = require('domready');
var PUBLIC_METHODS = {};
var PUBLIC_CONSTRUCTORS = {};

PUBLIC_METHODS.__graphics__ = graphicsModule.PUBLIC_METHODS;
PUBLIC_METHODS.__console__ = consoleModule.PUBLIC_METHODS;

PUBLIC_CONSTRUCTORS.__graphics__ = graphicsModule.PUBLIC_CONSTRUCTORS;
// everything in the datastructures module is a constructor for a data struct.
PUBLIC_CONSTRUCTORS.__datastructs__ = dataStructuresModule.PUBLIC_CONSTRUCTORS;

// Make a wrap of all namespaced methods
var makeNamespaceWrap = function() {
    var result = '';
    var namespace;
    var method;
    var i;
    for (namespace in PUBLIC_METHODS) {
        if (PUBLIC_METHODS.hasOwnProperty(namespace)) {
            for (i = 0; i < PUBLIC_METHODS[namespace].length; i++) {
                method = PUBLIC_METHODS[namespace][i];
                result +=
                    'window.' +
                    method +
                    ' = ' +
                    'function(){\n\treturn ' +
                    namespace +
                    '.' +
                    method +
                    '.apply(' +
                    namespace +
                    ', arguments);\n}\n';
            }
        }
    }

    var constructor;
    for (namespace in PUBLIC_CONSTRUCTORS) {
        if (PUBLIC_CONSTRUCTORS.hasOwnProperty(namespace)) {
            for (i = 0; i < PUBLIC_CONSTRUCTORS[namespace].length; i++) {
                constructor = PUBLIC_CONSTRUCTORS[namespace][i];
                result += 'window.' + constructor + ' = ' + namespace + '.' + constructor + ';\n';
            }
        }
    }
    result += 'window.Text = __graphics__.Text;\n';
    result += 'Text.giveDefaultContext(__graphics__);\n';

    return result;
};

var setup = function() {
    // Attach libaries to the window as constants
    window.__graphics__ = new CodeHSGraphics();
    window.__console__ = new CodeHSConsole();
    window.__datastructs__ = CodeHSDatastructures;

    // Also need a CodeHSGraphics constructor to make multiple instances
    window.CodeHSGraphics = CodeHSGraphics;

    // Attach other modules to the window
    window.Randomizer = randomizerModule;
    window.Color = graphicsModule.Color;
    window.Keyboard = keyboardModule;

    // Attach ToneJS to the window
    // import audio context utils
    var getAudioContext = graphicsModule.getAudioContext;

    /*
     * Requiring the ToneJS library could throw an exception if the browser
     * doesn't support it, so we try to require it here.
     */
    try {
        // Silences the "Tone.js Version r12" from showing in the console
        window.TONE_SILENCE_VERSION_LOGGING = true;

        // requires the ToneJS library
        window.Tone = require('tone');

        if (!window.Tone.supported) {
            throw new Error('Tone library not supported');
        } else {
            window.Tone.setContext(getAudioContext());
        }
    } catch (e) {
        console.log(
            'Tone.js is not supported in this browser, you may not be able to make audio javascript programs. Please use the most up to date version of Chrome, Firefox, or Safari.'
        );
        var toneErrorFunction = function() {
            throw new Error(
                "There was an error loading Sounds. You may need to refresh the page or restart your browser. If that doesn't work, try updating your browser."
            );
        };
        window.Tone = {
            supported: false,
            Player: toneErrorFunction,
            PolySynth: toneErrorFunction,
            Buffer: toneErrorFunction,
            FFT: toneErrorFunction,
            Oscillator: toneErrorFunction,
            Distortion: toneErrorFunction,
            Chebyshev: toneErrorFunction,
            Freeverb: toneErrorFunction,
            Tremolo: toneErrorFunction,
            Vibrato: toneErrorFunction,
            Synth: toneErrorFunction,
            MembraneSynth: toneErrorFunction,
            MetalSynth: toneErrorFunction,
        };
    }

    var wrap = makeNamespaceWrap();
    eval(wrap);
};

domready(function() {
    setup();
});

module.exports = {
    CodeHSGraphics: CodeHSGraphics,
    CodeHSConsole: CodeHSConsole,
    CodeHSDatastructures: CodeHSDatastructures,
};
