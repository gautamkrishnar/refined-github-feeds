import {InitAndReturnStates, CSSStyles, STYLE_ID} from "./shared";

async function setRGHFSavedStyles() {
    const savedState = await InitAndReturnStates();
    const extStyle = document.createElement('style');
    extStyle.id = STYLE_ID;
    Object.keys(savedState).map(async (key)=> {
        const status = savedState[key];
        if (!status) {
            extStyle.textContent =  extStyle.innerText + CSSStyles[key] + '\n\n';
        }
    });
    document.getElementsByTagName("head")[0].appendChild(extStyle);
}

setRGHFSavedStyles();