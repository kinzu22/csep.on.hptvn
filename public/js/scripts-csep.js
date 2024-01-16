$(document).ready(function () {
    $('#parent-iframe', window.parent.document).height(
        document.body.scrollHeight
    );
});
document.addEventListener('DOMContentLoaded', function () {
    var iframes = window.parent.document.getElementsByTagName('iframe');

    for (var i = 0; i < iframes.length; i++) {
        var parentIframe = iframes[i];
        if (parentIframe.getAttribute('title') === 'CSEP') {
            if (parentIframe) {
                parentIframe.style.height = document.body.scrollHeight + 'px';
            }
            break;
        }
    }
});
