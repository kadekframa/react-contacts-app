import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi nilai di dalam state.
        this.state = {
            contacts: getData(),
        }

        // Bind nilai this.
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    onDeleteEventHandler(id) {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts });
    }

    onAddContactHandler({ name, tag }) {
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: '/images/default.jpg',
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Aplikasi Kontak</h1>
                <h2>Tambah Data Kontak</h2>
                <ContactInput addContact={this.onAddContactHandler} />

                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler} />
            </div>
        )
    }
}

export default ContactApp;