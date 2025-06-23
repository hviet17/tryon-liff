/* eslint-disable no-undef */

let liffCheck = true;
const liffId = '2007617971-5qowXjRw';
const LIFF = {
    initialize: (callback) => {
        liff
            .init({ liffId })
            .then(() => {
                if (!liff.isLoggedIn()) {
                    liff.login();
                    return;
                }
                liffCheck = true;
                callback();
            })
            .catch((e) => {
                window.console.error('Code: ' + e.code + ', Message: ' + e.message);
                liffCheck = false;
                callback();
            });
    },
    getOS: () => {
        return liff.getOS() || '';
    },
    getLanguage: () => {
        return liff.getLanguage() || 'en';
    },
    getAccessToken: () => {
        return liff.getAccessToken();
    },
    closeWindow: () => {
        liff.closeWindow();
    },
    getContext: () => {
        return liff.getContext();
    },
    getLineVersion: () => {
        return liff.getLineVersion() || '11.18.0';
    },
    getProfilePlus: () => {
        const profilePlus = liff.getProfilePlus() || {
            regionCode: 'jp',
        };
        return profilePlus;
    },
    getVersion: () => {
        return liff.getVersion();
    },
    openWindow: (exportEventUrl) => {
        liff.openWindow({
            url: exportEventUrl,
            external: true,
        });
    },
    setLiffCheck: (boo) => {
        liffCheck = boo;
    },
    getLiffCheck: () => {
        return liffCheck;
    },
    getSquareId() {
        const context = liff.getContext();
        return context.squareId || '';
    },
    getChatId() {
        const context = liff.getContext();
        return context.utouId ||
            context.roomId ||
            context.groupId ||
            context.squareChatId || '';
    },
};

export default LIFF;
