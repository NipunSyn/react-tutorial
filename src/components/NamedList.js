// list rendering

import React from "react";
import Person from "./Person";


//! we can also use the index as key in case there is no id present for the array elements

// since the key has to be unique, we shouldn't use the name. Instead, use index

//!NOTE: passing index can also cause major UI problems. Only use when the following conditions are met:

//list is static, list doesn't have a unique key, list will not be sorted
function NamedList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

    return (
        <div>
            {nameList}
        </div>
    )
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


    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         skill: 'React',
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 25,
    //         skill: 'Angular',
    //     },
    //     {
    //         id: 3,
    //         name: 'Diana',
    //         age: 20,
    //         skill: 'Vue'
    //     }
    // ]

    // note, we need to provide a "unique" key for all the items in the array while using list rendering (in this case, we used id). These key props are not accessible in th child (key is not a prop)

    //keys help in keeping tabs of any UI update made in the react app

    // const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    // return(
    //     <div>
    //         {personList}
    //     </div>
    // )
}

export default NamedList;
