const api = {
  hostname: "https://api.appworks-school.tw/api/1.0",
  backEndHostname: "https://smillzy.net/api/1.0",
  async getProducts(category, paging) {
    const response = await fetch(
      `${this.backEndHostname}/products/${category}?paging=${paging}`
    );
    return await response.json();
  },
  async getCampaigns() {
    const response = await fetch(`${this.hostname}/marketing/campaigns`);
    return await response.json();
  },
  async searchProducts(keyword, paging) {
    const response = await fetch(
      `${this.backEndHostname}/products/search?keyword=${keyword}&paging=${paging}`
    );
    return await response.json();
  },
  async getProduct(id) {
    const response = await fetch(
      `${this.backEndHostname}/products/details?id=${id}`
    );
    return await response.json();
  },
  async getUserComents(id) {
    const response = await fetch(
      `${this.backEndHostname}/products/details/comment?id=${id}`
    );
    return await response.json();
  },

  async recommendData(id) {
   
    const response = await fetch(
      `https://smillzy.net/python/recommendation?id=${id}`
    ); console.log('1323');
    return await response.json();
  },

  async checkout(data, jwtToken) {
    const response = await fetch(`${this.hostname}/order/checkout`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      }),
      method: "POST",
    });
    return await response.json();
  },
  async signin(data) {
    const response = await fetch(`${this.hostname}/user/signin`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: "POST",
    });
    return await response.json();
  },
  async getProfile(jwtToken) {
    const response = await fetch(`${this.hostname}/user/profile`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async getHistory(uid) {
    const response = await fetch(
      `https://smillzy.net/api/1.0/report/orders?id=${uid}`
    );
    return await response.json();
  },
};

export default api;
