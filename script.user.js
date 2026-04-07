// ==UserScript==
// @name         CNF Auto Print + Redirect
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Auto print receipt then redirect to new entry page
// @match        http://122.152.50.54:81/cnf_final/final/cms/admin/?app=cnf-exportdepot&action=_print&ids=*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    if (window.location.href.includes("action=_print")) {

        console.log("Auto print started...");

        setTimeout(() => {
            window.print();

            setTimeout(() => {
                window.location.href =
                    "http://122.152.50.54:81/cnf_final/final/cms/admin/?app=cnf-exportdepot&action=_new";
            }, 2000);

        }, 1000);
    }

})();
