import React, { useState } from "react";

import ContactsStyle from "./Styles/Contacts.module.css";

import contacts from "./MyContacts.js";

import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const Contacts = () => {
  const keys = ["last", "email", "phone"];
  const [contactsData, setcontactsData] = useState(contacts);
  const [toggle, setToggle] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);

 
  const [last, setlast] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [search, setsearch] = useState("");

  // const handleChangeFirst = (evt) => {
  //   setfirst(evt.target.value);
  // };
  const handleChangeLast = (evt) => {
    setlast(evt.target.value);
  };
  const handleChangeEmail = (evt) => {
    setemail(evt.target.value);
  };
  const handleChangePhone = (evt) => {
    setphone(evt.target.value);
  };

  const handleSave = () => {
    console.log( last, email, phone);
    // console.log(contactsData);
    if (last === "" || email === "" || phone === "") {
      alert("Missing Input");
    } else {
      const objSave = contactsData;
      objSave.push({ last: last, email: email, phone: phone });
      setcontactsData(objSave);
     
      setlast("");
      setemail("");
      setphone("");
    }
    console.log(contactsData);
  };
  const searchHamdler = (contactsData) => {
    return contactsData.filter((el) =>
      search.length === 1
        ? keys.some( (key)=> el["last"].toLowerCase().startsWith(search))
        : keys.some((key) => el[key].toLowerCase().includes(search))
    );
  };

  return (
    <div className={`${ContactsStyle.sections} ${ContactsStyle.section2}`}>
      <div className={ContactsStyle.btns}>
        <div
          className={ContactsStyle.button2}
          onClick={() => {
            setToggle(!toggle);
            setToggleAdd(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {!toggle ? "Display Contacts" : "Hide Contacts"}
        </div>
        <div
          className={ContactsStyle.button2}
          onClick={() => {
            setToggleAdd(!toggleAdd);
            setToggle(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          {!toggleAdd ? "Add Contact" : "Cancel"}
        </div>
      </div>

      {toggle && (
        <div className={ContactsStyle.container}>
          <div
            className={`${ContactsStyle.input_container} ${ContactsStyle.input_search}`}
          >
            <div className={ContactsStyle.input_smaller}>
              <label>Search</label>
              <input
                type="text"
                onChange={(e) => setsearch(e.target.value)}
                name="Search"
                value={search}
              />
            </div>
          </div>

          <ul className={ContactsStyle.responsive_table}>
            <li className={ContactsStyle.table_header}>
              {/* <div className={`${ContactsStyle.col} ${ContactsStyle.col_0}` }></div> */}
             
              <div className={`${ContactsStyle.col} ${ContactsStyle.col_2}`}>
                Last Name
              </div>
              <div className={`${ContactsStyle.col} ${ContactsStyle.col_3}`}>
                Email
              </div>
              <div className={`${ContactsStyle.col} ${ContactsStyle.col_4}`}>
                Phone Number
              </div>
            </li>

            {searchHamdler(contactsData).map((row, index) => (
              <li className={ContactsStyle.table_row} key={index}>
                {/* <div className={`${ContactsStyle.col} ${ContactsStyle.col_1}` } data-label="Job Id">{index+1}</div> */}
               
                <div
                  className={`${ContactsStyle.col} ${ContactsStyle.col_2}`}
                  data-label="Last Name"
                >
                  {row.last}
                </div>
                <div
                  className={`${ContactsStyle.col} ${ContactsStyle.col_3}`}
                  data-label="Email"
                >
                  {row.email}
                </div>
                <div
                  className={`${ContactsStyle.col} ${ContactsStyle.col_4} ${ContactsStyle.last_col}`}
                  data-label="Phone Number"
                >
                  {row.phone}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {toggleAdd && (
        <div className={ContactsStyle.input_container}>
         
          <div className={ContactsStyle.input_smaller}>
            <label>Last Name </label>
            <input
              type="text"
              onChange={handleChangeLast}
              name="Last Name"
              value={last}
            />
          </div>
          <div className={ContactsStyle.input_smaller}>
            <label>Email</label>
            <input
              type="email"
              onChange={handleChangeEmail}
              name="Email"
              value={email}
            />
          </div>
          <div className={ContactsStyle.input_smaller}>
            <label>Phone Number</label>
            <input
              type="number"
              onChange={handleChangePhone}
              name="Phone Number"
              value={phone}
            />
          </div>

          <div
            className={`${ContactsStyle.button2} ${ContactsStyle.save}`}
            onClick={handleSave}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Save
          </div>
        </div>
      )}

      <div className={ContactsStyle.home}>
        <Link to="/">
          <HiHome style={{ color: "white", fontSize: "60px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
