try {
    
    chrome.runtime.onMessage.addListener(receiver);

    function receiver(request, sender, sendResponse) {
        if (request.cmd === 'getLink') {
            getLink(request.message).then(bypassResponse => {
                sendResponse(bypassResponse);
            });
        }
        
        return true;
    }
  
} catch (err) {
    console.log(err);
}

async function getLink(url) {

    try {
        const body = JSON.stringify({url: url});
        console.log(body);
        const res = await fetch('https://api.bypass.vip/',
           {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: body
           }
       );
   
      return await res.json();
   
   } catch (error) {
       console.log(error);
   }

   return null;
}