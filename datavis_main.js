// Load the Observable runtime and inspector.
import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

const notebook = window._datavis_notebook;

// Load the notebook, observing its cells with a default Inspector that simply
// renders the value of every cell into the provided DOM node.
const runtime = new Runtime();

const main = runtime.module(notebook, name => {
    if(name === 'links') {
        return {fulfilled(links) {
            const container = document.getElementById('link-container');
            container.innerHTML = '';
            for(const link of links) {
                const a = document.createElement('a');
                a.className = "link dim white dib mr3 ttu";
                a.innerText = link.title;
                a.href = link.href;
                //a.title = link.title; // Useless?
                container.appendChild(a);
            }
        }};
    }
    return Inspector.into(document.getElementById("content"))();
});

// Note: no leading / to be able to host on subdir
main.redefine("index_url", 'index.html');
main.redefine("party_url", 'party.html');
main.redefine("member_url", "member.html");
main.redefine("meeting_url", "meeting.html");

function resizeHandler(_e) {
    function pxToNr(px) {
        return +px.slice(0, -2);
    }
    const computedStyle = window.getComputedStyle(document.getElementById('content'));
    main.redefine("width", pxToNr(computedStyle.width) - (pxToNr(computedStyle.paddingLeft) + pxToNr(computedStyle.paddingRight)));
}
resizeHandler(null);
window.addEventListener('resize', resizeHandler);
