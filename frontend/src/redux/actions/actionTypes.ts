export const createAction = (type: string) => {
    return {
      type: type
    };
  };
  
  export const getusersRequest = createAction('getusersRequest');
  export const getusersSuccess = createAction('getusersSuccess');
  export const getusersFail = createAction('getusersFail');

  export const deleteuserRequest = createAction('deleteuserRequest');
  export const deleteuserSuccess = createAction('deleteuserSuccess');
  export const deleteuserFail = createAction('deleteuserFail');
  
  export const searchuserRequest = createAction('searchuserRequest');
  export const searchuserSuccess = createAction('searchuserSuccess');
  export const searchuserFail = createAction('searchuserFail');
  
  export const filterUserRequest = createAction('filteruserRequest');
  export const filterUserSuccess = createAction('filteruserSuccess');
  export const filterUserFail = createAction('filteruserFail');

  export const updateUserRequest = createAction('updateUserRequest');
  export const updateUserSuccess = createAction('updateUserSuccess');
  export const updateUserFail = createAction('updateUserFail');
