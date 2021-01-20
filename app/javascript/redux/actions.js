export const SUBMIT = 'SUBMIT';
export const COMMUNITY = 'COMMUNITY';
export const COMMUNITIES = 'COMMUNITIES';
export const TAB = 'TAB';

export const updateUser = input => ({
  type: SUBMIT,
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
