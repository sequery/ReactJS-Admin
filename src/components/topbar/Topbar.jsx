import './topbar.scss'
import {NotificationsNone} from '@material-ui/icons'

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
                </div>
            </div>
        </div>
    </div>
    )
}

export default Topbar;