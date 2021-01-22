export const basePulse = user => {
  if (user.age > 65) {
    return 80;
  } if (user.age > 20) {
    return 60;
  } if (user.age > 12) {
    return 80;
  } if (user.age > 5) {
    return 100;
  } if (user.age > 2) {
    return 115;
  } if (user.age > 1) {
    return 125;
  }
  return 135;
};

export const baseTemp = user => {
  if (user.age > 10 && user.age < 65) {
    return 37;
  }
  return 36;
};

export const baseSys = user => {
  if (user.age > 59) {
    return 134;
  } if (user.age > 54) {
    return 131;
  } if (user.age > 49) {
    return 129;
  } if (user.age > 44) {
    return 127;
  } if (user.age > 39) {
    return 125;
  } if (user.age > 34) {
    return 123;
  } if (user.age > 29) {
    return 122;
  } if (user.age > 24) {
    return 121;
  } if (user.age > 19) {
    return 120;
  }
  return 117;
};

export const baseDia = user => {
  if (user.age > 59) {
    return 87;
  } if (user.age > 54) {
    return 86;
  } if (user.age > 49) {
    return 85;
  } if (user.age > 44) {
    return 84;
  } if (user.age > 39) {
    return 83;
  } if (user.age > 34) {
    return 82;
  } if (user.age > 29) {
    return 81;
  } if (user.age > 24) {
    return 80;
  } if (user.age > 19) {
    return 79;
  }
  return 77;
};

export const baseBloodSugar = user => {
  if (user.age > 19) {
    return 5.0;
  } if (user.age > 12) {
    return 6.1;
  }
  return 7.2;
};
