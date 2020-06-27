import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'


class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      food: '',
      ambiance: '',
      punctuality: '',
      happy: '',
      feedback: 'No Feedback'
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, food, ambiance, punctuality, happy, feedback } = steps;

    this.setState({ name, food, ambiance, punctuality, happy, feedback });
  }

  render() {
    const { name, food, ambiance, punctuality, happy, feedback } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <Table responsive striped bordered hover variant="dark" size="lg">
          <thead>
            <th>Category</th>
            <th>Review</th>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>{food.value}</td>
            </tr>
            <tr>
              <td>Ambiance</td>
              <td>{ambiance.value}</td>
            </tr>
            <tr>
              <td>Punctuality</td>
              <td>{punctuality.value}</td>
            </tr>
            <tr>
              <td>Satisfies?</td>
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