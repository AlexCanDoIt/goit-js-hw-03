const findBestEmployee = function (employees) {
  let nameBestEmployee = '';
  let statsBestEmployee = 0;

  for (const employee in employees) {
    if (statsBestEmployee < employees[employee]) {
      statsBestEmployee = employees[employee];
      nameBestEmployee = employee;
    }
  }

  return nameBestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
