// DepartmentListComponent.tsx
import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Checkbox,
  IconButton,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentListComponentProps {
  departments: Department[];
}

const DepartmentListComponent: React.FC<DepartmentListComponentProps> = ({
  departments,
}) => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleToggle = (department: string) => {
    const currentIndex = selectedDepartments.indexOf(department);
    const newSelected = [...selectedDepartments];

    if (currentIndex === -1) {
      newSelected.push(department);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    setSelectedDepartments(newSelected);
  };

  const handleSubDepartmentToggle = (
    department: string,
    subDepartment: string
  ) => {
    const isAllSubDepartmentsSelected = departments
      .find((dep) => dep.department === department)
      ?.sub_departments.every((subDep) =>
        selectedDepartments.includes(`${department}-${subDep}`)
      );

    const newSelected = [...selectedDepartments];

    if (isAllSubDepartmentsSelected) {
      // If all sub-departments are selected, deselect them
      departments
        .find((dep) => dep.department === department)
        ?.sub_departments.forEach((subDep) => {
          const index = newSelected.indexOf(`${department}-${subDep}`);
          newSelected.splice(index, 1);
        });
    } else {
      // If not all sub-departments are selected, select them
      departments
        .find((dep) => dep.department === department)
        ?.sub_departments.forEach((subDep) => {
          newSelected.push(`${department}-${subDep}`);
        });
    }

    setSelectedDepartments(newSelected);
  };

  const isDepartmentSelected = (department: string) =>
    selectedDepartments.includes(department);

  const isSubDepartmentSelected = (
    department: string,
    subDepartment: string
  ) => selectedDepartments.includes(`${department}-${subDepartment}`);

  return (
    <div style={{ border: '1px solid #ddd', padding: 20, marginBottom: 20 }}>
      <h2>Department List Component</h2>
      <List>
        {departments.map((dep) => (
          <React.Fragment key={dep.department}>
            <ListItem button onClick={() => handleToggle(dep.department)}>
              <Checkbox
                checked={isDepartmentSelected(dep.department)}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={dep.department} />
              <IconButton>
                {isDepartmentSelected(dep.department) ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </IconButton>
            </ListItem>
            <Collapse
              in={isDepartmentSelected(dep.department)}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {dep.sub_departments.map((subDep) => (
                  <ListItem
                    key={`${dep.department}-${subDep}`}
                    button
                    onClick={() =>
                      handleSubDepartmentToggle(dep.department, subDep)
                    }
                    style={{ paddingLeft: 30 }}
                  >
                    <Checkbox
                      checked={isSubDepartmentSelected(
                        dep.department,
                        subDep
                      )}
                      tabIndex={-1}
                      disableRipple
                    />
                    <ListItemText primary={subDep} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default DepartmentListComponent;
