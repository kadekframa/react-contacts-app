import React from "react";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state.
        this.state = {
            name: '',
            tag: '',
        }

        // binding this.
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                name: event.target.value,
            }
        });
    }

    onTagChangeEventHandler(event) {
        this.setState((prevState) =>{
            return {
                ...prevState,
                tag: event.target.value,
            }
        });
    }

    onSubmitChangeEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmitChangeEventHandler}>
                <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}
export default ContactInput;
