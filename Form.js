import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import Popup from "reactjs-popup";
import { ThemeProvider } from "styled-components";
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      event: '',
      price: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, event, price } = steps;

    this.setState({ name, event, price });
  }

  render() {
    const { name, event, price } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Event</td>
              <td>{event.value}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{price.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    const config = {
      width: "100%",
      height: "100%",
      // floating: true
    };
  
    const theme = {
      background: "white",
      fontFamily: "Arial, Helvetica, sans-serif",
      headerBgColor: "#00B2B2",
      headerFontColor: "#fff",
      headerFontSize: "25px",
      botBubbleColor: "#00B2B2",
      botFontColor: "#fff",
      userBubbleColor: "#fff",
      userFontColor: "#4c4c4c"
    };
    return (
      <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! Choose the event?',
            trigger: 'event',
          },
          {
            id: 'event',
            options: [
              { value: 'Marraige', label: 'Marraige', trigger: '5' },
              { value: 'Birthday', label: 'Birthday', trigger: '5' },
            ],
          },
          {
            id: '5',
            component: (  <Popup trigger={<button className="button"> Open Modal </button>} modal>
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                  Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                  delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                  commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                  explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <Popup
                    trigger={<button className="button"> Trigger </button>}
                    position="top center"
                    closeOnDocumentClick
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                      magni omnis delectus nemo, maxime molestiae dolorem numquam
                      mollitia, voluptate ea, accusamus excepturi deleniti ratione
                      sapiente! Laudantium, aperiam doloribus. Odit, aut.
                    </span>
                  </Popup>
                  <button
                    className="button"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
          ),
            trigger: 'price',
          },
          {
            id: 'price',
            options: [
                { value: '25000-30000', label: 'low', trigger: '7' },
                { value: '30000-40000', label: 'high', trigger: '7' },
              ],
            
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}{...config}
      />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
