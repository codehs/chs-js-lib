const NativeAudio = Audio;

export default class CrossOriginAudio {
    constructor(url) {
        const audioElement = new NativeAudio(url);
        audioElement.crossOrigin = 'anonymous';
        return audioElement;
    }
}
