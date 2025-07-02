"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import { googleSignIn } from "../actions/googleSignIn";
import { LogOut } from "lucide-react";

interface Props {
  login: ({ email, password }: { email: string; password: string }) => void;
}

const AdminLogin = ({ login }: Props) => {
  // const [loginState, setLoginState] = useState<{
  //   loading: boolean;
  //   error: boolean;
  // }>({
  //   loading: false,
  //   error: true,
  // });
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit: SubmitHandler<{
    email: string;
    password: string;
  }> = async (data) => {
    const response = await login({
      email: data.email,
      password: data.password,
    });

    console.log(response);
  };

  const handleGoogleLogin = async () => {
    const response = await googleSignIn();
    if (!response.success) return;

    const url = response.url;
    if (!url) return;
    open(url);
  };
  return (
    <>
      <div className="w-full flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col min-w-[300px]  max-w-[400px] gap-4">
          <h1 className="text-3xl">Admin Login</h1>
          <form
            className="flex flex-col w-full gap-4 "
            action=""
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div className="flex-1 flex flex-col justify-center">
              <label className="flex-1" htmlFor="email">
                Email
              </label>
              <input
                className="border flex-1 border-[#EAE4D5] p-2 rounded-lg"
                type="text"
                id="email"
                {...register("email")}
              />
            </div>

            <div className="flex-1 flex flex-col justify-center ">
              <label className="flex-1" htmlFor="password">
                Password
              </label>
              <input
                className="border flex-1 border-[#EAE4D5] p-2 rounded-lg"
                type="text"
                id="password"
                {...register("password")}
              />
            </div>
            <Button title="Login" onClickHandler={() => {}} icon={<LogOut />} />
          </form>
          <Button
            title="Sign in with Google"
            onClickHandler={handleGoogleLogin}
            icon={<LogOut />}
          />
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
