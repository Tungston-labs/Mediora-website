import { useEffect } from "react";

const useModalEffects = (open, onClose) => {

    useEffect(() => {

        if (open) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };

    }, [open]);


    useEffect(() => {

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (open) {
            window.addEventListener("keydown", handleEsc);
        }

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };

    }, [open, onClose]);

};

export default useModalEffects;
