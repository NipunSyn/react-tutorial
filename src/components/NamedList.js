// list rendering

import React from "react";
import Person from "./Person";

function NamedList() {
//   const names = ["Bruce", "Clark", "Diana"];
//   const nameList = names.map((name) => <h2>{name}</h2>);
//   return (
//     <div>
//       {/* boring method */}
//       {/* <h2>{names[0]}</h2>  
//           <h2>{names[1]}</h2>  
//           <h2>{names[2]}</h2>   */}

//       {/*use map inside*/}
//       {/* {
//               names.map((name) => <h2>{name}</h2>)
//           } */}

//       {/*or even more smooooooth! */}
//       {nameList}
//     </div>
//   );


    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React',
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular',
        },
        {
            id: 3,
            name: 'Diana',
            age: 20,
            skill: 'Vue'
        }
    ]

    // note, we need to provide a "unique" key for all the items in the array while using list rendering (in this case, we used id). These key props are not accessible in th child (key is not a prop)

    //keys help in keeping tabs of any UI update made in the react app
    
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    return(
        <div>
            {personList}
        </div>
    )
}

export default NamedList;
