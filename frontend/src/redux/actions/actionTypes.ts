export const createAction = (type: string) => {
    return {
      type: type
    };
  };
  
  export const getusersRequest = createAction('getusersRequest');
  export const getusersSuccess = createAction('getusersSuccess');
  export const getusersFail = createAction('getusersFail');
  