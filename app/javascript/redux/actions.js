export const SUBMIT = 'SUBMIT';
export const COMMUNITY = 'COMMUNITY';
export const COMMUNITIES = 'COMMUNITIES';
export const TAB = 'TAB';
export const DOCTORS = 'DOCTORS';
export const DOCTOR = 'DOCTOR';
export const SIGNOUT = 'SIGNOUT';

export const updateUser = input => ({
  type: SUBMIT,
  input,
});

export const signOutUser = input => ({
  type: SIGNOUT,
  input,
});

export const viewCommunity = input => ({
  type: COMMUNITY,
  input,
});

export const allCommunities = input => ({
  type: COMMUNITIES,
  input,
});

export const viewTab = input => ({
  type: TAB,
  input,
});

export const allDoctors = input => ({
  type: DOCTORS,
  input,
});

export const chooseDoctor = input => ({
  type: DOCTOR,
  input,
});
