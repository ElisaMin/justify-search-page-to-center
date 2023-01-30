// ==UserScript==
// @name         Search Align Fucker (simple impl)
// @name:zh-CN   居中啊!他娘的搜索引擎!
// @version      0.0.0.1
// @author       Heizi黑字
// @description  a simple implementation of moving search result to page center and that's google and bing.
// @license      GPL-3.0 License
// @grant        GM.setValue
// @grant        GM.getValue
// @match        https?://(www\.)?(google|bing)\.(.)+/search\?.+
// @run-at       document-end
// @supportURL   https://github.com/ElisaMin/justify-search-page-to-center
// @homepageURL  https://github.com/ElisaMin/justify-search-page-to-center
// ==/UserScript==
(()=>{
    let css = (dom,style,value) => $(dom).style[style] = value;
    let pl = (dom,paddingLeft) => css(dom,"padding-left",paddingLeft);
    let rem = (v)=>v+"rem";
    let paddingLeft = 41;
    pl("#b_header",rem(paddingLeft));
    pl("#b_content",rem(paddingLeft+10.5));
})();