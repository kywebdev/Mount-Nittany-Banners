/* global TimelineMax, SlowMo, EB, EBG */

// Broadcast Events shim
// ====================================================================================================
(function () {
    if (typeof window.CustomEvent === 'function') { return false; }

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();

// Timeline
// ====================================================================================================
var timeline = (function MasterTimeline() {

    var tl;
    var win = window;

    function doClickTag() { window.open(window.clickTag); }

    function initTimeline() {
        document.querySelector('#ad .banner').style.display = 'block';
        document.querySelector('#ad .content').style.display = 'block';
        document.getElementById('ad').addEventListener('click', doClickTag);
        createTimeline();
    }

    function createTimeline() {
        tl = new TimelineMax({ delay: 0, onStart: updateStart, onComplete: updateComplete, onUpdate: updateStats });
        // ---------------------------------------------------------------------------

        tl.add('white', '+=0.7')
            .to('#white', 1.5, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white')
            .to('#circle-1', 1.5, { top: "292.66px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white')
            .to('#circle-2', 1.5, { top: "72.66px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white')
            .to('.logo', 1.5, { top: "382px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white')
            .to('#logo-color', 1.5, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white')
            .to('#cardio', 1.5, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white');

        tl.add('red', '+=0.41')
            .to('.logo', 1.7, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.99')
            .to('#red', 0.99, { left: "0px", ease: "cubic-bezier(0, 0.9, 0.35, 1)" }, 'red')
            .to('.circle', 1.7, { top: "-247.34px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.99')
            .to('#cardio', 1.7, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=1.4')
            .to('#heart', 1.42, { top: "220px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.05')
            .to('#health', 1.3, { top: "247px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.48')
            .to('#is', 1.33, { top: "272px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.84')
            .to('#about', 1.27, { top: "272px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=1.16')
            .to('#the', 1.21, { top: "272px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=1.59')
            .to('#long', 1.25, { top: "287px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=2.01')
            .to('#game', 1.18, { top: "319px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=2.44');

        tl.add('courageous', '+=0.8')
            .to('#logo-color', 1.2, { top: "259px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#red', 1.2, { top: "620px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#circle-1', 1.2, { top: "72.66px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#circle-2', 1.2, { top: "292.66px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#courageous', 1.2, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#at-heart', 1.2, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous');

        tl.add('logo-color', '+=0.8')
            .to('#white', 1.2, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('.circle', 1.2, { top: "182.66px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#courageous', 1.2, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#at-heart', 1.2, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#cardio-gray', 1.2, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#logo-color', 1.2, { top: "259px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color');

        tl.add('learn-more', '+=0.2')
            .to('#learn-more', 0.0, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('.circle', 1.2, { top: "100px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('#cardio-gray', 1.2, { top: "237px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('#logo-color', 1.2, { top: "176px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('#red', 1.2, { top: "499px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more');
    }

    function updateStart() {
        var start = new CustomEvent('start', {
            'detail': { 'hasStarted': true }
        });
        win.dispatchEvent(start);
    }

    function updateComplete() {
        var complete = new CustomEvent('complete', {
            'detail': { 'hasStopped': true }
        });
        win.dispatchEvent(complete);
    }

    function updateStats() {
        var statistics = new CustomEvent('stats', {
            'detail': {
                'totalTime': tl.totalTime(), 'totalProgress': tl.totalProgress(), 'totalDuration': tl.totalDuration()
            }
        });
        win.dispatchEvent(statistics);
    }

    function getTimeline() {
        return tl;
    }

    return {
        init: initTimeline,
        get: getTimeline
    };

})();

if (Enabler.isInitialized()) {
    init();
}
else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
}

function init() {
    if (Enabler.isPageLoaded()) {
        startAd();
    }
    else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, startAd);
    }
}

function startAd() {
    document.getElementById('clickthrough-button').addEventListener('click', bgExitHandler, false);
    timeline.init();
}

var bgExitHandler = function () {
    Enabler.exit('HTML5_Background_Clickthrough');
};


(function () {
    var iterations = 1;

})();