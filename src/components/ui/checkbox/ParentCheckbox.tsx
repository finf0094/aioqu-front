import React, { useState, useEffect } from "react";
import CustomCheckbox from "./Checkbox";
import { FormGroup } from "@mui/material";

interface ParentCheckboxProps {
  parentLabel: string;
  childrenLabels: string[];
  getCheckboxesState: (state: { parent: boolean; children: boolean[] }) => void;
}

const ParentCheckbox: React.FC<ParentCheckboxProps> = ({
  parentLabel,
  childrenLabels,
  getCheckboxesState,
}) => {
  const initialState = {
    parent: false,
    children: childrenLabels.map(() => false),
  };

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    getCheckboxesState(tasks);
  }, [tasks, getCheckboxesState]);

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setTasks({
      parent: checked,
      children: tasks.children.map(() => checked),
    });
  };

  const handleChildChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      const updatedChildren = tasks.children.map((child, i) =>
        i === index ? checked : child
      );
      const allChildrenChecked = updatedChildren.every((child) => child);

      setTasks({
        parent: allChildrenChecked,
        children: updatedChildren,
      });
    };

  return (
    <FormGroup>
      <CustomCheckbox
        label={parentLabel}
        checked={tasks.parent}
        onChange={handleParentChange}
        name="parent"
      />
      <div
        style={{
          paddingLeft: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {childrenLabels.map((label, index) => (
          <CustomCheckbox
            key={index}
            label={label}
            checked={tasks.children[index]}
            onChange={handleChildChange(index)}
            name={`child${index}`}
          />
        ))}
      </div>
    </FormGroup>
  );
};

export default ParentCheckbox;
