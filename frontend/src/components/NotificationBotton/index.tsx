import icon from '../../assets/img/notification-icon.svg'
import './Styles.css'
function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
