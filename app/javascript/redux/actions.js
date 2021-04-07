export const UPDATE = 'UPDATE';
export const UPDATEDOC = 'UPDATEDOC';
export const VIEWCOMMUNITY = 'VIEWCOMMUNITY';
export const ALLCOMMUNITIES = 'ALLCOMMUNITIES';
export const ALLDOCTORS = 'ALLDOCTORS';
export const VIEWCOMMTAB = 'VIEWCOMMTAB';
export const VIEWDOCTAB = 'VIEWDOCTAB';
export const APPOINTMENT = 'APPOINTMENT';
export const SIGNOUT = 'SIGNOUT';

export const updateUser = input => ({
  type: UPDATE,
  input,
});

export const userDoctor = input => ({
  type: UPDATEDOC,
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

export const viewFriendsTab = input => ({
  type: VIEWCOMMTAB,
  input,
});

export const viewDoctorsTab = input => ({
  type: VIEWDOCTAB,
  input,
});

export const chooseDoctor = input => ({
  type: APPOINTMENT,
  input,
});
