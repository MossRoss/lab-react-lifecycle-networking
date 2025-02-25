// import { useState } from "react";
// import PetList from "./PetList";
// import "./Employee.css";

// export const Employee = ({
//   id,
//   firstName,
//   lastName,
//   prefix,
//   postfix,
//   title,
// }) => {
//   // const name = `${prefix ? prefix + " " : ""}${firstName}${lastName} ${
//   //   postfix ? ", " + postfix : ""
//   // }`;
//   const [showPets, setShowPets] = useState(false);

//   return (
//     <article className="employee">
//       <h3>
//         {prefix || ""} {firstName} {lastName} {postfix ? `, ${postfix}` : ""}
//       </h3>
//       <h4>{title}</h4>
//       <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
//       {showPets && <PetList />}
//     </article>
//   );
// };

// export default Employee;

// Pak's
// answers

import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({
  id,
  firstName,
  lastName,
  prefix,
  postfix,
  title,
}) => {
  //
  const [showPets, setShowPets] = useState(false);

  return (
    <article className="employee">
      <h3>
        {prefix ? prefix + " " : ""}
        {firstName}
        {lastName} {postfix ? ", " + postfix : ""}
      </h3>
      {/*Or it can be written as this
       {prefix || ""} {firstName}
        {lastName} {postfix ? `, ${postfix}` : ""} */}
      <h4>{title}</h4>
      <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
      {showPets && <PetList employeeId={id} />}
    </article>
  );
};

export default Employee;
