import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import firebase from '../firebase'


class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      food: '',
      ambiance: '',
      punctuality: '',
      happy: '',
      feedback: '',
    };
    this.mode = props.mode==="grey"?"dark":"light"
  }

  componentDidMount() {
    const { steps } = this.props;
    const { name, food, ambiance, punctuality, happy, feedback } = steps;

    this.setState({ name, food, ambiance, punctuality, happy, feedback });
    const feedbackRef=firebase.database().ref('feedback-data');
    const feedbackData={
      "Name": name.value,
      "Food Rating": food.value,
      "Ambiance Rating": ambiance.value,
      "Punctuality Rating": punctuality.value,
      "Satisfied": happy.value,
      "Feedback": feedback.value,
    };
    feedbackRef.push(feedbackData);
  }

  render() {
    const { name, food, ambiance, punctuality, happy, feedback } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <Table responsive striped bordered hover variant="light" size="lg">
          <thead>
            <th>Category</th>
            <th>Answer</th>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>{food.value} out of 5</td>
            </tr>
            <tr>
              <td>Ambiance</td>
              <td>{ambiance.value} out of 5</td>
            </tr>
            <tr>
              <td>Punctuality</td>
              <td>{punctuality.value} out of 5</td>
            </tr>
            <tr>
              <td>Satisfied?</td>
              <td>{happy.value}</td>
            </tr>
            <tr>
              <td>Feedback</td>
              <td>{feedback.value}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
  
  export default Review;