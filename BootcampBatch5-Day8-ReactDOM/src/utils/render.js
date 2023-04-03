import ReactDom from "react-dom";

function renderDOM(element, idTag) {
    ReactDom.render(element, document.getElementById(idTag));
}

export default renderDOM;