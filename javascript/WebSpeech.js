/* eslint no-unused-vars: "off" */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-trailing-spaces: "error" */
/* eslint no-trailing-spaces: ["error", { "skipBlankLines": true }] */

let chrmMenuBar = new chrm.ui.MenuBar();
chrmMenuBar.decorate('nav');
let chrmLogo = new chrm.ui.Logo('logo');

let chrmscroll = new chrm.ui.SmoothScroll('scroll');
chrmscroll.init();

window.___gcfg = { lang: 'en' };
(function() {
    let po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    let s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

let doubleTracker = new gweb.analytics.DoubleTrack('floodlight', {
    src: 2542116,
    type: 'clien612',
    cat: 'chrom0',
});
doubleTracker.track();

doubleTracker.trackClass('doubletrack', true);