var pageLoadTime = new Date().getTime()

function reloadIfSourceChanged() {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.responseText == 'true') {
                window.location.reload()
            }
            else {
                setTimeout(reloadIfSourceChanged, 200)
            }
        }
    }
    relativeRoot = window.location.pathname.split('/')
    relativeRoot.pop()
    request.open('GET', relativeRoot.join("/") + '/__source_changed?since=' + pageLoadTime, true)
    request.send()
}

window.onload = reloadIfSourceChanged
