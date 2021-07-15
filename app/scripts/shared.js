/*
 Shared file with utilities and constants
 */

// CSS Styles required to hide various feed items
// Key names should match the checkbox id in the popup.html
export const CSSStyles = {
    releases: `#dashboard .release { display: none; }`,
    stars: `#dashboard .watch_started { display: none; }`,
    follows: `#dashboard .follow { display: none; }`,
    forks: `#dashboard .fork { display: none; }`,
    push: `#dashboard .push { display: none; }`,
};

export const STORAGE_KEY = 'refinedGithubData';
export const STYLE_ID = 'RGHFSavedStyles';


/**
 * Refined GitHub feeds Extension Storage object
 * @typedef {Object} ExtensionSavedData
 * @property {boolean} forks - Forks feed status
 * @property {boolean} stars - Stars feed status
 * @property {boolean} follows - Follows feed status
 * @property {boolean} releases - Releases feed status
 */

/**
 * Initializes the extension's storage and sets the saved
 * data states if this is ran for the first time.
 * Will return the saved states if the storage is already initialized.
 * @return {Promise<ExtensionSavedData>}
 */
export async function InitAndReturnStates() {
    let SavedState;
    const savedData = await browser.storage.local.get(STORAGE_KEY);
    if (savedData && savedData[STORAGE_KEY]) {
        // Read saved state from local storage
        SavedState = savedData[STORAGE_KEY];
    } else {
        // Save state on initial loading
        SavedState = {
            forks: true,
            stars: true,
            follows: true,
            releases: true,
            push: true
        };
        await browser.storage.local.set({
            [STORAGE_KEY]: SavedState
        });
    }
    return SavedState;
}