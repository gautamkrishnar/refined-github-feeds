export const CSSStyles = {
    releases: `#dashboard .release { display: none; }`,
    stars: `#dashboard .watch_started { display: none; }`,
    follows: `#dashboard .follow { display: none; }`,
    forks: `#dashboard .fork { display: none; }`
};

export const STORAGE_KEY = 'refinedGithubData';
export const STYLE_ID = 'rRGHFSavedStyles';

export async function InitAndReturnStates() {
    let SavedState = null;
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
            releases: true
        };
        await browser.storage.local.set({
            [STORAGE_KEY]: SavedState
        });
    }
    return SavedState;
}