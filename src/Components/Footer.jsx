const Footer = () => {
  const OpenHour = 12;
  const CloseHour = 22;
  const Hour = new Date().getHours();

  return (
    <footer className="order">
      <div className="btn">Order Now</div>
      <p>{Hour >= OpenHour && Hour <= CloseHour ? "We're Open Now" : "We're Closed"}</p>
    </footer>
  );
};

export default Footer;
