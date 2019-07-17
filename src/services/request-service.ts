class RequestService {
  get(uri) {
    return fetch(uri).then(res => res.json());
  }

  // other http methods would go below i.e. put, patch, post, etc
}

export default RequestService;
