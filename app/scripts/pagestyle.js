/*
 This file will be executed on Github.com when you visit the site
 */

import {InitAndReturnStates, CSSStyles, STYLE_ID} from "./shared";

/**
 * This function will be executed on Github.com, it will create a
 * <style></style> tag with all the styles generated with the feature
 * flags that user configured via the extension and appends the generated
 * style tag to the document.head
 * @return {Promise<void>}
 */
async function setRGHFSavedStyles() {
    const savedState = await InitAndReturnStates();
    const extStyle = document.createElement('style');
    extStyle.id = STYLE_ID; // Assigning Id for easy removal
    Object.keys(savedState).forEach((key)=> {
        // Generating style sheet based on saved extension settings
        const status = savedState[key];
        if (!status) {
            extStyle.textContent =  `\n` + extStyle.innerText + CSSStyles[key] + '\n';
        }
    });
    document.getElementsByTagName("head")[0].appendChild(extStyle);
}

setRGHFSavedStyles();