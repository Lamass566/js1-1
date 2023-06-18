class Employee {
    constructor(name,age,salary){
          this.name = name,
          this.age = age,
          this.salary = salary
  }
    get name(){
      return this._name;
  }
    set name(newName){
      this._name = newName;
    }
    
    
    get age(){
      return this._age;
  }
    set age(newAge){
      this._age = newAge;
    }
    
    
    get salary(){
      return this._salary;
  }
    set salary(newSalary){
      this._salary = newSalary;
    }
  }
  
  class Programmer extends Employee {
    constructor(name, age, salary, lang) {
      super(name, age, salary);
      this.lang=lang;
    }
  get salary(){
      return this._salary * 3;
  }
    set salary(newSalary){
      this._salary = newSalary;
    } 
    
    show(){
      console.log(`salary: ${this.salary} / Name: ${this.name} / Age: ${this.age} / ProgLang: ${this.lang}`);
    }
  }
  let pr = new Programmer("Misha",21,600,"js");
  let pr2 = new Programmer("Max",22,900,"c#");
  let pr3 = new Programmer("Sasha",109,2,"c++");
  console.log(pr.show());
  console.log(pr2.show());
  console.log(pr3.show());