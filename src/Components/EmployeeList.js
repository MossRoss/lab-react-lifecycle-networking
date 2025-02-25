import React, { useEffect, useState } from "react";
import axios from "axios";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  async function getData() {
    try {
      const result = await axios.get(
        `https://vet-api-1.onrender.com/api/employees`
      );

      // console.log(result.data);
      setEmployees(result.data);
    } catch (e) {}
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((item) => {
          return <Employee key={item.id} {...item} />;
          // item={item} or {...item}
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
