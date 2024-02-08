// utils/timeUtils.js
export function formatTimeDifference(timestamp) {
    const now = new Date();
    const diffMs = now - new Date(timestamp);
    const diffMinutes = Math.floor(diffMs / (1000 * 60)); // Convert milliseconds to minutes
    const diffHours = Math.floor(diffMinutes / 60); // Convert minutes to hours

    if (diffHours > 0) {
        return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    } else {
        return `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
    }
}



// uses  
// 1st-- import { formatTimeDifference } from '@/utils/timeUtils'
// 2nd -- {formatTimeDifference(data.createdTime)}