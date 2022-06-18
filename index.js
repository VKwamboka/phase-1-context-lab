/* Your Code Here */
//create employee record
function createEmployeeRecord ([firstName,familyName,title,payRatePerHour]){
    const empData = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payRatePerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return empData
}

//create employee records
const createEmployeeRecords = (arr) => {
    let employeeArray = arr.map(records =>{
        return createEmployeeRecord(records)
    })
    return employeeArray
}

//create time in 
function createTimeInEvent(timeStamp) {
    const duration = {
      type: "TimeIn",
      hour: parseInt(timeStamp.slice(11)),
      date: timeStamp.slice(0, 10),
    };
    this.timeInEvents.push(duration);
    return this;
  }

// create time out
function createTimeOutEvent(timeStamp) {
    const duration = {
      type: "TimeOut",
      hour: parseInt(timeStamp.slice(11)),
      date: timeStamp.slice(0, 10),
    };
    this.timeOutEvents.push(duration);
    return this;
  }

//hours worked
function hoursWorkedOnDate (dateStamp) {
    let timeIn = this.timeInEvents.find(function (e) {
        return e.date === dateStamp
    })
    let timeOut = this.timeOutEvents.find(function (e) {
        return e.date === dateStamp
    })
    return (timeOut.hour - timeIn.hour) / 100
}

//wages earned
function wagesEarnedOnDate (dateStamp) {
    return (hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour)
}

function findEmployeeByFirstName ( srcArray, firstName )
{
  let results;
  srcArray.forEach((src) => {
    if (src["firstName"] === firstName) {
      results = src;
    }
  });
  return results;
}

// pay roll
function calculatePayroll(arr){
    let totalPay = 0;
    arr.forEach((employeeRecord) => {
    totalPay += allWagesFor.call(employeeRecord)
    })
    return totalPay
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

