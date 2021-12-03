import React from "react";

import { FaGraduationCap, FaStar, FaRegStar, FaTwitter } from "react-icons/fa";
import {
  GiSkills,
  GiEternalLove,
  GiBookCover,
  GiSmart,
  GiTreeBranch,
  GiCommercialAirplane,
  GiBodyBalance
} from "react-icons/gi";
import {MdOutlineSportsTennis} from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineFundProjectionScreen,
  AiOutlinePicture,
} from "react-icons/ai";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsPersonSquare } from "react-icons/bs";

import Contact from "../utils/Contact";
import Avt from "../utils/Avt";
import Menu from "../utils/Menu";
import Background from "../utils/Background";

const skills = [
  "self-studying",
  "problems solving and logical thinking",
  "multitasking skills",
  "time management skills",
  "programming",
  "creativity skills",
];

const langs = ["vietnam:5/5", "usa:3/5", "china:2.5/5", "russian-federation:2/5"];

const prolang = [
  "javascript",
  "css3",
  "html-5--v1",
  "nodejs",
  "react-native",
  "mongodb",
  "material-ui",
];

const Resume = () => {
  return (
    <div >
    <Background></Background>
      {/* <Background /> */}
      <Menu page="resume" />
      <div class="title">resume</div>
      <div className="resume">
        <div className="resume__middle-line"></div>
        <div className="grid grid--resume">
          <div className="grid__item--left">
            <div className="resume__info">
              <div className="resume__name">bui hong chien</div>
              <div className="resume__pos">Front-end web developer</div>
              <div className="resume__contact">
                <div className="resume__inline">
                  <Contact icon="icon icon--small" />
                </div>
                <div className="resume__inline">
                  <HiOutlineMail className="icon icon--small" />
                  chienbui211@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="grid__item--icon">
            <Avt size="avatar avatar--medium" />
          </div>
          <div className="grid__item--right">
            <div className="resume__intro">
              <div className="resume__title--about">ABOUT ME</div>
              <div className="resume__detail--about">
                Student in Programming at ITMO University, highly interested in
                JavaScript and MERN stack
              </div>
            </div>
          </div>

          <div className="grid__item">
            <div className="resume__tag resume__tag--education">Education</div>
          </div>
          <div className="grid__item--icon">
            <div className="resume__icon">
              <FaGraduationCap className="icon icon--large" />
            </div>
          </div>
          <div className="grid__item--right">
            <div className="arrow arrow--left"></div>
            <div className="resume__detail">
              <div className="resume__date">Expected to graduate in 2022</div>
              <div className="resume__detail--education">
                {" "}
                Student in Programming, ITMO University
                <div className="resume__inline resume__inline--start">
                  <FaStar className="icon icon--small icon--grade" />
                  3.57 GPA
                </div>
              </div>
            </div>
          </div>

          <div className="grid__item--left">
            <div className="resume__detail">
              <div className="resume__prolang">
                {prolang.map((pl) => (
                  <img
                    className="icon icon--small"
                    src={`https://img.icons8.com/color/48/000000/${pl}.png`}
                  />
                ))}
              </div>
              <div className="resume__skills-list">
                {skills.map((s) => (
                  <div className="resume__skill-item">{s}</div>
                ))}
              </div>
            </div>
            <div className="arrow arrow--right"></div>
          </div>
          <div className="grid__item--icon">
            <div className="resume__icon">
              <GiSkills className="icon icon--large" />
            </div>
          </div>
          <div className="grid__item">
            <div className="resume__tag resume__tag--skills">skills</div>
          </div>

          <div className="grid__item">
            <div className="resume__tag resume__tag--project">Projects</div>
          </div>
          <div className="grid__item--icon">
            <div className="resume__icon">
              <AiOutlineFundProjectionScreen className="icon icon--large" />
            </div>
          </div>
          <div className="grid__item--right">
            <div className="arrow arrow--left"></div>
            <div className="resume__detail">
              <div className="resume__inline resume__inline--start">
                <TiWeatherPartlySunny className="icon icon--small" />
                <a
                  href="https://github.com/BuiHongChien/weathery"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Weathery (MERN)
                </a>
              </div>
              <div className="resume__inline resume__inline--start">
                <AiOutlinePicture className="icon icon--small" />
                <a
                  href="https://github.com/BuiHongChien/my-image-message-app"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Image Text (MERN)
                </a>
              </div>
              <div className="resume__inline resume__inline--start">
                <BsPersonSquare className="icon icon--small" />
                <a href="https://github.com/BuiHongChien/blog" target="_blank" rel="noreferrer" className="link">
                  Personal website (MERN)
                </a>
              </div>
            </div>
          </div>

          <div className="grid__item">
            <div className="resume__tag resume__tag--languages">Languages</div>
          </div>
          <div className="grid__item--icon">
            <div className="resume__icon">
              <IoLanguage className="icon icon--large" />
            </div>
          </div>
          <div className="grid__item--right">
            <div className="arrow arrow--left"></div>
            <div className="resume__detail">
              {langs.map((l) => (
                <div className="resume__lang">
                  <img
                    className="icon icon--medium"
                    src={`https://img.icons8.com/color/48/000000/${l.substring(
                      0,
                      l.indexOf(":")
                    )}.png`}
                  />
                  <div className="resume__star">
                    {[
                      ...Array(
                        parseInt(
                          l.substring(l.indexOf(":") + 1),
                          l.substring(l.indexOf("/"))
                        )
                      ),
                    ].map((n) => (
                      <FaStar className="icon icon--mini" />
                    ))}
                    {[
                      ...Array(
                        5 -
                          parseInt(
                            l.substring(l.indexOf(":") + 1),
                            l.substring(l.indexOf("/"))
                          )
                      ),
                    ].map((n) => (
                      <FaRegStar className="icon icon--mini" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid__item--left">
            <div className="resume__detail">
              <div className="resume__hobby">
                <MdOutlineSportsTennis className="icon icon--small" /> Badminton
              </div>
              <div className="resume__hobby">
                <GiBodyBalance className="icon icon--small" />
                Yoga
              </div>
              <div className="resume__hobby">
                <GiBookCover className="icon icon--small" />
                Reading
              </div>
              <div className="resume__hobby">
                <GiTreeBranch className="icon icon--small" />
                Growing plants
              </div>
              <div className="resume__hobby">
                <GiCommercialAirplane className="icon icon--small" />
                Traveling
              </div>
            </div>
            <div className="arrow arrow--right"></div>
          </div>
          <div className="grid__item--icon">
            <div className="resume__icon">
              <GiEternalLove className="icon icon--large" />
            </div>
          </div>
          <div className="grid__item">
            <div className="resume__tag resume__tag--hobbies">hobbies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
