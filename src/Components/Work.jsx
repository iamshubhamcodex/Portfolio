import React, { useEffect, useRef, useState } from "react";
import "../CSS/work.css";

const Work = () => {
  // const Card = (props) => {
  //   const { title, span, made, text, hrefP } = props.val;
  //   const { ref, img } = gett(props.idd + 1);
  //   return (
  //     <>
  //       <div className="card">
  //         <div className="hover">
  //           <h3 className="tit">{title}</h3>
  //           <p className="text">
  //             This is a <span>{span}</span>
  //             {made}
  //             <br />
  //             {text}
  //           </p>
  //           <a target="_blank" rel="noreferrer" ref={ref} href={href + hrefP}>
  //             Google
  //           </a>
  //           <button
  //             onClick={() => {
  //               a.current.click();
  //             }}
  //           >
  //             View Code on Github
  //           </button>
  //         </div>
  //         <img src={img} alt="" />
  //       </div>
  //     </>
  //   );
  // };

  // const href = "https://github.com/iamshubhamcodex/JavaProjects/tree/main/";
  return (
    <>
      <div className="work">
        <h1>Works</h1>
        <div className="cards">
          {/* {json.map((j, id) => {
            return <Card idd={id} val={j} />;
          })} */}
        </div>
      </div>
    </>
  );
};

export default Work;
