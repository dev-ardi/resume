import React, { useRef } from "react";
import github from "../assets/githubLogo.svg";
import linkedin from "../assets/linkedinLogo.png";
import email from "../assets/mailLogo.png";
import phone from "../assets/phoneLogo.png";
import location from "../assets/locationLogo.svg";
import twitter from "../assets/twitterLogo.svg";
import "./Icons.css";
import { Popup } from "./Popup";

//TODO REFACTOR ME PLS THIS IS SHIT






function iterateIcon(fn: (ele: HTMLElement) => void) { // Insane anti-pattern here
  const ele: NodeListOf<HTMLElement> = document.querySelectorAll(".linkLogo")!;
  for (let i = 0; i < ele.length; i++) fn(ele[i]);
}


export function Icon(props: { img: string; link: string; alt: string }) {
  const x = useRef(null);
  return (
    <li>
  <a href={props.link} target="_blank">
    <img
      ref={x}
      className="linkLogo"
      src={props.img}
      alt={props.alt ?? ""}
      onMouseEnter={() => {
        iterateIcon((ele) => {
          ele.style.filter = "blur(2px)";
        });
        //@ts-ignore
        x.current.style.filter = "blur(0px)";
      }}
      onMouseLeave={() => {
        iterateIcon((ele) => {
          ele.style.filter = "blur(0px)";
        });
      }}
    />
  </a>
</li>    
  );
}

export function IconPopup(props: {
  img: string;
  link: string;
  alt: string;
  text: string;
}) {
  const [visible, toggleVisible] = React.useState(false);
  const x = useRef(null);

  return (
    <li>
      <a href={props.link} target="_blank">
        <img
          ref={x}
          className="linkLogo"
          src={props.img}
          alt={props.alt ?? ""}
          onMouseEnter={() => {
            iterateIcon((ele) => {
              ele.style.filter = "blur(2px)";
            });
            //@ts-ignore
            x.current.style.filter = "blur(0px)";
          }}
          onMouseLeave={() => {
            iterateIcon((ele) => {
              ele.style.filter = "blur(0px)";
            });
          }}
          onClick={(e) => {
            <Popup timeout={2000} text="POLLA" x={e.clientX} y={e.clientY}/>
          }}
        />
      </a>
    </li>
  );
}
export function IconList() {
  return (
    <ul className="IconList">
      <Icon link="https://github.com/Dev-ardi" alt="github" img={github} />
      <Icon
        link="https://www.linkedin.com/in/oriong/"
        alt="LinkedIn"
        img={linkedin}
      ></Icon>
      <Icon link="https://twitter.com/Dev_Ardi" alt="Twitter" img={twitter} />
      <IconPopup
        link="mailto:oriongonza@gmail.com"
        alt="email"
        img={email}
        text="oriongonza@gmail.com"
      />
      <IconPopup
        link="tel:+34652522142"
        alt="phone number"
        img={phone}
        text="+34 652 522 142"
      />
      <IconPopup
        link="#"
        alt="location"
        img={location}
        text="Palencia, Spain"
      />
    </ul>
  );
}
