export const isMac = () => {
    return navigator.platform.toUpperCase().indexOf("MAC") > -1;
};

// Mac，Windows 快捷键展示
export const updateHotkeyTip = (hotkey: string) => {
    if (isMac()) {
        return hotkey;
    }

    const KEY_MAP = new Map(Object.entries({
        "⌘": "Ctrl",
        "⌃": "Ctrl",
        "⇧": "Shift",
        "⌥": "Alt",
        "⇥": "Tab",
        "⌫": "Backspace",
        "⌦": "Delete",
        "↩": "Enter",
    }));

    const keys = [];

    if ((hotkey.indexOf("⌘") > -1 || hotkey.indexOf("⌃") > -1)) keys.push(KEY_MAP.get("⌘"));
    if (hotkey.indexOf("⇧") > -1) keys.push(KEY_MAP.get("⇧"));
    if (hotkey.indexOf("⌥") > -1) keys.push(KEY_MAP.get("⌥"));

    // 不能去最后一个，需匹配 F2
    const lastKey = hotkey.replace(/⌘|⇧|⌥|⌃/g, "");
    if (lastKey) {
        keys.push(KEY_MAP.get(lastKey) || lastKey);
    }

    return keys.join("+");
};