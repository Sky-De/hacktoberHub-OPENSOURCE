/* eslint-disable react/prop-types */
// import {AiFillHtml5} from 'react-icons/ai';
// import {RiJavascriptFill} from 'react-icons/ri';
// import {FaPython,FaRust} from 'react-icons/fa';
// import {SiCodio,SiTypescript,SiDart,SiElixir,SiRuby} from 'react-icons/si';
// import {TbBrandCpp,TbBrandGolang} from 'react-icons/tb';
// import {BiLogoJava} from 'react-icons/bi';

import { Link } from "react-router-dom"



// const getIconComponent = (lang) => {
//   switch (lang) {
//     case "JavaScript":
//       return <RiJavascriptFill />;
//     case "Python":
//       return <FaPython />;
//     case "C":
//       return <SiCodio />;
//     case "C++":
//       return <TbBrandCpp />;
//     case "GoLang":
//       return <TbBrandGolang />;
//     case "Rust":
//       return <FaRust />;
//     case "HTML":
//       return <AiFillHtml5 />;
//     case "TypeScript":
//       return <SiTypescript />;
//     case "Dart":
//       return <SiDart />;
//     case "Java":
//       return <BiLogoJava />;
//     case "Elixir":
//       return <SiElixir />;
//     case "Ruby":
//       return <SiRuby />;
//     default:
//       return null; // Return null for unknown languages
//   }
// };



const Button = ({lang}) => { 
    // const IconComponent = getIconComponent(lang)
  return (
    <div className="relative group m-3 w-fit inline-block">
  <div className="absolute -inset-0 group-hover:bg-purple-500 via-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
  <Link to={`/repos/${lang}`}>
  <button
    className='relative p-6  btn btn-lg  rounded-2xl leading-none transition duration-300 ring-2 ring-transparent hover:ring-blue-500 hover:shadow-md'
  >
    {lang}
  </button>
  </Link>
</div>

  )
}

export default Button