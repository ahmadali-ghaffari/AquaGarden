 const apiService = {
  getData: async (URI: string, isAuth: boolean = false) => {
    try {
      const token = JSON.parse(localStorage.getItem('token') as string)
      const fetchURL = process.env.REACT_APP_BASE_BACKEND_URL + URI;

      const customParamsNoAuth = {
        method: "GET",
        mode: 'cors' as RequestMode,
        headers: {
          "Content-type": "application/json",
        },
      };

      const customParamsYesAuth = {
        method: "GET",
        mode: 'cors' as RequestMode,
        headers: {
          "Content-type": "application/json",
          "authorization": `Bearer ${token}`
        },
      };

      let customParams: {} = {};
      if (isAuth) {
        customParams = customParamsYesAuth;
      } else {
        customParams = customParamsNoAuth;
      }

      const response = await fetch(fetchURL, customParams);
      if (!response.ok) {
        throw Error('could not fetch the data!');
      }
      const data: any = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    };
  },
  patchData: async (URI: string, isAuth: boolean = false) => {
    try {
      const fetchURL = process.env.REACT_APP_BASE_BACKEND_URL + URI;
      const token = JSON.parse(localStorage.getItem('token') as string)

      const customParamsNoAuth = {
        method: "PATCH",
        mode: 'cors' as RequestMode,
        headers: {
          "Content-type": "application/json",
        },
      };

      const customParamsYesAuth = {
        method: "PATCH",
        mode: 'cors' as RequestMode,
        headers: {
          "Content-type": "application/json",
          "authorization": `Bearer ${token}`
        },
      };

      let customParams: {} = {};
      if (isAuth === true) {
        customParams = customParamsYesAuth;
      } else {
        customParams = customParamsNoAuth;
      }

      const response = await fetch(fetchURL, customParams);
      if (!response.ok) {
        throw Error('could not fetch the data!');
      }
      const data: any = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    };
  },
  postData : async (URI: string, body: any, isAuth: boolean = false) => {
    try {
      const fetchURL = process.env.REACT_APP_BASE_BACKEND_URL + URI;
      const token = JSON.parse(localStorage.getItem('token') as string)

      const customParamsNoAuth = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      };

      const customParamsYesAuth = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body),
      };

      let customParams: {} = {};
      if (isAuth === true) {
        customParams = customParamsYesAuth;
      } else {
        customParams = customParamsNoAuth;
      }

      const response = await fetch(fetchURL, customParams);
      if (!response.ok) {
        const resultForErrorMessage = await response.json();
        return resultForErrorMessage
      }
      const data: any = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    };
  },
  modifyData : async (URI: string, isAuth: boolean = false) => {
    try {
      const fetchURL = process.env.REACT_APP_BASE_BACKEND_URL + URI;
      const token = JSON.parse(localStorage.getItem('token') as string)

      const customParamsNoAuth = {
        method: "PUT",
        headers: { "Content-type": "application/json" },
      };

      const customParamsYesAuth = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "authorization": `Bearer ${token}`
        },
      };

      let customParams: {} = {};
      if (isAuth === true) {
        customParams = customParamsYesAuth;
      } else {
        customParams = customParamsNoAuth;
      }

      const response = await fetch(fetchURL, customParams);
      if (!response.ok) {
        const resultForErrorMessage = await response.json();
        return resultForErrorMessage
      }
      const data: any = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    };
  }

};

export default apiService;
