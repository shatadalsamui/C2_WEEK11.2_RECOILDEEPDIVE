
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'
import { useMemo } from 'react'
//RecoilRoot
function App() {
    return <RecoilRoot>{/* RecoilRoot provides the state context to all child components */}
        <MainApp />{/* The main application component */}
    </RecoilRoot>
}
// Main App component that wraps everything with RecoilRoot
function MainApp() {// MainApp component that displays the notification counts
    // Using Recoil hooks to get current values of atoms and selector:.

    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const notificationsAtomCount = useRecoilValue(notificationsAtom)
    const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom)
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);
    // const totalNotificationCount = useMemo(() => {
    //   return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    // }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount])

    return (
        <>
            <button>Home</button>

            <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
            <button>Jobs( {jobsAtomCount})</button>
            <button>Messaging ({messagingAtomCount})</button>
            <button>Notifications ({notificationsAtomCount})</button>

            <button onClick = {()=>{setMessagingAtomCount(messagingAtomCount+1);
                }}>Me</button>
        </>
    )
}

export default App
