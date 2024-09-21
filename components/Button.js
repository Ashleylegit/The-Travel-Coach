const Button = ({ children, href, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="button"
    >
      {children}
    </a>
  );
  
  export default Button;