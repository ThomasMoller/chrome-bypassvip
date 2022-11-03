chrome.runtime.sendMessage({"cmd": 'getLink', "message": document.location.href}, function(response) {
    if(response.success) {    
        fetch(chrome.runtime.getURL('/popdown.html')).then(r => r.text()).then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            document.getElementById("bypassvipmessage").innerHTML = `👉 <a href="${response.destination}">${response.destination}</a>`;
        });
    }
});
