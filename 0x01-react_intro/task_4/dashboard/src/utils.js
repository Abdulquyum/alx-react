export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return "ALX";
    }
    return "ALX main dashboard";
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}