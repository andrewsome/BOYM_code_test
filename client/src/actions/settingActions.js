import { UPDATE_SETTINGS} from './types';

export const updateSettings = settings => dispatch => {
    fetch('http://localhost:4000/api/settings', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(settings)
    })
    .then(res => res.json())
    .then(setting => 
      dispatch({
            type: UPDATE_SETTINGS,
            payload: setting
      }))
       
}
