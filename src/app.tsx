import { RouterProvider } from "react-router";
import { Flip, ToastContainer } from "react-toastify";
import { router } from "./router/route.tsx";

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Flip}
            />
        </>
    );
};

export default App;
