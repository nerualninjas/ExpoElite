export const getLocalStorgeToken = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
  }
  }