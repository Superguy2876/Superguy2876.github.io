importScripts('https://cdn.jsdelivr.net/npm/tiny-segmenter@0.2.0/dist/tiny-segmenter-0.2.0.min.js');


onmessage = function(e) {
    var segmenter = new TinySegmenter();
    var inputText = e.data;
    var segs = segmenter.segment(inputText);
    var wordCounts = new Map();
    var progress = 0;

    for (var i = 0; i < segs.length; i++) {
        if (wordCounts.has(segs[i])) {
            wordCounts.set(segs[i], wordCounts.get(segs[i]) + 1);
        } else {
            wordCounts.set(segs[i], 1);
        }
        
        if ((i / segs.length * 100) >= progress + 10) {
            progress += 10;
            postMessage({ type: 'progress', data: progress });
        }
    }

    const sortedWordCounts = new Map([...wordCounts.entries()].sort((a, b) => b[1] - a[1]));
    postMessage({ type: 'result', data: Array.from(sortedWordCounts) });
};