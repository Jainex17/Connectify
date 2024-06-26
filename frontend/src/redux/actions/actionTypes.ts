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

  export const getallteamsRequest = createAction('getallteamsRequest');
  export const getallteamsSuccess = createAction('getallteamsSuccess');
  export const getallteamsFail = createAction('getallteamsFail');

  export const createTeamRequest = createAction('createTeamRequest');
  export const createTeamSuccess = createAction('createTeamSuccess');
  export const createTeamFail = createAction('createTeamFail');

  export const getTeamMembersDetailsRequest = createAction('getTeamMembersDetailsRequest');
  export const getTeamMembersDetailsSuccess = createAction('getTeamMembersDetailsSuccess');
  export const getTeamMembersDetailsFail = createAction('getTeamMembersDetailsFail');

  export const clearError = createAction('clearError');
  export const clearSuccessMsg = createAction('clearSuccessMsg');