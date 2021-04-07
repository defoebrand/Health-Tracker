const axios = require('axios');

export const getAllCommunities = () => {
  const allCommunitiesFunc = () => {
    const url = 'https://defoebrand-health-tracker.herokuapp.com/communities';
    try {
      const response = axios.get(url, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = response.then(res => res.data);
      return data;
    } catch {
      throw new Error('Failed to Retrieve Communities.');
    }
  };
  return allCommunitiesFunc;
};

export const getCommunityMembers = community => {
  const communityMemmbersFunc = () => {
    const url = `https://defoebrand-health-tracker.herokuapp.com/communities/${community.id}`;
    try {
      const response = axios.get(url, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = response.then(res => res.data);
      return data;
    } catch {
      throw new Error('Network Response Failed.');
    }
  };
  return communityMemmbersFunc;
};

export const adjustMembership = (community, token) => {
  const adjustMembershipFunc = () => {
    const url = `https://defoebrand-health-tracker.herokuapp.com/communities/${community.id}`;
    try {
      const response = axios.patch(url, {}, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.then(res => res.data);
      return data;
    } catch {
      throw new Error('Please Log In First.');
    }
  };
  return adjustMembershipFunc;
};
