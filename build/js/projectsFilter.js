"use strict";function _createForOfIteratorHelper(e,t){var r,n,o,a,l="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(l)return n=!(r=!0),{s:function(){l=l.call(e)},n:function(){var e=l.next();return r=e.done,e},e:function(e){n=!0,o=e},f:function(){try{r||null==l.return||l.return()}finally{if(n)throw o}}};if(Array.isArray(e)||(l=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return l&&(e=l),a=0,{s:t=function(){},n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function getProject(e){var t,r=[],n=_createForOfIteratorHelper(document.getElementsByClassName("project"));try{for(n.s();!(t=n.n()).done;){var o=t.value,a="none";if(0<e.length){var l,i=_createForOfIteratorHelper(o.getElementsByClassName("tags__name"));try{for(i.s();!(l=i.n()).done;){var c=l.value;if(e.includes(c.innerText.toLowerCase())){a="flex",r.push(o);break}}}catch(e){i.e(e)}finally{i.f()}}else r.push(o),a="flex";o.style.display=a}}catch(e){n.e(e)}finally{n.f()}var s=document.getElementsByClassName("body")[0];document.getElementById("projects-filter__total").innerText=r.length,992<window.innerWidth?5<r.length?s.style.height="".concat(145+15*(r.length-5),"rem"):(console.log("restablecer"),s.style.height="150rem"):s.style.height="100%"}function getTagsForProjectFilterChecked(){var e,t=[],r=_createForOfIteratorHelper(document.getElementsByClassName("projects-filter__item--title"));try{for(r.s();!(e=r.n()).done;){var n=e.value;document.getElementById(n.innerText).checked&&t.push(n.innerText.toLowerCase())}}catch(e){r.e(e)}finally{r.f()}return t}document.addEventListener("DOMContentLoaded",function(){getProject([]);var e,t=_createForOfIteratorHelper(document.getElementsByClassName("projects-filter__item"));try{for(t.s();!(e=t.n()).done;)e.value.addEventListener("change",function(){getProject(getTagsForProjectFilterChecked())})}catch(e){t.e(e)}finally{t.f()}});
//# sourceMappingURL=projectsFilter.js.map
