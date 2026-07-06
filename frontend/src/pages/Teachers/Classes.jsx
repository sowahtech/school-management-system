import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  ClassContainer,
  SidebarContainer,
  Content,
  ClassHeader,
  ClassList,
  ClassItem,
} from "../../styles/ClassesStyles";

const ClassSection = () => {

  const [newClassName, setNewClassName] = useState('')
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, [])

  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/vt/class/getall")
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes)
      } else {
        console.log('Error while fetching classes: Invalid data format', response.data)
      }

    } catch (error) {
      console.error('Error fetching classes', error)
    }
  }

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:4000/api/vt/class/create', { grade: newClassName })
        console.log('Response data: ', response.data) // this will log the response data
        setClasses(prevClasses => {
          if (Array.isArray(prevClasses)) {
            return [...prevClasses, response.data]; // we are using the callback function to update the state
          } else {
            console.log('Error adding the classes: Invalid state for class', prevClasses)
            return [];
          }
        })
        setNewClassName('')
      } catch (error) {
        console.error('Error adding class: ', error)
      }
    }
  }

  return (
    <ClassContainer style={{ paddingLeft: 250 }}>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm onClick={handleAddClass}>
            <AddClassInput type="text" placeholder="Enter class name" value={newClassName} onChange={(e) => setNewClassName(e.target.value)} />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>

            {/* We are ensuring first that classes is an array before we map here */}
            {Array.isArray(classes) && classes.map((ClassItem, index) => {
              <ClassItem key={index}>ClassItem.grade</ClassItem>
            })}

          </ClassList>
        </ClassesContent>
      </Content>
    </ClassContainer>
  );
};

export default ClassSection;
