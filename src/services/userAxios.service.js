import InitAxios from "./initAxios";

class UserAxios extends InitAxios {
  constructor() {
    super("/user");
  }

  me(token) {
    return this.axios
      .get("/profile", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data);
  }

  editProfile(id, body) {
    return this.axios
      .put(`/profile/${id}`, body)
      .then((response) => response.data);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new UserAxios();
    }
    return this.instance;
  }
}

export default UserAxios.getInstance();
