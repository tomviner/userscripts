// ==UserScript==
// @name         Collapse Twitter Messages Tab
// @namespace    https://github.com/tomviner/userscripts/
// @version      0.1
// @description  Twitter Messages Tab is annoying. Auto collapse it.
// @author       Tom V
// @license      MIT
// @homepageURL  https://github.com/tomviner/userscripts
// @match        *://twitter.com/*
// @noframes
// ==/UserScript==

/* jshint ignore:end */
/* jshint esnext: false */
/* jshint esversion: 6 */

function collapse_messages_tab() {
  
    let button = document.querySelector('div[aria-label="Collapse"][role="button"]');

    if (!button || button.length === 0) {
      return;
    }

    button.click();
}

(function () {
  'use strict';
  
  window.addEventListener('load', function () {
      for (const x of Array(8).keys()) {
        setTimeout(collapse_messages_tab, 500 * x);
      }
  }, false);

})();
