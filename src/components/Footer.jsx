import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

import { BiLogoPinterestAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Footer() {
  const iconsTab = [
    { icon: <CiLinkedin />, name: 'linkedIn',url:'https://www.linkedin.com/in/roshan-gupta-2611792a3/' },
    { icon: <LuGithub />, name: 'github',url:'https://github.com/roshan-gupta-404' }
  ];

  return (
    <>
      <footer id="footer" className="p-4 border-t border-t-slate-500">
      <div className='max-w-screen-2xl  mx-auto'>
          <div className="flex flex-col-reverse sm:flex-row sm justify-between items-center text-black bottom-0 px-4">
            <div>
              <p className="text-center"> &copy; 2024 All rights reserved.</p>
            </div>
            <div className="flex justify-around">
              {iconsTab.map((item) => {
                return (
                  <div className="text-3xl sm:text-5xl mx-2 hover:text-orange-200 duration-300"
                    key={item.name}
                  >
                  <a href={`${item.url}`} target="_blank" >
                    {item.icon}
                  </a>
                  </div>
                )
              })}
            </div>
          </div>

        </div>


      </footer>
    </>
  );
}


export default Footer;
