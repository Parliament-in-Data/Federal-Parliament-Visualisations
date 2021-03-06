// Load the Observable runtime and inspector.
import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

const notebook = window._datavis_notebook;

// Load the notebook, observing its cells with a default Inspector that simply
// renders the value of every cell into the provided DOM node.
const runtime = new Runtime();

const main = runtime.module(notebook, name => {
    if (name === 'links') {
        return {
            fulfilled(links) {
                const container = document.getElementById('link-container');
                container.innerHTML = '';
                for (const link of links) {
                    const a = document.createElement('a');
                    a.className = "link dim white dib mr3 ttu";
                    a.innerText = link.title;
                    a.href = link.href;
                    container.appendChild(a);
                }
            }
        };
    }
    return Inspector.into(document.getElementById("content"))();
});

// Redefine the navitation URIs
main.redefine("index_url", `${window.location.origin}/`);
main.redefine("party_url", `${window.location.origin}/party.html`);
main.redefine("member_url", `${window.location.origin}/member.html`);
main.redefine("meeting_url", `${window.location.origin}/meeting.html`);
main.redefine("search_url", `${window.location.origin}/search.html`);

// This code enables the development API environment
if (window.location.origin === "https://parlement-in-data-dev.thundr.be") {
    main.redefine("API_BASE", "https://parlement-dev.thundr.be");
}

function resizeHandler(_e) {
    function pxToNr(px) {
        return +px.slice(0, -2);
    }
    const computedStyle = window.getComputedStyle(document.getElementById('content'));
    main.redefine("width", pxToNr(computedStyle.width) - (pxToNr(computedStyle.paddingLeft) + pxToNr(computedStyle.paddingRight)));
}
resizeHandler(null);
window.addEventListener('resize', resizeHandler);
