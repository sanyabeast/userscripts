// ==UserScript==
// @name         GooglePlayMusicDownloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://play.google.com/music/*/*
// @match        https://play.google.com/music/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /*Base64 encoder-decoder from https://github.com/mathiasbynens/base64*/
    !function(e){var t="object"==typeof exports&&exports,r="object"==typeof module&&module&&module.exports==t&&module,o="object"==typeof global&&global;o.global!==o&&o.window!==o||(e=o);var n=function(e){this.message=e};(n.prototype=new Error).name="InvalidCharacterError";var a=function(e){throw new n(e)},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=/[\t\n\f\r ]/g,h={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&a("The string to be encoded contains characters outside of the Latin1 range.");for(var t,r,o,n,d=e.length%3,h="",i=-1,f=e.length-d;++i<f;)t=e.charCodeAt(i)<<16,r=e.charCodeAt(++i)<<8,o=e.charCodeAt(++i),h+=c.charAt((n=t+r+o)>>18&63)+c.charAt(n>>12&63)+c.charAt(n>>6&63)+c.charAt(63&n);return 2==d?(t=e.charCodeAt(i)<<8,r=e.charCodeAt(++i),h+=c.charAt((n=t+r)>>10)+c.charAt(n>>4&63)+c.charAt(n<<2&63)+"="):1==d&&(n=e.charCodeAt(i),h+=c.charAt(n>>2)+c.charAt(n<<4&63)+"=="),h},decode:function(e){var t=(e=String(e).replace(d,"")).length;t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9/]/.test(e))&&a("Invalid character: the string to be decoded is not correctly encoded.");for(var r,o,n=0,h="",i=-1;++i<t;)o=c.indexOf(e.charAt(i)),r=n%4?64*r+o:o,n++%4&&(h+=String.fromCharCode(255&r>>(-2*n&6)));return h},version:"0.1.0"};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return h});else if(t&&!t.nodeType)if(r)r.exports=h;else for(var i in h)h.hasOwnProperty(i)&&(t[i]=h[i]);else e.base64=h}(this);
    
    var GooglePlayMusicDownloader = function(){
    	this.phantomLink = document.createElement("a");
    };

    GooglePlayMusicDownloader.prototype = {
    	downloadBase64 : function(data, filename){
    		// var file = new Blob(["data:audio/m4a;base64,", data].join(""), { type : 'application/octet-stream' });
    		var binaryData = base64.decode(["data:audio/m4a;base64,", data].join(""));

    		console.log(binaryData);

    		this.phantomLink.href = window.URL.createObjectURL(file);
    		this.phantomLink.setAttribute("download", filename);
    		this.phantomLink.click();
    	}
    };

    window.gpmd = new GooglePlayMusicDownloader();

}).call(window);