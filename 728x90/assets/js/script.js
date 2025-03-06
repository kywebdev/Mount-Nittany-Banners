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


        tl.add('white', '+=0.1')
            .to('#white', 1.5, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white+=0.2')
            .to('#circle-1', 1.42, { left: "146px", ease: "cubic-bezier(0, 0.76, 0.35, 1)" }, 'white+=0.27')
            .to('#circle-2', 1.42, { left: "366px", ease: "cubic-bezier(0, 0.76, 0.35, 1)" }, 'white+=0.27')
            .to('.logo', 1.42, { left: "405px", ease: "cubic-bezier(0, 1.08, 0.35, 1)" }, 'white+=0.27')
            .to('#logo-color', 1.42, { opacity: 0, ease: "cubic-bezier(0, 1.08, 0.35, 1)" }, 'white+=0.27')
            .to('#logo-shadow', 1.42, { opacity: 1, ease: "cubic-bezier(0, 1.08, 0.35, 1)" }, 'white+=0.27')
            .to('#cardio', 1.5, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white+=0.2');

        tl.add('red', '+=0.7')
            .to('.logo', 3.3, { top: "95px", opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.1')
            .to('#cardio', 3.3, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.1')
            .to('#red', 1.48, { top: "0px", ease: "cubic-bezier(0, 0.65, 0.35, 1)" }, 'red')
            .to('.circle', 3.3, { top: "-256px", left: "246px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.1')
            .to('#heart', 1.5, { top: "19px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=0.1')
            .to('#health', 1.5, { top: "19px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=0.35')
            .to('#is', 1.49, { top: "19px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=0.61')
            .to('#about', 1.49, { top: "51px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=0.8')
            .to('#the', 1.54, { top: "51px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=0.98')
            .to('#long', 1.57, { top: "51px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=1.33')
            .to('#game', 1.57, { top: "51px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=1.6');


        tl.add('courageous', '+=1.2')
            .to('#logo-color', 2.76, { top: "8px", left: "297px", width: "134px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#red', 2.76, { top: "110px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#circle-1', 2.76, { top: "-78px", left: "146px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#circle-2', 2.76, { top: "-78px", left: "366px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#courageous', 2.76, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous')
            .to('#at-heart', 2.76, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous');

        tl.add('logo-color', '+=0.7')
            .to('#white', 1.5, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('.circle', 1.5, { left: "246px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#courageous', 1.5, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#at-heart', 1.5, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#cardio-gray', 1.2, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color')
            .to('#logo-color', 1.5, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'logo-color');

        tl.add('learn-more', '+=0.1')
            .to('#learn-more', 1.2, { left: "516px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('#cardio-gray', 1.2, { left: "210px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('#logo-color', 1.2, { left: "192px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more')
            .to('.circle', 1.2, { left: "141px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'learn-more');
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