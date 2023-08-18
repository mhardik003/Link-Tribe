// chrome.action.onClicked.addListener(async (tab) => {
//     await chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: executeScriptInTab
//     });
//   });
  
//   function executeScriptInTab() {
//     chrome.scripting.insertCSS({
//       code: "body { border: 10px solid red; }" // Example: Add a red border to the body
//     });
  
//     const htmlContent = document.documentElement.outerHTML;
//     console.log(htmlContent);
//   }
  