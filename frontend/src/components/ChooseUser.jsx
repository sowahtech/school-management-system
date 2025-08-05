import {
  ChooseUserContainer,
  UserSection,
  Title,
  Button,
} from "../styles/ChooseUserStyles";

import { Link } from "react-router-dom";

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
      <UserSection>
        <Title>Admin</Title>
        <Button to='/admin-login'>Login as Admin</Button>
      </UserSection>
      <UserSection>
        <Title>Student</Title>
        <Button to='/student-login'>Login as Student</Button>
      </UserSection>
      <UserSection>
        <Title>Teacher</Title>
        <Button to='/teacher-login'>Login as Teacher</Button>
      </UserSection>
    </ChooseUserContainer>
  );
};

export default ChooseUser;
