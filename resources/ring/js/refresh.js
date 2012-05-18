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
    request.open('GET', '/__source_changed', true)
    request.send()
}

window.onload = reloadIfSourceChanged
