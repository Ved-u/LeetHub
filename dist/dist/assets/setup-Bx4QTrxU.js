const r="src/setup/index.html";function n(e){const t=chrome.runtime.getURL(r)+(e?`#${e}`:"");return chrome.tabs.create({url:t})}export{r as S,n as o};
