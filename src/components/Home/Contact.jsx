export default function Contact({title,avatar,lastMessage,date}) {
    return <div className="contact">
        <div className="contact__avatar" style={{backgroundImage:`url(${avatar})`}}>
        </div> 
        <div className="contact__info">
            <div className="contact__title">{title}</div>
            <div className="contact__last-message">{lastMessage}</div>
        </div>
        <div className="contact__date">{date}</div>
    </div>
}