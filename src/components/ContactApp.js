import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi nilai di dalam state.
        this.state = {
            contacts: getData(),
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    }

    onDeleteEventHandler(id) {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts });
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler} />
            </div>
        )
    }
}

export default ContactApp;