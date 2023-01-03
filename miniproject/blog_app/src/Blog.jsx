import React, { useState } from "react";
import BlogStyle from "../src/Styles/Blog.module.css";

import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import posts from "./myposts";
// import { FcLike } from "react-icons/fc";
// import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
const Blog = () => {
  const [postsData, setpostsData] = useState(posts);

  const initialState = [
    { id: 1, reply: "not real" },
    { id: 2, reply: "this is amazing" },
  ];

  const [indexSave, setindexSave] = useState(null);
  const [reply, setreply] = useState(initialState);
  const [replyIndex, setreplyIndex] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [old_new, setold_new] = useState(false);

  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [date_start, setdate_start] = useState("");
  const [date_end, setdate_end] = useState("");

  const handleChangeFirst = (evt) => {
    setsubject(evt.target.value);
  };
  const handleChangeLast = (evt) => {
    setdescription(evt.target.value);
  };
  const handleChangeEmail = (evt) => {
    setdate(evt.target.value);
  };
  const handleSave = () => {
    console.log(subject, description, date);
    // console.log(postsData);
    if (subject === "" || description === "" || date === "") {
      alert("Missing Input");
    } else {
      const objSave = postsData;
      objSave.push({ subject: subject, description: description, date: date });
      setpostsData(objSave);
      setsubject("");
      setdescription("");
      setdate("");
      alert("Post Created");
    }
    console.log(postsData);
  };

  const handlOLd = (postsData) => {
    if (old_new) {
      postsData.sort((a, b) => new Date(a.date) - new Date(b.date));
      setold_new(false);
    } else {
      postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
      setold_new(true);
    }

    //  postsData.filter(el=> new Date(el.date) >= new Date(min) && new Date(el.date) <= new Date(max) )
  };

  const handleDatefilter = (postsData) => {
    if (date_start === "" && date_end === "") {
      return postsData;
    }

    if (date_start === "" && date_end !== "") {
      return postsData.filter((el) => el.date <= date_end);
    }
    if (date_end === "" && date_start !== "") {
      return postsData.filter((el) => el.date >= date_start);
    }

    if (date_start !== "" && date_end !== "") {
      return postsData.filter(
        (el) => el.date >= date_start && el.date <= date_end
      );
      // } else {
    }
  };

  const likeHandler = (index) => {
    setindexSave(index);
  };

  const hamdleReply = (index) => {
    let replyM = prompt("Write a Reply");

    setreplyIndex(index);

    setreply((current) => [...current, { id: index, reply: replyM }]);

    alert(`You just Replied`);
    console.log(reply);
  };
  return (
    <div className={`${BlogStyle.sections} ${BlogStyle.section3}`}>
      <div className={BlogStyle.btns}>
        <div
          className={BlogStyle.button2}
          onClick={() => {
            setToggle(!toggle);
            setToggleAdd(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {!toggle ? "Show Posts" : "Hide Posts"}
        </div>
        <div
          className={BlogStyle.button2}
          onClick={() => {
            setToggleAdd(!toggleAdd);
            setToggle(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          {!toggleAdd ? "Create Post" : "Cancel"}
        </div>
      </div>

      {toggle && (
        <div className={BlogStyle.container}>
          <div
            className={`${BlogStyle.input_container} ${BlogStyle.date_container}`}
          >
            <div
              className={`${BlogStyle.input_smaller} ${BlogStyle.input_date}`}
            >
              <label>Date Start</label>
              <input
                type="date"
                onChange={(evt) => setdate_start(evt.target.value)}
                name="Date"
                value={date_start}
              />
            </div>
            <div
              className={`${BlogStyle.input_smaller} ${BlogStyle.input_date}`}
            >
              <label>Date End</label>
              <input
                type="date"
                onChange={(evt) => setdate_end(evt.target.value)}
                name="Date"
                value={date_end}
              />
            </div>
          </div>

          <div
            className={`${BlogStyle.button2} ${BlogStyle.acien}`}
            onClick={() => {
              handlOLd(postsData);
              setold_new(!old_new);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {old_new ? "Show Old Posts" : "Show New Posts"}
          </div>

          <ul className={BlogStyle.responsive_table}>
            <li className={BlogStyle.table_header}>
              {/* <div className={`${BlogStyle.col} ${BlogStyle.col_0}` }></div> */}

              <div className={`${BlogStyle.col} ${BlogStyle.col_1}`}>
                Subject
              </div>
              <div className={`${BlogStyle.col} ${BlogStyle.col_2}`}>
                Description
              </div>
              <div className={`${BlogStyle.col} ${BlogStyle.col_3}`}>Date</div>
              <div className={`${BlogStyle.col} ${BlogStyle.col_0}`}></div>
            </li>

            {handleDatefilter(postsData).map((row, index) => (
              <li className={BlogStyle.table_row} key={index}>
                {/* <div className={`${BlogStyle.col} ${BlogStyle.col_1}` } data-label="Job Id">{index+1}</div> */}
                <div
                  className={`${BlogStyle.col} ${BlogStyle.col_1}`}
                  data-label=""
                >
                  {row.subject}
                </div>
                <div
                  className={`${BlogStyle.col} ${BlogStyle.col_2}`}
                  data-label=""
                >
                  {row.description}
                </div>
                <div
                  className={`${BlogStyle.col} ${BlogStyle.col_3}`}
                  data-label=""
                >
                  {row.date}
                </div>
                <div
                  className={`${BlogStyle.col} ${BlogStyle.col_0}`}
                  data-label=""
                >
                  <div
                    className={`${BlogStyle.likeBtn} `}
                    onClick={() => likeHandler(index)}
                  >
                    <span>like</span>
                    <span>{indexSave === index ? row.like + 1 : row.like}</span>
                  </div>

                  <div
                    className={BlogStyle.reply}
                    onClick={() => hamdleReply(index)}
                  >
                    Reply
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {toggleAdd && (
        <div className={BlogStyle.input_container}>
          <div className={BlogStyle.input_smaller}>
            <label>Subject</label>
            <input
              type="text"
              onChange={handleChangeFirst}
              name="Subject"
              value={subject}
            />
          </div>
          <div className={BlogStyle.input_smaller}>
            <label>Desription </label>
            <textarea
              type="text"
              onChange={handleChangeLast}
              name="Desription"
              value={description}
            />
          </div>
          <div className={BlogStyle.input_smaller}>
            <label>Date</label>
            <input
              type="date"
              onChange={handleChangeEmail}
              name="Date"
              value={date}
            />
          </div>

          <div
            className={`${BlogStyle.button2} ${BlogStyle.save}`}
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

      <div className={BlogStyle.home}>
        <Link to="/">
          <HiHome style={{ color: "white", fontSize: "60px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
