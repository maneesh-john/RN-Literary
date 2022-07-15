import React, { useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";

import { AppContext } from "../../contexts/AppContext";
import { GuestStackProps } from "../../types/navigation";
import { RegisterForm } from "../../types/form";
import { registerUser } from "../../services/user";
import { registerSchema } from "../../utils/schemas";
import Wrapper from "../../components/Wrapper";
import Input from "../../components/Input";
import Button from "../../components/Button";

type Props = NativeStackScreenProps<GuestStackProps, "Register">;

const Register: React.FC<Props> = () => {

  const { loading, setUser, setLoading } = useContext(AppContext);

  const onSubmit = async (data: RegisterForm) => {
    setLoading(true);
    const userData = await registerUser({ email: data.email, password: data.password });
    setLoading(false);
    if(userData){
      const { token, user: { _id, email, name, role } } = userData;
      setUser({
        auth: true,
        id: _id,
        email,
        name,
        role,
        token
      });
    }
  }

  return(
    <Wrapper title="Register" showBackButton>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: ""
        }}
        onSubmit={onSubmit}
        validationSchema={registerSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <>
            <Input
              value={values.email}
              placeholder="Email id"
              label="Email id"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              errorText={errors.email}
              touched={touched.email}
            />
            <Input
              value={values.password}
              label="Password"
              placeholder="password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              errorText={errors.password}
              touched={touched.password}
              secureEntry
            />
            <Input
              value={values.confirmPassword}
              label="Confirm password"
              placeholder="Confirm password"
              onChange={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              errorText={errors.confirmPassword}
              touched={touched.confirmPassword}
              secureEntry
            />
            <Button
              title="Submit"
              loading={loading}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Register;