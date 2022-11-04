chrome.runtime.sendMessage({"cmd": 'getLink', "message": document.location.href}, function(response) {
    if(response.success) {    
        fetch(chrome.runtime.getURL('/popdown.html')).then(r => r.text()).then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            document.getElementById("bypassviplink").innerHTML = `<a href="${response.destination}">${response.destination}</a>`;
            document.getElementById("bypassvip-image").src = chrome.runtime.getURL("images/icon-48.png");
            document.getElementById("bypassvip-close").addEventListener("click", function() {
                document.getElementById('bypassvipmessage').className = 'bypassvip-slide-up';
                setTimeout(() => {
                    document.getElementById("bypassvipmessage").style.display = 'none';
                  }, 500);
            });

            document.getElementById('bypassvipmessage').className = 'bypassvip-slide-down';
        });
    }
});
