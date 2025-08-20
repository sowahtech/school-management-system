import {
  TeacherSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/TeacherSignInStyles";
import { useState } from "react";

const TeacherSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // lets simply just log the registration data
    console.log("Teacher Sign In", { email, password });
  };
  return (
    <TeacherSignInContainer>
      <h2> Teacher Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton to="/teacher/dashboard" onClick={handleSignIn}>
          Register
        </SubmitButton>
      </FormContainer>
    </TeacherSignInContainer>
  );
};

export default TeacherSignIn;
