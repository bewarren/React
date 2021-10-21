import React, { useState } from "react";

import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [enteredFilterDate, setEnteredFilterDate] = useState("2021");

  const saveFilterDate = (filterDate) => {
    setEnteredFilterDate(filterDate);
  };
  const filteredExpenses = props.exp.filter((expense) => {
    let year = expense.date.getFullYear();
    return year === parseInt(enteredFilterDate);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilterDate}
          onChangeFilterDate={saveFilterDate}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
