import { FaTelegramPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  }

  return (
    <div className="bg-primarySlate h-screen flex">
      {/* left part  */}
      <div className="w-[50%] h-full bg-gradient-to-tl from-rose-900 to-[tomato] flex flex-col justify-center p-20 text-white">
        <h1 className="text-6xl flex gap-1">
          <FaTelegramPlane className="" />
          <span className=" font-bold">AirCash</span>
        </h1>
        <p className="text-4xl font-semibold mt-6">
          Your All-in-One Digital Banking Solution
        </p>
        <p className="font-medium text-lg mt-2">
          Welcome to AirCash, the ultimate platform for seamless and secure
          money management. Whether you&#39;re looking to cash out, cash in, or
          send money effortlessly, AirCash is designed to meet all your
          financial needs with simplicity and efficiency. Our intuitive
          interface ensures that every transaction is just a click away, making
          banking accessible anytime, anywhere.
        </p>
      </div>

      {/* right part  */}
      <div className=" w-[50%] flex items-center justify-center">
        <div className="w-[500px] border rounded-md p-8 text-white">
          <h3 className="text-center text-5xl font-semibold w-fit mx-auto py-4 bg-gradient-to-r from-rose-500 to-[tomato] text-transparent bg-clip-text">Login Now!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <label
                className="block mb-2 font-medium"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                {...register("email", { required: true })}
              />
            </div>

            <div className="mt-5">
              <div className="flex justify-between">
                <label
                  className="block mb-2 font-medium "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="mt-12">
              <button
                type="submit"
                className="w-full px-6 pt-2 pb-3 text-lg font-semibold tracking-wide capitalize transition-colors duration-300 transform bg-gradient-to-r from-rose-500 to-[tomato] rounded-sm hover:bg-navy hover:text-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
