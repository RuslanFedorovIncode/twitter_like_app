const url = process.env.REACT_APP_URL_PATH;

class Api {

  checkResponse(response) {
    if (response.status === 200) {
      return response.json()
    } else {
      throw Error(response.status)
    }
  }

  get(path) {
    return fetch(url + path)
      .then(res => this.checkResponse(res))
  }

  delete(path, id) {
    return fetch(url + path + '/' + id, { method: 'DELETE' })
    .then(res => this.checkResponse(res))
  }
}

export default new Api();