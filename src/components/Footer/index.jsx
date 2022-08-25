const Footer = () => {
  return (
    <footer className="w-full h-10 bg-indigo-600 flex justify-center absolute bottom-0">
      <div className=" text-black flex justify-center items-center md:w-2/4">
        <a
          href="https://roykachani.com"
          target="blank"
          className="w-auto underline font-sm flex justify-center items-center rounded-lg shadow-sm transition-colors hover:text-indigo-300"
        >
          Roy kachani
        </a>
      </div>
    </footer>
  );
};

export default Footer;
