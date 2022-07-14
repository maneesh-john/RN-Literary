import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { GuestStackProps } from "../../types/navigation";
import Wrapper from "../../components/Wrapper";

type Props = NativeStackScreenProps<GuestStackProps, "Register">;

const Register: React.FC = () => {

  return(
    <Wrapper title="Register">
      
    </Wrapper>
  );
}

export default Register;