const API_URL = "http://localhost:8080/"

async function registerUser(credentials) {
  return fetch(`${API_URL}register`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })   
}

async function loginUser(credentials) {
  return fetch(`${API_URL}login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })
}

 async function create(item) {
    return fetch(`${API_URL}items`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
  }

 async function deleted(id) {
    return fetch(`${API_URL}remove/${id}`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async function getItems() {
    return  fetch(`${API_URL}todo`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  
  async function updateItem(id, update,
    ) {
    return fetch(`${API_URL}edit/${id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
     body: JSON.stringify( update
      )
    })
  }

  const Services={registerUser, loginUser,create, deleted, getItems, updateItem}
  export default Services;