import '../css/Footer.css';

function Footer () {
    return (
        <div
        style={{
          display: "flex",
          gap: "1em",
          textAlign: "center",
          // background: "blue",
          justifyContent: "center",
          alignItems: "end",
          paddingBottom: "10px",
          // height: "10vh"
        }}
        className="config-footer"
      >
        <p>Atlas</p>
        <p>|</p>
        {/* <p>Boots 7</p> */}
        {/* <p>|</p> */}
        <p>&copy; 2024 - 2026</p>
        {/* <p>|</p> */}
        {/* <p><a href="https://github.com/tsolawoyin">tsolawoyin</a></p> */}
        {/* <p>
          <a href="#">Release note</a>
        </p> */}
      </div>
    )
}
export default Footer;
// to all the entrepreneurs in the world
// I know that none of you was very sure, but you all tried.
// you all initialized the process and everything is just cool.
// The process is not linear but kind of Brownian...