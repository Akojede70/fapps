const api = {
    req:  async (url: string, method: string | undefined = 'GET', body: object | null = null, token: string | null = null) => {
      try {
        const options: RequestInit =  {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        };
  
        if (body) options.body = JSON.stringify(body);
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
      } catch (e: any) {
        return e.response ? e.response.data : {
          status: 'failure',
          responseCode: '01',
          responseMessage: 'Network Error'
        };
      }
    },
  };
  
  export default api;
  