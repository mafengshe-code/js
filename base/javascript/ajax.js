function createXHR() {
    var xhr = null;
    try {
        // Firefox, Opera 8.0+, Safari，IE7+
        xhr = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                xhr = null;
            }
        }
    }
    return xhr;
}

var xhr = createXHR();

xhr.open('get', 'http://books.mafengshe.com', true);

xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            alert('success');
            console.log(xhr.responseText)
        } else {
            alert('error');
        }
    }
}
