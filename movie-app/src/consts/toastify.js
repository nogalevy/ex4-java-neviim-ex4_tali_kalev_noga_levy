import { toast } from "react-toastify";

/**
 * tostify module
 */
export default (function toastify() {
    /**
     * displays error (red) toast alert
     * @param {*} msg  string
     */
    const errorToast = (msg) => {
        console.log("HERE")
        toast.error(msg, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    /**
     * displays success (green) toast alert
     * @param {*} msg string
     */
    const successToast = (msg) => {
        toast.success(msg, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return { errorToast, successToast }
})();