import { API_URL } from 'config'
import axios from 'axios'

export const getBeachList = async (setBeaches, setOriginalBeaches, history) => {
    await axios.get(API_URL + 'beachlist/').then(
        res => {
            setBeaches((res.data).slice(0,5))
            setOriginalBeaches(res.data);
        }
    ).catch(err => {
        history.push(`/${err.response.status}`)
    })
}

export const getBeach = async (id, setBeach, history) => {
  await axios.get(API_URL + `beach/${id}/`).then(
      res => {
          setBeach(res.data)
      }
  ).catch(err => {
    history.push(`/${err.response.status}`)
  })
}
