const CSPIT = {
    departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],
    yearOfEstablishment: 2005,
    location: "Ahmedabad",
  
    getAllDetails() {
      console.log("CSPIT Institute Details:");
      console.log("Departments: ", this.departments);
      console.log("Year of Establishment: ", this.yearOfEstablishment);
      console.log("Location: ", this.location);
    }
  };
  
  // Empty CE department prototype
  function CE() {}
  
  const students = Object.create(CE.prototype);
  // Adding properties to CE department prototype
  students.totalStudents = 250;
  students.totalFaculty = 30;
  
  // Retrieving all possible records from CE department
  console.log("CE Department:");
  for (const key in students) {
   
      console.log(key + ": ", students[key]);
    
  }
  
  // Retrieving all possible records from CSPIT Institute
  console.log("CSPIT Institute:");
  for (const key in CSPIT) {
    console.log(key + ": ", CSPIT[key]);
  }
  