$(document).ready(function () {
    $('#parent-iframe', window.parent.document).height(
        document.body.scrollHeight
    );
});
document.addEventListener('DOMContentLoaded', function () {
    var parentIframe = window.parent.document.getElementById('parent-iframe');

    if (parentIframe) {
        parentIframe.style.height = document.body.scrollHeight + 'px';
    }
});
