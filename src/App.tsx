import React from 'react';
import './App.css';
import Counter from './components/Counter';

let students: string = "Abdul bari";
console.log(students);

const student: string[] = ["Akin", "sakib", "Momin", "Chy"];

interface Person {
   name: string,
   job?: string | boolean,
   salary: Number
}

const person: Person = {
  name: "Iqbal",
  job: "Bekar",
  salary: 573475
}

const handleTypeFunc = (address: number, name: string, job: string):number => {
  console.log(address, name, job)
  const total: number = address + 100; 
  return total
}


function App() {
  return (
    <div className="App">
        <Counter />
    </div>
  );
}

export default App;
