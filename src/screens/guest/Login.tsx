import React, { useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";

import { AppContext } from "../../contexts/AppContext";
import { GuestStackProps } from "../../types/navigation";
import { userLogin } from "../../services/user";
import { loginSchema } from "../../utils/schemas";
import { LoginForm } from "../../types/form";
import Wrapper from "../../components/Wrapper";
import Input from "../../components/Input";
import Button from "../../components/Button";

type Props = NativeStackScreenProps<GuestStackProps, "Login">

const Login: React.FC<Props> = () => {

  const { loading, setUser, setLoading } = useContext(AppContext);

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    const userData = await userLogin(data);
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
    <Wrapper title="Login" showBackButton>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
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

export default Login;