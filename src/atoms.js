import { atom, selector } from "recoil"; // Importing atom and selector from Recoil

// Atom for network notifications with default value of 102
export const networkAtom = atom({
    key: "networkAtom", // Unique key for this atom
    default: 102 // Default value
});

// Atom for jobs count with default value of 0
export const jobsAtom = atom({
    key: "jobsAtom", // Unique key for this atom
    default: 0 // Default value
});

// Atom for notifications with default value of 12
export const notificationsAtom = atom({
    key: "notificationsAtom", // Unique key for this atom
    default: 12 // Default value
});

// Atom for messaging count with default value of 0
export const messagingAtom = atom({
    key: "messagingAtom", // Unique key for this atom
    default: 0 // Default value
});

// Selector that calculates the total of all notifications
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector", // Unique key for this selector
    get: ({get}) => { // Getter function that computes derived state
        // Getting current values of all notification atoms:
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        // Returning the sum of all notification counts
        return (networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount)
    }
})