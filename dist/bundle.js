/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let currentPlayer = 'red';
let checker = document.createElement('img');
checker.src = `/assets/${currentPlayer}-checker.png`;

let testDiv = document.querySelector('div[data-col="1"]');

function displayImageOnHover(targetElement, imageElement){

    targetElement.addEventListener('mouseenter', e => {
        targetElement.appendChild(imageElement);
    });

    targetElement.addEventListener('mouseleave', e => {
        targetElement.removeChild(imageElement);
    });
}

displayImageOnHover(testDiv, checker);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3VyLWluLWEtcm93Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjdXJyZW50UGxheWVyID0gJ3JlZCc7XHJcbmxldCBjaGVja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmNoZWNrZXIuc3JjID0gYC9hc3NldHMvJHtjdXJyZW50UGxheWVyfS1jaGVja2VyLnBuZ2A7XHJcblxyXG5sZXQgdGVzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWNvbD1cIjFcIl0nKTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlJbWFnZU9uSG92ZXIodGFyZ2V0RWxlbWVudCwgaW1hZ2VFbGVtZW50KXtcclxuXHJcbiAgICB0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlID0+IHtcclxuICAgICAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgICAgICB0YXJnZXRFbGVtZW50LnJlbW92ZUNoaWxkKGltYWdlRWxlbWVudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZGlzcGxheUltYWdlT25Ib3Zlcih0ZXN0RGl2LCBjaGVja2VyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=