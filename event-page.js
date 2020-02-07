let contextMenuItems = {
  id: 'launch-ym',
  title: 'Launch Yellow Messenger'
};

try {
  chrome.contextMenus.create(contextMenuItems);
} catch (error) {
  console.log(error);
}

chrome.contextMenus.onClicked.addListener(function(clickData) {
  if (clickData.menuItemId == 'launch-ym') {
    chrome.tabs.query(
      {
        active: true
      },
      function(tabs) {
        console.log(tabs);
        if (tabs) {
          let url = tabs[0].url;
          let origin = new URL(url).origin;

          chrome.cookies.getAll(
            {
              url: origin
            },
            function callback(cookieDetails) {
              chrome.tabs.executeScript(
                {
                  code: 'let cookies = ' + JSON.stringify(cookieDetails) + ';'
                },
                function() {
                  chrome.tabs.executeScript(
                    {
                      code: 'let origin = ' + origin + ';'
                    },
                    function() {
                      chrome.tabs.executeScript({
                        file: 'script.js'
                      });
                    }
                  );
                }
              );
            }
          );
        }
      }
    );
  }
});
