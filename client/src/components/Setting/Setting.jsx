import React, { Component } from 'react'
import Container from '../../Layout/Container';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSettings } from '../../actions/settingActions';
import PropTypes from 'prop-types';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEggs: "",
      sequence: '',
      rotationAmount: "",
      toNext: false,
    }
  }
  onChange = (e) => {
    const { target: { value, name } } = e;
    if (((name === "numberOfEggs") && (value > 20 || value < 0)) || ((name === "rotationAmount") && (value > 1 || value < 0))) {
      alert('number of egg 0 - 20, rotation amount 0 - 1, or you wont have result');
    }
    // runing out time to do a better validations 
    // if i got more time i will write validation with state object 
    this.setState({
      [name]: value,
    })
  }

  onSubmit = (e) => {
    const { numberOfEggs, sequence, rotationAmount } = this.state;
    e.preventDefault();
    const settings = {
      number_of_eggs: parseInt(numberOfEggs),
      sequence: sequence,
      rotation_amount: parseFloat(rotationAmount),
    }
    this.props.updateSettings(settings);
    this.setState({
      toNext: true
    });
  }

  render() {
    if (this.state.toNext) {
      return <Redirect to="/generatereport" />
    }
    const { numberOfEggs, sequence, rotationAmount } = this.state;
    const isEnabled = numberOfEggs > 0 && rotationAmount > 0 && sequence.length > 0;
    return (
      <Container>
        <form onSubmit={this.onSubmit}>
          <label>Number of Eggs</label>
          <input
            type="number"
            name="numberOfEggs"
            placeholder="5"
            value={this.state.numberOfEggs}
            onChange={this.onChange}
          />
          <label>Rotation Amount</label>
          <input
            type="number"
            name="rotationAmount"
            placeholder="0.25"
            value={this.state.rotationAmount}
            onChange={this.onChange}
          />
          <label>Sequence</label>
          <textarea
            type="number"
            name="sequence"
            placeholder="1 3 5 2 4 4 4 4 2 1 3 4 7"
            value={this.state.sequence}
            onChange={this.onChange}
          />
          <br />
          {/* //runing out time to do a better validation */}
          <button disabled={!isEnabled} type="submit"> Save Setting</button>

        </form>
      </Container>
    )
  }
}

Setting.propTypes = {
  updateSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  settings: state.settings.config
})

export default connect(mapStateToProps, { updateSettings })(Setting);

