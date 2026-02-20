import React, { useState } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import ContactModal from "./components/modal/ContactModal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  // ⭐ store autofill data
  const [contactData, setContactData] = useState({
    phone: "",
    policy: ""
  });

  // ⭐ function Hero will call
  const openContact = (phone = "", policy = "") => {
    setContactData({ phone, policy });
    setContactOpen(true);
  };

  return (
    <>
      <GlobalStyles />

      {/* pass openContact to Home */}
      <Home openContact={openContact} />

      {/* pass autofill data to modal */}
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
