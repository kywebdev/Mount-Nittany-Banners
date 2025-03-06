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

        tl.add('white', '+=0.2')
            .to('#white', 1.2, { "background-color": "#D12029", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white')
            .to('#circle-1', 1.2, { left: "51.54px", border: "1px solid white", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white')
            .to('#circle-2', 1.2, { left: "146.54px", border: "1px solid white", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white')
            .to('.logo', 1.03, { left: "161px", top: "10px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white+=0.17')
            .to('#logo-color', 1.03, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white+=0.17')
            .to('#cardio', 2.08, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white');

        tl.add('red', '+=0.0')
            .to('#white', 0.0, { "background-color": "#D12029", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red')
            .to('.logo', 1.2, { top: "59px", left: "159px", opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=1.0')
            .to('#red', 1.01, { top: "-3px", ease: "cubic-bezier(0, 1.1, 0.35, 1)" }, 'red+=0.31')
            .to('.circle', 1.2, { top: "-106px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=1.0')
            .to('#cardio', 1.2, { left: "49px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=1.0')
            .to('#heart', 1.2, { top: "12px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.35')
            .to('#health', 1.2, { top: "12px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.6')
            .to('#is', 1.2, { top: "12px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.96')
            .to('#about', 1.2, { top: "27px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=1.3')
            .to('#the', 1.2, { top: "27px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=1.55')
            .to('#long', 1.2, { top: "28px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=1.83')
            .to('#game', 1.2, { top: "27px", opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=2.11');

        tl.add('courageous', '+=2')
            .to('#white', 1.2, { left: 0, "background-color": "#D12029", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#logo-color', 1.2, { top: "6px", left: "119px", width: "61px", height: "23px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#red', 1.2, { top: "69px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#circle-1', 1.2, { top: "-26px", left: "51.54px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#circle-2', 1.2, { top: "-26px", left: "146.54px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#cardio', 1.2, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#courageous', 1.5, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#at-heart', 1.5, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous');

        tl.add('logo-color', '+=0.2')
            .to('#white', 1.2, { "background-color": "#fff", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#circle-1', 1.42, { border: "1px solid #F00", ease: "cubic-bezier(0, 0.76, 0.35, 1)" }, 'logo-color')
            .to('#circle-2', 1.42, { border: "1px solid #F00", ease: "cubic-bezier(0, 0.76, 0.35, 1)" }, 'logo-color')
            .to('.circle', 1.2, { left: "99.04px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#courageous', 1.2, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#at-heart', 1.2, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#cardio-gray', 1.2, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#logo-color', 1.2, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color');

        tl.add('learn-more', '+=0.2')
            .to('#learn-more', 1.2, { left: "178px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('#cardio-gray', 1.2, { left: "62px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('#logo-color', 1.2, { left: "57px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('.circle', 1.2, { left: "38px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more');

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