enum ContractStatus {
  Permanent, //Starts in 0
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

enum ContractStatus2 {
  Permanent = 1, //Starts in One = 1
  Temp,
  Apprentice,
}

console.log(ContractStatus[employeeStatus]);
