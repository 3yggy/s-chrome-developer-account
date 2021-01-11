var el;

document.addEventListener('mouseover', function (e) {
    el = e.target;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    let click_ev = document.createEvent("MouseEvents");
    click_ev.initEvent("click", true, true);
    el.dispatchEvent(click_ev);
});