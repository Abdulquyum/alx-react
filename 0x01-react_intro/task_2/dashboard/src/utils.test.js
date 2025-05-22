import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
    const thisYear = new Date().getFullYear();
    it('should return the current year', () => {
        expect(getFullYear()).toBe(thisYear);
    })
})

describe('getFooterCopy', () => {
    const isIndex = true;
    it('should return the correct text when isIndex is true', () => {
        expect(getFooterCopy(isIndex)).toBe('ALX');
    })
})

describe('getLatestNotification', () => {
    const html = '<strong>Urgent requirement</strong> - complete by EOD';
    it('should return the correct text', () => {
        expect(getLatestNotification()).toBe(html);
    })
})