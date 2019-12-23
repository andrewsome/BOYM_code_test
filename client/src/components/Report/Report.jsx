import React, { Component } from 'react';
import Container from '../../Layout/Container';
import { Link } from 'react-router-dom';
import { store } from "../../store/store";
import { getRotatedResult, getRotations } from "../../actions/calculation";

class Report extends Component {
  render() {
    const result = getRotatedResult(store.getState().report);
    const rotations = getRotations(result);
    console.log(rotations)
    return (
      <Container>
        <table>
          <tbody>
            <tr>
              <td>Egg</td>
              <td>Was Rotated</td>
            </tr>
            {rotations.map((item, index) => (
              <tr key={index}>
                <td>{item.egg}</td>
                <td>{item.wasRotated}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Link to="/">
          <button>Start Again</button>
        </Link>
      </Container>
    )
  }
}
export default Report;
