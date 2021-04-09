import {
  basePulse, baseTemp, baseSys, baseDia, baseBloodSugar,
} from './baseData';

const loadUserData = user => {
  if (user.specialty) {
    const {
      id, specialty, name, email,
    } = user;
    return {
      id, specialty, name, email,
    };
  }
  const {
    temperature, pulse, bloodSugar, systolic, diastolic, weight, height,
  } = user;

  const newBMIData = [];
  const newBloodPressureData = [];
  const newTempData = [];
  const newPulseData = [];
  const newBloodSugarData = [];
  let currentBMI = 0;
  const weightData = Object.keys(weight.measurements);
  const tempData = Object.keys(temperature);
  const pulseData = Object.keys(pulse);
  const bloodSugarData = Object.keys(bloodSugar);
  const systolicData = Object.keys(systolic);
  const diastolicData = Object.keys(diastolic);

  const heightForBMI = Number(height.height) * Number(height.height);

  const weightForBMI = key => (
    weight.scale === 'Metric'
      ? Math.round(weight.measurements[key])
      : (703 * Math.round(weight.measurements[key]))
  );

  weightData.forEach((key, index) => {
    newBMIData.push({
      name: key,
      [`${user.name}'s BMI`]: Math.round(weightForBMI(key) / (heightForBMI)).toString(),
      'Ideal BMI': 23,
    });
    if (index === weightData.length - 1) {
      currentBMI = Math.round(weightForBMI(key) / heightForBMI).toString();
    }
  });

  pulseData.forEach(key => {
    Object.entries(pulse[key]).forEach(item => {
      newPulseData.push({
        name: key,
        [`${user.name}'s Pulse`]: item[1],
        'Ideal Pulse': basePulse(user),
      });
    });
  });

  tempData.forEach(key => {
    Object.entries(temperature[key]).forEach(item => {
      newTempData.push({
        name: key,
        [`${user.name}'s Temp`]: item[1],
        'Ideal Temp': baseTemp(user),
      });
    });
  });

  bloodSugarData.forEach(key => {
    Object.entries(bloodSugar[key]).forEach(item => {
      newBloodSugarData.push({
        name: key,
        [`${user.name}'s Blood Sugar`]: item[1],
        'Ideal Blood Sugar': baseBloodSugar(user),
      });
    });
  });

  if (systolicData.length !== 0) {
    systolicData.forEach(key => {
      Object.entries(systolic[key]).forEach(item => {
        newBloodPressureData.push({
          name: key,
          [`${user.name}'s Systolic`]: item[1],
          'Ideal Sys': baseSys(user),
        });
      });
    });
    newBloodPressureData.forEach((entry, index) => {
      diastolicData.forEach(key => {
        Object.entries(diastolic[key]).forEach(item => {
          if (key === newBloodPressureData[index].name) {
            newBloodPressureData[index] = {
              ...newBloodPressureData[index],
              [`${user.name}'s Diastolic`]: item[1],
              'Ideal Dia': baseDia(user),
            };
          }
        });
      });
    });
  }

  return [
    {
      title: `BMI - ${currentBMI}`,
      data: newBMIData,
    },
    {
      title: 'Blood Pressure',
      data: newBloodPressureData,
    },
    {
      title: 'Temperature',
      data: newTempData,
    },
    {
      title: 'Pulse',
      data: newPulseData,
    },
    {
      title: 'Blood Sugar',
      data: newBloodSugarData,
    },
  ];
};

export default loadUserData;
