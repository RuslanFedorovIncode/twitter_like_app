class Api {
  constructor(props){
    this.url = process.env.REACT_APP_URL_PATH;
  }

  checkResponse(response) {
    if (response.status === 200) {
      return response.json()
    } else {
      throw Error(response.status)
    }
  }

  get(path) {
    return fetch(this.url + path)
      .then(res => this.checkResponse(res))
  }

  delete(path, id) {
    return fetch(this.url + `${path}/${id}`, { method: 'DELETE' })
    .then(res => this.checkResponse(res))
  }
}

export default new Api();