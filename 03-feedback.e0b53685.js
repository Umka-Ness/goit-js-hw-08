var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a=r("kEUo3");const l=document.querySelector(".feedback-form"),n=document.querySelector('input[name="email"]'),s=document.querySelector('textarea[name="message"]');l.addEventListener("input",(0,a.throttle)((e=>{console.log(e);const t={email:n.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log(e.target)})),500),l.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:n.value,message:s.value}),l.reset()}));const i=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");i&&(n.value=i.email,s.value=i.message);
//# sourceMappingURL=03-feedback.e0b53685.js.map