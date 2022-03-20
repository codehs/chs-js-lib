import {
    Chebyshev,
    Distortion,
    Freeverb,
    MembraneSynth,
    MetalSynth,
    setContext,
    Synth,
    Tremolo,
    Vibrato,
} from 'tone';
import { getAudioContext } from './audioContext';

/**
 * @class
 */
class Sound {
    type = 'Sound';

    /**
     * Construct a new Sound.
     * Optionally set the frequency and the oscillator type.
     *
     * @param {number|string} frequency - Either a number (Hertz) or note ("C#4" for middle C Sharp)
     * @param {string} oscillatorType - several options
     * basic types: "sine", "triangle", "square", "sawtooth"
     * any basic type can be prefixed with "fat", "am" or "fm", ie "fatsawtooth"
     * any basic type can be suffixed with a number ie "4" for the number of partials
     *     ie "square4"
     * special types: "pwm", "pulse"
     * drum instrument: "drum"
     * cymbal instrument: "metal"
     * https://tonejs.github.io/docs/13.8.25/OmniOscillator
     * @param {AudioContext} - context
     * @constructor
     */
    constructor(frequency, oscillatorType) {
        setContext(getAudioContext());
        this.volume = 1;
        this.frequency = frequency || 440;
        this.oscillatorType = oscillatorType || 'fatsawtooth';
        if (this.oscillatorType === 'drum') {
            this.synth = new MembraneSynth().toDestination();
        } else if (this.oscillatorType === 'metal') {
            this.synth = new MetalSynth().toDestination();
        } else {
            this.synth = new Synth({
                oscillator: { type: this.oscillatorType },
            }).toDestination();
        }
        this.setFrequency(this.frequency);
    }

    /**
     * Set the Sound's frequency
     *
     * @param frequency - Either a number (Hertz) or note ("C#4" for middle C Sharp)
     */
    setFrequency(frequency) {
        this.frequency = frequency;
        this.synth.frequency.value = frequency;
    }

    /**
     * Set the Sound's volume
     *
     * @param {float} - the volume in decibels
     */
    setVolume(volume) {
        this.volume = volume;
        this.synth.volume.value = volume;
    }

    /**
     * Get the Sound's frequency
     *
     * @returns The Sound's frequency
     */
    getFrequency() {
        return this.frequency;
    }

    /**
     * Get the Sound's volume
     *
     * @returns the volume
     */
    getVolume() {
        return this.volume;
    }

    /**
     * Set the Sound's oscillator type
     *
     * @param {string} oscillatorType - several options
     * basic types: "sine", "triangle", "square", "sawtooth"
     * any basic type can be prefixed with "fat", "am" or "fm", ie "fatsawtooth"
     * any basic type can be suffixed with a number ie "4" for the number of partials
     *     ie "square4"
     * special types: "pwm", "pulse"
     * drum instrument: "drum"
     * cymbal instrument: "metal"
     * https://tonejs.github.io/docs/13.8.25/OmniOscillator
     */
    setOscillatorType(oscillatorType) {
        if (oscillatorType === this.getOscillatorType()) {
            return;
        }

        if (oscillatorType === 'drum') {
            this.disconnect();
            this.synth = new MembraneSynth().toDestination();
            this.setFrequency(this.getFrequency());
        } else if (oscillatorType === 'metal') {
            this.disconnect();
            this.synth = new MetalSynth().toDestination();
            this.setFrequency(this.getFrequency());
        } else if (this.getOscillatorType() === 'drum' || this.getOscillatorType() === 'metal') {
            this.disconnect();
            this.synth = new Synth({
                oscillator: { type: oscillatorType },
            }).toDestination();
            this.setFrequency(this.frequency);
        } else {
            this.synth;
            this.synth.oscillator.type = oscillatorType;
        }
        this.oscillatorType = oscillatorType;
    }

    /**
     * Get the Sound's oscillator type
     *
     * @return a String representing the oscillator type
     */
    getOscillatorType() {
        return this.oscillatorType;
    }

    /**
     * Play the sound indefinitely
     */
    play() {
        if (this.getOscillatorType() === 'metal') {
            this.synth.triggerAttack();
        } else {
            this.synth.triggerAttack(this.getFrequency());
        }
    }

    /**
     * Play the sound for a given duration.
     *
     * @param {string} - duration in one of several formats, mainly:
     * number: the number of seconds to play the sound for.
     *     "2" for 2 seconds
     *     "1.5" for 1.5 seconds
     * OR
     * notation: Describes time in BPM and time signature relative values.
     *     "4n" for quarter note
     *     "8t" for eigth note triplet,
     *     "2m" for 2 measures
     *     "8n." for dotted eighth note
     */
    playFor(duration) {
        if (this.getOscillatorType() === 'metal') {
            this.synth.triggerAttackRelease(duration);
        } else {
            this.synth.triggerAttackRelease(this.getFrequency(), duration);
        }
    }

    /**
     * Stop playing the sound immediately.
     */
    stop() {
        this.synth.triggerRelease();
    }

    /**
     * Disconnect the sound from the AudioNode.
     *
     * This generally should not be used by students. We use it to force stop
     * sounds that are playing when the "STOP" button is pressed in the editor.
     */
    disconnect() {
        this.synth.disconnect();
    }

    /**
     * Add an effect to this sound
     *
     * @param {String} effectName - the name of the prepackaged effect, ie "reverb"
     * @param {float} effectValue - value from 0 to 1 defining how heavily the
     *                              effect applies
     */
    setEffect(effectName, effectValue) {
        switch (effectName) {
            case 'distortion':
                var distortion = new Distortion(effectValue).toDestination();
                this.synth.connect(distortion);
                return;
            case 'chebyshev':
                var chebyshev = new Chebyshev(effectValue * 100).toDestination();
                this.synth.connect(chebyshev);
                return;
            case 'reverb':
                var reverb = new Freeverb().toDestination();
                reverb.wet.value = effectValue;
                this.synth.connect(reverb);
                return;
            case 'tremolo':
                var tremolo = new Tremolo().toDestination().start();
                tremolo.wet.value = effectValue;
                this.synth.connect(tremolo);
                return;
            case 'vibrato':
                var vibrato = new Vibrato().toDestination();
                vibrato.wet.value = effectValue;
                this.synth.connect(vibrato);
                return;
            default:
                return;
        }
    }
}

export default Sound;
