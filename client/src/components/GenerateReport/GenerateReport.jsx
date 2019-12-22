import React, { Component } from 'react';
import Container from '../../Layout/Container';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createReports } from  '../../actions/createReportAction';

class GenerateReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toNext: false,
    }
  }

  componentDidMount() {
    this.props.createReports();
  }

  onSubmit = (e) => {
    e.preventDefault();
     this.setState({
      toNext: true,
    })
  }

  render() {
    if (this.state.toNext) {
      return <Redirect to="/report" />
    }
    return (
      <Container>
        <form onSubmit={this.onSubmit}>
          setting saved
          <br/>
          <button type="sumbit">Run</button>
        </form>
      </Container>
    )
  }
}

GenerateReport.propTypes = {
  createReports: PropTypes.func.isRequired,
  reports: PropTypes.object
}

const mapStateToProps = state => ({
  reports: state.report.reports,
});

export default connect(mapStateToProps, { createReports })(GenerateReport);
