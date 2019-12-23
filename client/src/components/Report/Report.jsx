import React from 'react';
import Container from '../../Layout/Container';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRotatedResult, getRotations } from "../../actions/calculation";

const Report = () => {
  
  const report = useSelector(state => state.report)
  const result = getRotatedResult(report);
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
export default Report;
