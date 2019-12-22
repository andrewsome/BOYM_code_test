import React, { Component } from 'react';
import Container from '../../Layout/Container';
import { Link } from 'react-router-dom';
import { store } from "../../store/store";
import { get_rotated_result, get_rotations } from "./calculation";


class Report extends Component {
  
  render() {
    const result = get_rotated_result(store.getState().report);
    const rotations = get_rotations(result);
    console.log(result)
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
                <td>{ item.egg }</td>
                <td>{ item.was_rotated }</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>

        <Link to="/">
        <button>Start Again</button>
        </Link>
      </Container>
      )
  }
}
export default Report;
