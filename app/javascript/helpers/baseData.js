export const basePulse = ({ age }) => {
  if (age > 65) {
    return 80;
  } if (age > 20) {
    return 60;
  } if (age > 12) {
    return 80;
  } if (age > 5) {
    return 100;
  } if (age > 2) {
    return 115;
  } if (age > 1) {
    return 125;
  }
  return 135;
};

export const baseTemp = ({ age, weight }) => {
  if (weight.scale === 'Metric') {
    if (age > 10 && age < 65) {
      return 37;
    }
    return 36;
  }
  if (age > 10 && age < 65) {
    return 99;
  }
  return 97;
};

export const baseSys = ({ age }) => {
  if (age > 59) {
    return 134;
  } if (age > 54) {
    return 131;
  } if (age > 49) {
    return 129;
  } if (age > 44) {
    return 127;
  } if (age > 39) {
    return 125;
  } if (age > 34) {
    return 123;
  } if (age > 29) {
    return 122;
  } if (age > 24) {
    return 121;
  } if (age > 19) {
    return 120;
  }
  return 117;
};

export const baseDia = ({ age }) => {
  if (age > 59) {
    return 87;
  } if (age > 54) {
    return 86;
  } if (age > 49) {
    return 85;
  } if (age > 44) {
    return 84;
  } if (age > 39) {
    return 83;
  } if (age > 34) {
    return 82;
  } if (age > 29) {
    return 81;
  } if (age > 24) {
    return 80;
  } if (age > 19) {
    return 79;
  }
  return 77;
};

export const baseBloodSugar = ({ age }) => {
  if (age > 19) {
    return 5.0;
  } if (age > 12) {
    return 6.1;
  }
  return 7.2;
};
