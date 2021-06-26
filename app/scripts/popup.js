const { CSSStyles, InitAndReturnStates, STORAGE_KEY } = require('./shared');
let SavedState = null;

async function onLoad() {
    SavedState = await InitAndReturnStates();
    Object.keys(SavedState).forEach((key)=> {
        const checkbox = document.getElementById(key);
        checkbox.checked = SavedState[key];
        checkbox.addEventListener('click', onClickHandler);
    });
}

async function onClickHandler(event) {
    const type = event.target.id;
    SavedState[type] = event.target.checked;
    await browser.tabs.executeScript({
        code: `if (document.querySelector("#rRGHFSavedStyles")) { document.head.removeChild(document.querySelector("#rRGHFSavedStyles"))}`
    });

    const tab = await browser.tabs.query({currentWindow: true, active: true}).then(data=> data[0]);
    if (tab.url.startsWith('https://github.com') || tab.url.startsWith('https://www.github.com')) {
        Object.keys(SavedState).map(async (key)=> {
            const status =  SavedState[key];
            if (!status) {
                await browser.tabs.insertCSS(
                    {
                        code: CSSStyles[key]
                    }
                )
            } else {
                await browser.tabs.removeCSS(
                    {
                        code: CSSStyles[key]
                    }
                )
            }
        });
    }
    // Save data
    await browser.storage.local.set({
        [STORAGE_KEY]: SavedState
    });
}

onLoad();


