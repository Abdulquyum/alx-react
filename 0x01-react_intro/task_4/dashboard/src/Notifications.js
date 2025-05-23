import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

const Notifications = () => {
    return <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
        </ul>
        <button 
            style={{ position: 'absolute', right: 0, top: 0}} 
            aria-label="close"
            onClick={() => console.log("Close button has been clicked")}>
                <img src={closeIcon} alt="close icon" style={{ width: '15px', height: '15px'}} />
        </button>
    </div>
}

export default Notifications;