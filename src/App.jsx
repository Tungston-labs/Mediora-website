import React, { useState } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import ContactModal from "./components/modal/ContactModal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);


  const [contactData, setContactData] = useState({
    phone: "",
    policy: ""
  });


  const openContact = (phone = "", policy = "") => {
    setContactData({ phone, policy });
    setContactOpen(true);
  };

  return (
    <>
      <GlobalStyles />


      <Home openContact={openContact} />


      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        phone={contactData.phone}
        policy={contactData.policy}
      />
    </>
  );
}

export default App;
