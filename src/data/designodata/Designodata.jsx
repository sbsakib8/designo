import { RiDashboardLine } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";
import { BiVideoRecording } from "react-icons/bi";
import { VscCommentDiscussion } from "react-icons/vsc";
import { FaRegFolderClosed } from "react-icons/fa6";
import { LiaStickyNoteSolid } from "react-icons/lia";
import { IoDownloadOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

const Designodata = [
    {
        key: 'Deshboard',
        label: 'Deshboard',
        path: '/',
        icon: <RiDashboardLine/>
    },
    {
        key: 'Assignments',
        label: 'Assignments',
        path: '/Assignments',
        icon:  <MdAssignment/>,
    },
    {
        key: 'Schedule',
        label: 'Schedule',
        path: '/Schedule',
        icon: <GrSchedule/>,
    },
    {
        key: 'Recordings',
        label: 'Recordings',
        path: '/Recordings',
        icon: <BiVideoRecording/>,
    },
    {
        key: 'Discussions',
        label: 'Discussions',
        path: '/Discussions',
        icon: <VscCommentDiscussion/>,
    },
    {
        key: 'Resources',
        label: 'Resources',
        path: '/Resources',
        icon: <FaRegFolderClosed/>,
    },
    {
        key: 'Notes',
        label: 'Notes',
        path: '/Notes',
        icon: <LiaStickyNoteSolid/>,
    },
    {
        key: 'Downloads',
        label: 'Downloads',
        path: '/Downloads',
        icon: <IoDownloadOutline/>,
    },
    {
        key: 'Classes',
        label: 'Classes',
        path: '/Classes',
        icon: <SiGoogleclassroom/>,
    },
    {
        key: 'Courses',
        label: 'Courses',
        path: '/Courses',
        icon: <PiStudent/>,
    },
    {
        key: 'Settings',
        label: 'Settings',
        path: '/Settings',
        icon: <CiSettings/>,
    },
]
export default Designodata;