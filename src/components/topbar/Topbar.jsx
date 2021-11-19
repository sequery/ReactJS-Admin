import './topbar.scss'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import profile_pic from '../../assets/profile.jpeg'

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        SequeryAdmin
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIcons">
                        <Language /> 
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIcons">
                        <Settings />
                    </div>
                    <img src={profile_pic} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;