import React, { useState } from "react";
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
} from "reactstrap";

import MultiSelect from "../MultiSelect";
import SingleSelect from "../SingleSelect";

function CreateSurvey() {
   const [dropDownOpen, setdropDownOpen] = useState(false);
   const [dropDownText, setdropDownText] = useState("Select Question Type");
   const toggle = () => setdropDownOpen((prevState) => !prevState);
   return (
      <>
         <Dropdown isOpen={dropDownOpen} toggle={toggle}>
            <DropdownToggle caret>{dropDownText}</DropdownToggle>
            <DropdownMenu>
               <DropdownItem
                  onClick={() => setdropDownText("Multi Select Questions")}
               >
                  Multi Select Questions
               </DropdownItem>
               <DropdownItem
                  onClick={() => setdropDownText("Single Select Questions")}
               >
                  Single Select Questions
               </DropdownItem>
            </DropdownMenu>
         </Dropdown>
         {dropDownText === "Multi Select Questions" ? <MultiSelect /> : null}
         {dropDownText === "Single Select Questions" ? <SingleSelect /> : null}
      </>
   );
}

export default CreateSurvey;
