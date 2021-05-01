import React from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import Button from "components/CustomButtons/Button.jsx";

import "./forms.css";

const connectbtn = {
  width: 155,
  height: 55
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "505px"
  }
};

Modal.setAppElement("#root");

class MailForm extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalIsOpen2: false,
      modalIsOpen3: false,
      connect_gmail: "https://www.google.com",
      connect_office: "https://www.google.com",
      connect_other: "https://www.google.com"
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);

    this.openModal3 = this.openModal3.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openModal2() {
    this.setState({ modalIsOpen2: true });
  }

  closeModal2() {
    this.setState({ modalIsOpen2: false });
  }

  openModal3() {
    this.setState({ modalIsOpen3: true });
  }

  closeModal3() {
    this.setState({ modalIsOpen3: false });
  }
  render() {
    return (
      <div>
        <div className="email-list">
          <Button color="rose" style={connectbtn} onClick={this.openModal}>
            Connect gmail
          </Button>
          <Button color="rose" style={connectbtn} onClick={this.openModal2}>
            Connect office 365
          </Button>
          <Button color="rose" style={connectbtn} onClick={this.openModal3}>
            Connect other
          </Button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h4 style={{ marginLeft: 52 }}>
            Connecting your account is kind of a big deal.
          </h4>

          <div style={{ marginLeft: 52 }}>
            <NavLink
              className="inactive"
              activeClassName="activeLink"
              exact
              to="/www.google.com"
              style={{ textDecoration: "none" }}
            >
              <Button color="rose">Accept and connect to google</Button>
            </NavLink>

            <Button color="rose" onClick={this.closeModal}>
              Cancel
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={this.state.modalIsOpen2}
          onRequestClose={this.closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h4 style={{ marginLeft: 52 }}>
            Connecting your inbox is kind of a big deal.
          </h4>
          <div style={{ paddingLeft: 2 }}>
            <NavLink
              className="inactive"
              activeClassName="activeLink"
              exact
              to="/www.office360.com"
              style={{ textDecoration: "none" }}
            >
              <Button color="rose">Accept and connect to outlook 365</Button>
            </NavLink>
            <Button color="rose" onClick={this.closeModal2}>
              Cancel
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={this.state.modalIsOpen3}
          onRequestClose={this.closeModal3}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h4 style={{ marginLeft: 52 }}>Connect your inbox to Sales CRM</h4>
          <div style={{ paddingLeft: 52 }}>
            <NavLink
              className="inactive"
              activeClassName="activeLink"
              exact
              to="/www.outlook.com"
              style={{ textDecoration: "none" }}
            >
              <Button color="rose" onClick={this.closeModal3}>
                Continue
              </Button>
            </NavLink>

            <NavLink
              className="inactive"
              activeClassName="activeLink"
              exact
              to="/www.hotmail.com"
              style={{ textDecoration: "none" }}
            >
              <Button color="rose">Choose a different provider</Button>
            </NavLink>
          </div>
        </Modal>
      </div>
    );
  }
}

export default MailForm;
