/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

$(function(){
    $('.slider').slider({
        // slidesToShow:2,
        // autoplay: true
    });
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function ($) {
    $.fn.slider = function (options) {
        options = $.extend({
            slidesToShow: 1,
            autoplay: false,
            delayTime: 5,
            speedAutoSlide:1000
        }, options);


        return this.each(function () {
            $(".next").click(function () {
                var currentImage = $(".img.curry");
                var currentImageIndex = $(".img.curry").index();
                var nextImageIndex = currentImageIndex + options.slidesToShow;
                var nextImage = $(".img").eq(nextImageIndex);
                currentImage.fadeOut(1000);
                currentImage.removeClass("curry");

                if (nextImageIndex == ($(".img:last").index() + 1)) {
                    $('.img').eq(0).fadeIn(1000);
                    $('.img').eq(0).addClass('curry');
                } else {
                    nextImage.fadeIn(1000);
                    nextImage.addClass('curry');
                }
            });

            $(".prev").click(function () {
                var currentImage = $(".img.curry");
                var currentImageIndex = $(".img.curry").index();
                var prevImageIndex = currentImageIndex - 1;
                var prevImage = $(".img").eq(prevImageIndex);

                currentImage.fadeOut(1000);
                currentImage.removeClass('curry');
                prevImage.fadeIn(1000);
                prevImage.addClass('curry');
            });
            if (options.autoplay) {
                function aPlay() {
                    $(".next").click();
                    delId = setTimeout(aPlay, options.delayTime * options.speedAutoSlide);
                }
                var delId = setTimeout(aPlay,options.delayTime * options.speedAutoSlide);
                el.hover(
                    function() {
                        clearTimeout(delId);
                    },
                    function() {
                        delId = setTimeout(aPlay,options.delayTime * 1000);
                    }
                );
            }
        });
    };
})(jQuery);

/***/ })
/******/ ]);