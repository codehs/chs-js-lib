/* IMPORTANT NOTE:
 * In the case that ToneJS is not supported or not on the window, we make all
 * corresponding Sound functions no-ops so that student code is still able to run.
 */

/*
 * Construct a new Sound.
 * Optionally set the frequency and the oscillator type.
 *
 * @param frequency - Either a number (Hertz) or note ("C#4" for middle C Sharp)
 * @param oscillatorType {string} - several options
 * basic types: "sine", "triangle", "square", "sawtooth"
 * any basic type can be prefixed with "fat", "am" or "fm", ie "fatsawtooth"
 * any basic type can be suffixed with a number ie "4" for the number of partials
 *     ie "square4"
 * special types: "pwm", "pulse"
 * drum instrument: "drum"
 * cymbal instrument: "metal"
 * https://tonejs.github.io/docs/13.8.25/OmniOscillator
 */
export default class Sound {
    constructor(frequency, oscillatorType) {
        if (window.Tone && window.Tone.supported) {
            this.frequency = frequency || 440;
            this.oscillatorType = oscillatorType || 'fatsawtooth';
            this.volume = 1;
            if (this.oscillatorType == 'drum') {
                this.synth = new window.Tone.MembraneSynth().toMaster();
            } else if (this.oscillatorType == 'metal') {
                this.synth = new window.Tone.MetalSynth().toMaster();
            } else {
                this.synth = new window.Tone.Synth({
                    oscillator: { type: this.oscillatorType },
                }).toMaster();
            }
            this.setFrequency(this.frequency);
        }
    }
    /*
     * Set the Sound's frequency
     *
     * @param frequency - Either a number (Hertz) or note ("C#4" for middle C Sharp)
     */
    setFrequency(frequency) {
        if (window.Tone && window.Tone.supported) {
            this.frequency = frequency;
            if (this.getOscillatorType() == 'metal') {
                this.synth.frequency.value = frequency;
            } else {
                this.synth.oscillator.frequency.value = frequency;
            }
        }
    }

    /*
     * Set the Sound's volume
     *
     * @param {float} - the volume in decibels
     */
    setVolume(volume) {
        if (window.Tone && window.Tone.supported) {
            this.volume = volume;
            this.synth.volume.value = volume;
        }
    }

    /*
     * Get the Sound's frequency
     *
     * @returns The Sound's frequency
     */
    getFrequency() {
        if (window.Tone && window.Tone.supported) {
            return this.frequency;
        }
    }

    /*
     * Get the Sound's volume
     *
     * @returns the volume
     */
    getVolume() {
        if (window.Tone && window.Tone.supported) {
            return this.volume;
        }
    }

    /*
     * Set the Sound's oscillator type
     *
     * @param oscillatorType {string} - several options
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
        if (window.Tone && window.Tone.supported) {
            var originalOscillatorType = this.getOscillatorType();
            if (oscillatorType == originalOscillatorType) {
                return;
            }

            this.oscillatorType = oscillatorType;
            if (oscillatorType == 'drum') {
                this.disconnect();
                this.synth = new window.Tone.MembraneSynth().toMaster();
                this.setFrequency(this.getFrequency());
            } else if (oscillatorType == 'metal') {
                this.disconnect();
                this.synth = new window.Tone.MetalSynth().toMaster();
                this.setFrequency(this.getFrequency());
            } else if (originalOscillatorType == 'drum' || originalOscillatorType == 'metal') {
                this.disconnect();
                this.synth = new window.Tone.Synth({
                    oscillator: { type: oscillatorType },
                }).toMaster();
                this.setFrequency(this.frequency);
            } else {
                this.synth.oscillator.type = oscillatorType;
            }
        }
    }

    /*
     * Get the Sound's oscillator type
     *
     * @returns a String representing the oscillator type
     */
    getOscillatorType() {
        if (window.Tone && window.Tone.supported) {
            return this.oscillatorType;
        }
    }

    /*
     * Play the sound indefinitely
     */
    play() {
        if (window.Tone && window.Tone.supported) {
            if (this.getOscillatorType() == 'metal') {
                this.synth.triggerAttack();
            } else {
                this.synth.triggerAttack(this.getFrequency());
            }
        }
    }

    /*
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
        if (window.Tone && window.Tone.supported) {
            if (this.getOscillatorType() == 'metal') {
                this.synth.triggerAttackRelease(duration);
            } else {
                this.synth.triggerAttackRelease(this.getFrequency(), duration);
            }
        }
    }

    /*
     * Stop playing the sound immediately.
     */
    stop() {
        if (window.Tone && window.Tone.supported) {
            this.synth.triggerRelease();
        }
    }

    /*
     * Disconnect the sound from the AudioNode.
     *
     * This generally should not be used by students. We use it to force stop
     * sounds that are playing when the "STOP" button is pressed in the editor.
     */
    disconnect() {
        if (window.Tone && window.Tone.supported) {
            this.synth.disconnect();
        }
    }

    /*
     * Add an effect to this sound
     *
     * @param effectName {String} - the name of the prepackaged effect, ie "reverb"
     * @param effectValue {float} - value from 0 to 1 defining how heavily the
     *                              effect applies
     */
    setEffect(effectName, effectValue) {
        if (window.Tone && window.Tone.supported) {
            switch (effectName) {
                case 'distortion':
                    var distortion = new window.Tone.Distortion(effectValue).toMaster();
                    this.synth.connect(distortion);
                    return;
                case 'chebyshev':
                    var chebyshev = new window.Tone.Chebyshev(effectValue * 100).toMaster();
                    this.synth.connect(chebyshev);
                    return;
                case 'reverb':
                    var reverb = new window.Tone.Freeverb().toMaster();
                    reverb.wet.value = effectValue;
                    this.synth.connect(reverb);
                    return;
                case 'tremolo':
                    var tremolo = new window.Tone.Tremolo().toMaster().start();
                    tremolo.wet.value = effectValue;
                    this.synth.connect(tremolo);
                    return;
                case 'vibrato':
                    var vibrato = new window.Tone.Vibrato().toMaster();
                    vibrato.wet.value = effectValue;
                    this.synth.connect(vibrato);
                    return;
                default:
                    return;
            }
        }
    }
}
