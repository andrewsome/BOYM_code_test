import { GET_REPORT } from './types';

export const createReports = reports => dispatch => {
  fetch("http://localhost:4000/api/run", {
    method: 'POST',
    headers:
    {
      'content-type': 'application/json'
    },
    body: JSON.stringify(reports)
  })
    .then(res => res.json())
    .then(report => dispatch({
      type: GET_REPORT,
      payload: report
    }));
}
