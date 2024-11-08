function camelize(str) {
    return str.replaceAll("-", "").replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

// Navigation Bar
class Nav extends HTMLElement {
    static observedAttributes = ["title", "is-solveable"];
    constructor() { super() }

    attributeChangedCallback(name, oldValue, newValue) { render() }

    render() {
        this.innerHTML = `<style>@import "stories/nav.css"</style>
<nav class="desktop-nav">
    <ul role="menubar" aria-label="functions">
        <li role="none">
            <a href="/" class="nav-button" role="menuitem">
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z" />
                    <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925" />
                </svg>
                <p>Back to Ship</p>
            </a>
        </li>
        <li role="none">
            <h1 class="puzzle-title" role="none" aria-label="">${this.getAttribute("title")}</h1>
        </li>
        <li role="none">
            <button class="nav-button" role="menuitem">
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                    <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                    <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
                </svg>
                <p>Audio</p>
            </button>
        </li>
        <li role="none">
            <button class="nav-button" role="menuitem">
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal-fill" viewBox="0 0 16 16">
                    <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5z" />
                </svg>
                <p>Archive</p>
            </button>
        </li>
        <li role="none">
            <button class="nav-button" role="menuitem">
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-magic" viewBox="0 0 16 16">
                    <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z" />
                </svg>
                <p>Hints</p>
            </button>
        </li>
        <li role="none">
            <button class="nav-button" role="menuitem" style="display:${this.getAttribute("is-solveable") == "true" ? "flex" : "none"}">
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                <p>Solve</p>
            </button>
        </li>
    </ul>
</nav>
<nav class="mobile-nav">
    <ul role="menubar" aria-label="functions">
        <div class="mn-top">
            <li role="none">
                <a href="/" class="nav-button" role="menuitem">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z" />
                        <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925" />
                    </svg>
                    <p>Back to Ship</p>
                </a>
            </li>
            <li role="none">
                <h1 class="puzzle-title" role="none" aria-label="">${this.getAttribute("title")}</h1>
            </li>
        </div>
        <div class="mn-bottom">
            <li role="none">
                <button class="nav-button" role="menuitem">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                        <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                        <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
                    </svg>
                    <p>Audio</p>
                </button>
            </li>
            <li role="none">
                <button class="nav-button" role="menuitem">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal-fill" viewBox="0 0 16 16">
                        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5z" />
                    </svg>
                    <p>Archive</p>
                </button>
            </li>
            <li role="none">
                <button class="nav-button" role="menuitem">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-magic" viewBox="0 0 16 16">
                        <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z" />
                    </svg>
                    <p>Hints</p>
                </button>
            </li>
            <li role="none">
                <button class="nav-button" role="menuitem" style="display:${this.getAttribute("is-solveable")}">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    <p>Solve</p>
                </button>
            </li>
        </div>
    </ul>
</nav>`;
    }

    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
}

customElements.define("mp-nav", Nav);


// Navigation Bar
class Hints extends HTMLElement {
    constructor() {
        super();
        this.value = this.hasAttribute('value');
    }


    render() {
        // const title = this.getAttribute('puzzle-title');
        // const solveable = this.getAttribute('is-solveable') == "true" ? "flex" : "none";
        this.innerHTML = `
        <style>
                    .dialog-menu,
            .dialog-menu[open].dialog-menu--closing{
            position: fixed;
            transition: .3s;
            margin: 0;
            margin-left: auto;
            min-height: 100vh;
            width: 400px;
            max-width: 80%;
            transform: translateX(100%);
            }
            .dialog-menu[open] {
            display: flex;
            margin: 0;
            margin-left: auto;
            flex-direction: column;
            transform: translateX(0);
            transition: .3s;
            }

            .close-dialog {
            margin-left: auto;
            

            .dialog-menu {
            background-color: darkolivegreen;
            }

            ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    }
                    li {
                    margin-top: var(--spacing);
                    }
                    li + li {
                    border-top: 1px solid white;
                    }
                    a {
                    display: block;
                    padding-block: 1rem; 
                    text-decoration: none;
                    color: white;
                    }

        </style>

        <button class="open-dialog">Open Hint</button>
        <dialog class="dialog-menu">
            <button class="close-dialog">Close Dialog</button>
                <nav>
                    <ul>
                    <li><a href="https://example.com/about">About </a></li>
                    <li><a href="https://example.com/blog">Blog</a></li>
                    <li><a href="https://example.com/services">Services</a></li>
                    <li><a href="https://example.com/contact">Contact</a></li>
                    </ul>
                </nav>
        </dialog>

        <script>
        const dialogMenu = document.querySelector(".dialog-menu");
        const dialogMenuCloseButton = document.querySelector(".close-dialog");
        const dialogMenuOpenButton = document.querySelector(".open-dialog");

        dialogMenuOpenButton.addEventListener("click", () => {
        dialogMenu.style.display = "flex";
        setTimeout(() => {
            dialogMenu.showModal();
        }, 100);
        });


        dialogMenuCloseButton.addEventListener('click', () => {
        dialogMenu.classList.add("dialog-menu--closing");
        setTimeout(() => {
            dialogMenu.close();
            dialogMenu.style.display = "none";
            dialogMenu.classList.remove("dialog-menu--closing");
        }, 100);
        });

        </script>
        `

    }

    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
}

customElements.define("mp-hints", Hints);