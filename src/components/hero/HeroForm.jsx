import React, { useState } from "react";

import {
  QuoteCard,
  InputRow,
  InputBox,
  LeftGroup,
  Arrow,
  QuoteButton,
  HelperText,
  DropdownWrapper,
  Dropdown,
  Option
} from "./Hero.styles";

import phoneIcon from "../../assets/hero/phone-call.svg";
import profileIcon from "../../assets/hero/profile_icon.svg";
import downArrow from "../../assets/hero/downarrow.svg";

const HeroForm = ({ openContact }) => {

  const [open,setOpen] = useState(false);
  const [selected,setSelected] = useState("");
  const [phone,setPhone] = useState("");
  const [errors,setErrors] = useState({});

  const phoneRegex=/^\+\d{1,3}\d{10}$/;

  const handleSubmit=()=>{

    let newErrors={};

    if(!phone)
      newErrors.phone="Mobile number required";

    else if(!phoneRegex.test(phone))
      newErrors.phone=
      "Enter valid number (+919876543210)";

    if(!selected)
      newErrors.selected=
      "Please select insurance type";

    setErrors(newErrors);

    if(!Object.keys(newErrors).length){

      openContact(phone,selected);
    }
  };


  return (

<QuoteCard>

<InputRow>



<div style={{flex:1}}>

<InputBox>

<img src={phoneIcon} alt="" width="18"/>

<input
type="tel"
placeholder="Enter mobile number (+91...)"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
style={{
border:"none",
outline:"none",
flex:1
}}
/>

</InputBox>

{errors.phone &&
<p style={{color:"red",fontSize:"12px"}}>
{errors.phone}
</p>}

</div>




<div style={{flex:1}}>

<DropdownWrapper>

<InputBox
onClick={()=>setOpen(!open)}
>

<LeftGroup>

<img src={profileIcon} width="18" alt=""/>

<span>
{selected || "I WANT TO COVER"}
</span>

</LeftGroup>

<Arrow
src={downArrow}
alt=""
style={{
transform:
open ? "rotate(180deg)" :
"rotate(0deg)"
}}
/>

</InputBox>


{open && (

<Dropdown>

<Option
onClick={()=>{
setSelected(
"HEALTH INSURANCE FOR INDIVIDUALS"
);
setOpen(false);
}}
>
HEALTH INSURANCE FOR INDIVIDUALS
</Option>


<Option
onClick={()=>{
setSelected(
"HEALTH INSURANCE FOR FAMILY"
);
setOpen(false);
}}
>
HEALTH INSURANCE FOR FAMILY
</Option>

</Dropdown>

)}

</DropdownWrapper>

{errors.selected &&
<p style={{color:"red",fontSize:"12px"}}>
{errors.selected}
</p>}

</div>

</InputRow>


<QuoteButton
onClick={handleSubmit}
>

GET A FREE QUOTE

</QuoteButton>

<HelperText>

Your Number Is 100% Safe With Us.
No Spam. No Pressure.

</HelperText>

</QuoteCard>

  );
};

export default HeroForm;