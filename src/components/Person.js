import React from 'react'

function Person({person}) {
    return (
      <div>
        <h3>
          I am {person.name}, my age is {person.age}, and I am an expert in{" "}
          {person.skill}
        </h3>
      </div>
    );
}

export default Person
