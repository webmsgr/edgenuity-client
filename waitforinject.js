code = atob("$code")

function inject() {
    if (typeof document.querySelector("#stageFrame").contentWindow.API.Video !== undefined) {
        eval(code) // lmao
        clearInterval(window.injectitv)
    }
}

window.injectitv = setInterval(inject,100)