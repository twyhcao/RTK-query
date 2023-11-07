function Contact({ name, status }) {
    return (
        <li>
            <span className="contact-name">{name}</span>
            <span className="contact-status">
                {status === "SAVING" ? "Saving..." : ""}
            </span>
        </li>
    );
}

export default Contact;