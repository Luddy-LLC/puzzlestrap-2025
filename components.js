function camelize(str) {
    return str.replaceAll("-", "").replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

// Navigation Bar
class Nav extends HTMLElement {
    static observedAttributes = ["title", "is-solveable"];
    constructor() {super();const shadowRoot = this.attachShadow({mode: 'open'});}
    attributeChangedCallback(name, oldValue, newValue) { render() }
    render() {
        const shadowRoot = this.shadowRoot;
        const s = `<style>nav {font-family: 'Space Mono', 'Inter', sans-serif;width: 100%;min-height: 100px;ul {list-style: none;display: flex;padding: 0;}li {display: flex;filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.24));.puzzle-title {padding: 0 15px;align-self: center;color: white;font-size: 1.5em;}.nav-button {display: flex;flex-direction: column;justify-content: center;min-width: 100px;border-radius: 20px;border: 3px solid #4A4A4A;background-color: rgba(34, 36, 37, 0.90);color: #ACACAC;padding: 20px 15px;margin: 0 5px;gap: 5px;text-align: center;font-weight: bolder;box-shadow: 0 8px 32px 0 rgba(34, 36, 37, 0.2);backdrop-filter: blur(4px);-webkit-backdrop-filter: blur(4px);backdrop-filter: blur(4px);transition: all linear .1s;&:hover {scale: 1.02;background-color: hwb(200 16% 85% / 0.9);background-image: linear-gradient(rgba(255, 255, 255, .02), transparent);border: 3px solid #606060;}&:active {scale: 1.02;background-color: hwb(0 20% 76% / 0.9);background-image: linear-gradient(rgba(255, 255, 255, .02), transparent);border: 3px solid #606060;}}&:nth-of-type(2) {flex: auto;}svg {height: 25px;width: 25px;align-self: center;color: #ACACAC;}p, a, .btn-txt {align-self: center;color: #ACACAC;text-decoration: none;padding: 0;margin: 0;}}&.mobile-nav {p, a, .btn-txt {font-size: .89em;}h1 {font-size: 1.2em;}.mn-top {display: flex;flex-direction: row;position: absolute;left: 0;top: 0;margin: 15px 10px;li:nth-of-type(1) .nav-button {max-width: 125px;width: 25vw;}li:nth-of-type(2) {flex: auto;}}@media only screen and (max-width: 408px) {.mn-top {margin: 10px;}}.mn-bottom {display: flex;justify-content: center;align-content: center;position: absolute;left: 0;bottom: 0;width: 100%;margin: 15px auto;.nav-button {min-width: unset;width: calc(25vw - 15px);max-width: 95px;}li:nth-of-type(2) {flex: none;}}}@media only screen and (min-width: 900px) {&.mobile-nav {display: none;}}@media only screen and (max-width: 900px) {&.desktop-nav {display: none;}&.mobile-nav {display: block;}}}</style>`;
        const c = `<nav class="desktop-nav"><ul role="menubar" aria-label="functions"><li role="presentation"><a href="/" class="nav-button" role="menuitem"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16"><path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/><path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/></svg> <span class="btn-txt">Back to Ship</span></a></li><li role="presentation"><h1 class="puzzle-title">${this.getAttribute("title")}</h1></li><li role="presentation"><button class="nav-button" role="menuitem"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/><path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/></svg> <span class="btn-txt">Audio</span></button></li><li role="presentation"><button class="nav-button" role="menuitem"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal-fill" viewBox="0 0 16 16"><path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5z"/></svg> <span class="btn-txt">Archive</span></button></li><li role="presentation"><button class="nav-button" role="menuitem"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-magic" viewBox="0 0 16 16"><path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z"/></svg> <span class="btn-txt">Hints</span></button></li><li role="presentation"><button class="nav-button" role="menuitem" style="display:${this.getAttribute('is-solveable')=='true' ? 'flex' : 'none' }"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg> <span class="btn-txt">Solve</span></button></li></ul></nav><nav class="mobile-nav"><ul role="menubar" aria-label="functions"><div class="mn-top"><li role="presentation"><a href="/" class="nav-button" role="menuitem"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16"><path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/><path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/></svg> <span class="btn-txt">Back to Ship</span></a></li><li role="presentation"><h1 class="puzzle-title">${this.getAttribute("title")}</h1></li></div><div class="mn-bottom"><li role="presentation"><button class="nav-button" role="menuitem"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/><path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/></svg> <span class="btn-txt">Audio</span></button></li><li role="presentation"><button class="nav-button" role="menuitem"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal-fill" viewBox="0 0 16 16"><path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5z"/></svg> <span class="btn-txt">Archive</span></button></li><li role="presentation"><button class="nav-button" role="menuitem"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-magic" viewBox="0 0 16 16"><path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z"/></svg> <span class="btn-txt">Hints</span></button></li><li role="presentation"><button class="nav-button" role="menuitem" style="display:${this.getAttribute('is-solveable')}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg> <span class="btn-txt">Solve</span></button></li></div></ul></nav>`;
        shadowRoot.innerHTML = `${s}\n${c}`;
    }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
}
customElements.define("mp-nav", Nav);

/* Requires lots of extra JS... will implement if time permits
class Input extends HTMLElement{static formAssociated=!0;static observedAttributes=["field-id","label","placeholder","type","autocomplete"];$input;_attrs={};_internals;_defaultValue="";constructor(){super();this.attachShadow({mode:"open"});this._internals=this.attachInternals(),this._internals.role="textbox",this.tabindex=0}attributeChangedCallback(e,t,o){render()}render(){const e=this.shadowRoot,t=`<div class="form-group"><input class="mp-input" id="${this.getAttribute("field-id")}" placeholder="${this.getAttribute("placeholder")}" name="${this.getAttribute("field-id")}" type="${this.getAttribute("type")}" autocomplete="${this.getAttribute("autocomplete")}" required oninvalid="alert('invalid!')"><label for="${this.getAttribute("field-id")}">${this.getAttribute("label")}</label></div>`;e.innerHTML=`<style>form{display:flex;flex-direction:column;gap:10px;&.start{align-items:flex-start}&.end{align-items:flex-end}}label{display:inline-flex;color:#ACACAC;-webkit-text-stroke-width:1;-webkit-text-stroke-color:#545353;font-family:'Space Mono',sans-serif;font-style:normal;font-weight:700;position:absolute;z-index:2;padding:1.15rem .75rem;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out;margin-bottom:.5rem;font-family:'Space Mono',sans-serif;}[hidden]{display:none!important}.form-text{margin-top:.25rem;font-size:.875em;color:rgba(222,226,230,.75)}.mp-input{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;font-family:'Space Mono',sans-serif;color:white;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.75em;border:2.5px solid #4A4A4A;background:rgba(53,53,53,.90);box-shadow:0 0 10px 0 rgba(0,0,0,.30) inset;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;min-height:calc(2rem + calc(1px * 2));padding-top:1em;line-height:1.5;}@media (prefers-reduced-motion:reduce){.mp-input{transition:none}}.mp-input:focus{font-family:'Space Mono',sans-serif;color:white;background:rgba(65,65,65,.90);border:2.5px solid #757575;outline:0;}.mp-input:disabled,.mp-input::placeholder,.mp-input::-moz-placeholder{color:rgb(98,98,98);opacity:1}.form-group{display:flex;position:relative;width:calc(100% - 20px);margin:0 10px;}@media (prefers-reduced-motion:reduce){.form-group>label{transition:none}}.form-group>.mp-input::placeholder{color:transparent}.form-group>.mp-input::placeholder{color:transparent}.form-group>.mp-input:not(:-moz-placeholder-shown),.form-group>.mp-input:-webkit-autofill,.form-group>.mp-input:focus,.form-group>.mp-input:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem;}.form-group>.mp-input:not(:-moz-placeholder-shown)~label{color:#ACACAC;transform:scale(.75) translateY(-.7rem) translateX(.4rem)}.form-group>.mp-input:focus~label,.form-group>.mp-input:not(:placeholder-shown)~label{color:#ACACAC;transform:scale(.75) translateY(-.7rem) translateX(.4rem)}.form-group>.mp-input:not(:-moz-placeholder-shown)~label::after{position:absolute;inset:1rem .375rem;z-index:-1;height:1.5em;content:"";border-radius:.375rem}.form-group>.mp-input:focus~label::after,.form-group>.mp-input:not(:placeholder-shown)~label::after{position:absolute;inset:1rem .375rem;z-index:-1;height:1.5em;content:"";border-radius:.375rem}.form-group>.mp-input:-webkit-autofill~label{color:#ACACAC;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-group>.mp-input:disabled~label,.form-group>:disabled~label{color:#585858}.form-group>.mp-input:disabled~label::after,.form-group>:disabled~label::after{background-color:#000000}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}@keyframes placeholder-glow{50%{opacity:.2}}@keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0;mask-position:-200% 0}}</style>\n${t}`}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}}
customElements.define("mp-input", Input);
*/

