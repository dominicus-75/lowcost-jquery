/*
 * Fapados Jquery (lowcost-jquery)
 *
 * Copyright 2017 Domokos Endre János <domokos.endrejanos@gmail.com>
 * Released under the GNU General Public License
 *
 */

  function $(selector) {
    if (typeof selector === "string") {
      return document.querySelector(selector);
    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this;
    }
  }


  function ready(callback) {
    if(document.readyState !== "complete") {
      document.addEventListener("DOMContentLoaded", callback);
      window.addEventListener("load", callback);
    }
  }


  function ajaxy(request) {
    xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if(typeof request.success === "function") {
          request.success(xhr);
        }
      }
    };
    typeof request.url === "undefined" ? request.url = location.href : request.url;
    xhr.open(request.type, request.url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
    typeof request.data === "undefined" ? xhr.send() : xhr.send(request.data);
  }
