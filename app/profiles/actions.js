import axios from 'axios'

export function getProfile(){
  const url = `https://api.backendless.com/221BAB21-F149-D2B2-FF55-B2DD8ECDFE00/31717453-DFFE-7469-FF91-D1EAC0C16700/data/profiles/564DD7D4-4F12-B56A-FFD5-1E4B0E7D9D00?loadRelations=experiences%2Ceducations`

  return {
    type: 'GET_PROFILE',
    payload: axios.get(url)
  }
}
