import { useEffect } from "react";

const useLockBodyScroll = (open) => {

    useEffect(() => {

        if (open) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";

            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        }
        else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        }

    }, [open]);

};

export default useLockBodyScroll;
