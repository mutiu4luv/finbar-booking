// import React, { useEffect, useState } from "react";
// import "./Footer.css";

// const Footer = () => {
//   const [copyrightText, setCopyrightText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   useEffect(() => {
//     const copyrightString =
//       " Copyright 2024 Finbarrsax Musicals. All Rights Reserved.";
//     let i = 0;

//     const typeWriter = () => {
//       if (i < copyrightString.length) {
//         setCopyrightText(copyrightString.substring(0, i + 1));
//         i++;
//         setIsTyping(true);
//       } else {
//         setIsTyping(false);
//         setTimeout(() => {
//           setCopyrightText("");
//           i = 0;
//         }, 2000);
//       }
//     };

//     const typingInterval = setInterval(typeWriter, 50); // Adjust typing speed (lower for faster)

//     return () => clearInterval(typingInterval);
//   }, []);

//   return (
//     <div>
//       <footer class="church-footer">
//         <div class="footer-content">
//           <div class="footer-info">
//             <i class="fa-solid fa-church"></i> <h3>Logo</h3>
//             <p>A brief description of your church and its mission.</p>
//             <ul class="social-icons">
//               <li>
//                 <a href="/">
//                   <i class="fa-brands fa-facebook"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <i class="fa-brands fa-twitter"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <i class="fa-brands fa-instagram"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div class="footer-contact">
//             <p>Contact Information:</p>
//             <ul>
//               <li>
//                 <i class="fa-solid fa-phone"></i> Phone: +447957977715
//               </li>
//               <li>
//                 <i class="fa-solid fa-envelope"></i> Email:
//                 finbarregwuagu@gmail.com
//               </li>
//               <li>
//                 <i class="fa-solid fa-map-marker-alt"></i> Address: 123 Main
//                 Street, Anytown, CA 12345
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="copyright">
//           <span className={isTyping ? "typewriter typing" : "typewriter"}>
//             {copyrightText}
//           </span>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [copyrightText, setCopyrightText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const copyrightString =
      " Copyright 2024 Finbarrsax Musicals. All Rights Reserved.";
    let i = 0;

    const typeWriter = () => {
      if (i < copyrightString.length) {
        setCopyrightText(copyrightString.substring(0, i + 1));
        i++;
        setIsTyping(true);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setCopyrightText("");
          i = 0;
        }, 2000);
      }
    };

    const typingInterval = setInterval(typeWriter, 50); // Adjust typing speed (lower for faster)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <footer className="church-footer">
        <div className="footer-content">
          <div className="footer-info">
            <i className="fa-solid fa-church"></i>{" "}
            <img src="/public/finbar2.jpg" alt="" />
            <p>A brief description of your church and its mission.</p>
            <ul className="social-icons">
              <li>
                <a href="/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Information:</h3>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i> Phone: +447587312901
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> Email:
                finbarregwuagu@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-map-marker-alt"></i> Address:
                Thirkleby Close, Slough, Berkshire. United Kingdom
              </li>
            </ul>
          </div>
          <div className="footer-designed-by">
            <h3> Designed by:</h3>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i> Phone: +2347031911306
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> Email:
                chidiemmamadu@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <span className={isTyping ? "typewriter typing" : "typewriter"}>
            {copyrightText}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
