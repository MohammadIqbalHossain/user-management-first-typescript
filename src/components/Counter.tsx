import React, { useState } from 'react';

const Counter = () => {

    interface User {
        name: string,
        age: number,
        job: string
    }
   
    const [count, setCount] = useState(0);
    const [user, setUser] = useState<User | null>(null)
    
    const handleCountFunc = ():void => {
        setCount(count + 1);
    }

    const handleNullFunc = ():void => {
        // e.prevventDefault()

        const usersData: User = {
           name: "Ebadul",
           age: 20,
           job: "dev"
        }
        setUser(usersData)
    } 

    return (
        <div>
            <h1>This is Counter</h1>
            <h1>{count}</h1>
            <button onClick={handleCountFunc}>Increase</button>
        </div>
    );
};

export default Counter;