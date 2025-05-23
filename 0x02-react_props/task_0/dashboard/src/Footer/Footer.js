import { getFullYear, getFooterCopy } from '../utils';

export default function Footer() {
    return <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
}