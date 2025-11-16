const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-solid border-white/10 mt-10">
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="#"
          className="text-[#9ca5ba] hover:text-white transition-colors"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        </a>
        <a
          href="#"
          className="text-[#9ca5ba] hover:text-white transition-colors"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              clipRule="evenodd"
              d="M11.75 1.073a.75.75 0 01.5 0l8.5 4.5a.75.75 0 01-.5 1.354L12 2.686l-8.25 4.241a.75.75 0 01-.5-1.354l8.5-4.5zM8.75 7.493a.75.75 0 01.5-1.354l8.5 4.5a.75.75 0 01-.5 1.354L8.75 7.493zm-4 4.002a.75.75 0 01.5-1.354l8.5 4.5a.75.75 0 01-.5 1.354l-8.5-4.5a.75.75 0 010-1.354z"
              fillRule="evenodd"
            ></path>
            <path d="M3 13.5a.75.75 0 01.75-.75H13.5a.75.75 0 010 1.5H3.75A.75.75 0 013 13.5z"></path>
          </svg>
        </a>
        <a
          href="#"
          className="text-[#9ca5ba] hover:text-white transition-colors"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.944 0C5.356 0 0 4.864 0 10.83c0 3.562 1.928 6.643 4.864 8.528l-1.12 4.555 4.72-2.224c1.168.448 2.448.688 3.792.688 6.588 0 11.944-4.864 11.944-10.83S18.532 0 11.944 0zm1.768 13.912h-3.488l-.24-1.328 1.984-3.216c.192-.288.096-.624-.24-.768-.336-.144-.72.048-.864.384l-1.632 3.12-1.296-2.256c-.192-.336-.576-.432-.864-.24-.336.192-.432.576-.24.864l2.112 3.696.048.144h4.128c.384 0 .672-.288.672-.672s-.336-.624-.672-.624z"></path>
          </svg>
        </a>
      </div>
      <p className="text-[#9ca5ba] text-base font-normal leading-normal">
        © 2024 rppystore. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
