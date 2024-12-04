const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-2">
            <div className="nav justify-content-center justify-content-md-start">
              <a href="https://www.instagram.com/kristin.erken/">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-md-6 py-2 text-center text-md-end">
            <p className="m-0">
              © {new Date().getFullYear()} copyright all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
