

function inject() {
  if (typeof document.querySelector("#stageFrame").contentWindow.API.Video !==
      undefined) {
    $.getScript(
        "https://webmsgr.github.io/edgenuity-skipper/release/skipper.min.js")
    clearInterval(window.injectitv)
  }
}

window.injectitv = setInterval(inject, 100)
document.querySelector("#stageFrame")
    .addEventListener("load", (evt) => {setTimeout(inject, 1000)})