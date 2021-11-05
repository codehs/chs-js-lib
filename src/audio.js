const NativeAudio = Audio;

export default class CORSAudio {
    constructor(url) {
        const audioElement = new NativeAudio(url);
        audioElement.crossOrigin = 'anonymous';
        return audioElement;
    }
}
