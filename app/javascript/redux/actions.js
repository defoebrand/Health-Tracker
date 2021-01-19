export const SUBMIT = 'SUBMIT';
export const COMMUNITY = 'COMMUNITY';

export const updateUser = input => ({
  type: SUBMIT,
  input,
});

export const viewCommunity = input => ({
  type: COMMUNITY,
  input,
});
