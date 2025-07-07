import AppLayout from "../../layouts/AppLayout";
import FormRender from "../../builders/form-builder/FormRender";
import { loginConfig } from "./login.config";

const Login = () => {
  return (
    <AppLayout>
      <div className="flex justify-end items-center h-full w-full pr-[10%]">
        <div className="bg-white w-[400px]  p-6 rounded-lg shadow-lg">
          <FormRender config={loginConfig} />
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;
