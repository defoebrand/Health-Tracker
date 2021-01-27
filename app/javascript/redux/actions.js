export const UPDATE = 'UPDATE';
export const VIEWCOMMUNITY = 'VIEWCOMMUNITY';
export const ALLCOMMUNITIES = 'ALLCOMMUNITIES';
export const ALLDOCTORS = 'ALLDOCTORS';
export const VIEWTAB = 'VIEWTAB';
export const APPOINTMENT = 'APPOINTMENT';
export const SIGNOUT = 'SIGNOUT';

export const updateUser = input => ({
  type: UPDATE,
  input,
});

export const signOutUser = input => ({
  type: SIGNOUT,
  input,
});

export const viewCommunity = input => ({
  type: VIEWCOMMUNITY,
  input,
});

export const allCommunities = input => ({
  type: ALLCOMMUNITIES,
  input,
});

export const allDoctors = input => ({
  type: ALLDOCTORS,
  input,
});

export const viewTab = input => ({
  type: VIEWTAB,
  input,
});

export const chooseDoctor = input => ({
  type: APPOINTMENT,
  input,
});
