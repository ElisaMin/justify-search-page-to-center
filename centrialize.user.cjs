// ==UserScript==
// @name         Search Align Fucker (simple impl)
// @version      0.0.0.3
// @author       Heizi黑字
// @description  a simple implementation of moving search result to page center and that's google and bing.
// @license      GPL-3.0 License
// @grant        GM.setValue
// @grant        GM.getValue
// @match        https://www.bing.com/search*
// @match        https://www.google.com/search*
// @match        https://cn.bing.com/search*
// @match        https://www.google.*/search*
// @match        https://(www\.|cn\.)?(google|bing)\.(.+)/search\?.+
// @run-at       document-end
// @supportURL   https://github.com/ElisaMin/justify-search-page-to-center
// @homepageURL  https://github.com/ElisaMin/justify-search-page-to-center
// @name:zh-CN            居中啊!他娘的搜索引擎!
// @description:zh-CN     简单加点padding把搜索结果移到中间。
// @namespace https://greasyfork.org/users/1018732
// ==/UserScript==
(()=>{
    if (!$) var $ = (elm)=> document.querySelector(elm);
    let css = (dom,style,value) => {
        let e = $(dom);
        if (!!e) e.style[style] = value;
        return !!e;
    };
    let pl = (dom,paddingLeft) => css(dom,"padding-left",paddingLeft);
    let rem = (v)=>v+"rem";
    let paddingLeft = 43;
    if (pl("#b_header",rem(paddingLeft)))
        pl("#b_content",rem(paddingLeft+10.5));
    else {
        paddingLeft-=13;
        paddingLeft=rem(paddingLeft);
        ["hdtb-msb","appbar","rcnt","tsf"].forEach(element => {
            pl("#"+element,paddingLeft);
        });
    }
})();