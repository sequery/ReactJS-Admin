import './topbar.scss'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

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
                    <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-dick-697509.jpg&fm=jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;