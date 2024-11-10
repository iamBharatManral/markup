import parseToHTML from './parser';

function parse(e, viewer) {
  viewer.innerHTML = parseToHTML(e.target.value);
}

function main() {
  const editorElm = document.querySelector('textarea');
  const viewerElm = document.querySelector('aside');
  editorElm.addEventListener('input', (event) => parse(event, viewerElm));
}

document.addEventListener("DOMContentLoaded", main);
