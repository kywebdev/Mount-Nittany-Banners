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
            .to('#white', 1.07, { top: "250px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'white+=0.45')
            .to('#circle-1', 1.2, { top: "125px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'white+=0.28')
            .to('#circle-2', 1.2, { top: "-45px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'white+=0.28')
            .to('.logo', 1.16, { top: "173px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'white+=0.32')
            .to('#logo-color', 1.16, { opacity: 0, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'white+=0.32')
            .to('#cardio', 2.08, { opacity: 1, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'white');

        tl.add('red', '+=0.0')
            .to('.logo', 1.21, { top: "-65px", opacity: 0, ease: "cubic-bezier(0.22, 0.61, 0.28, 1.06)" }, 'red+=0.03')
            .to('#red', 1.22, { top: "0px", ease: "cubic-bezier(0.31, 0.65, 0.59, 0.92)" }, 'red+=0.1')
            .to('#white', 1.22, { opacity: 0, ease: "cubic-bezier(0.31, 0.65, 0.59, 0.92)" }, 'red+=0.1')
            .to('.circle', 1.48, { top: "-210px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'red+=0.08')
            .to('#cardio', 5.4, { opacity: 0, ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'red+=0.09')
            .to('#heart', 1.56, { top: "77px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=0.9')
            .to('#health', 1.56, { top: "77px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=1.05')
            .to('#is', 1.56, { top: "105px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=1.22')
            .to('#about', 1.56, { top: "105px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=1.43')
            .to('#the', 1.56, { top: "105px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=1.77')
            .to('#long', 1.56, { top: "132px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=1.97')
            .to('#game', 1.56, { top: "132px", opacity: 1, ease: "cubic-bezier(0.23, 1.25, 0.46, 1)" }, 'red+=2.3');

        tl.add('courageous', '+=0.0')
            .to('#white', 0, { top: 0, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'courageous')
            .to('#logo-color', 2.76, { top: "80px", ease: "cubic-bezier(0.64, 0.04, 0.35, 1)" }, 'courageous+=0.1')
            .to('#red', 1.23, { top: "250px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'courageous+=0.29')
            .to('#circle-1', 1.75, { top: "-45px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'courageous+=0.49')
            .to('#circle-2', 1.75, { top: "125px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'courageous+=0.49')
            .to('#courageous', 2.48, { top: "82px", opacity: 1, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'courageous+=0.38')
            .to('#at-heart', 2.48, { top: "176px", opacity: 1, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'courageous+=0.38');

        tl.add('logo-color', '+=0.1')
            .to('#white', 1.2, { opacity: 1, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'logo-color')
            .to('.circle', 1.2, { top: "27px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'logo-color')
            .to('#courageous', 1.2, { top: "63px", opacity: 0, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'logo-color')
            .to('#at-heart', 1.2, { top: "193px", opacity: 0, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'logo-color')
            .to('#cardio-gray', 1.2, { opacity: 1, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'logo-color')
            .to('#logo-color', 1.2, { top: "80px", opacity: 1, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'logo-color');

        tl.add('learn-more', '+=0.0')
            .to('#learn-more', 0.0, { opacity: 1, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'learn-more')
            .to('#logo-color', 0.5, { top: "67px", left: "89px", width: "122px", opacity: 1, ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'learn-more')
            .to('#cardio-gray', 0.5, { top: "126px", left: "99px", width: "104px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'learn-more')
            .to('.circle', 0.5, { top: "18.23px", left: "65.12px", width: "169.39px", height: "169px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'learn-more')
            .to('#red', 0.5, { top: "203px", ease: "cubic-bezier(0.22, 0.61, 0, 1.05)" }, 'learn-more');
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