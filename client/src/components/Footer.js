import React from "react";

const styles = {
    footerStyle: {
      position: "relative",
      padding: 10,
      textAlign:"center",
      borderTop: "1px solid #ccc",
      marginTop:30
    }
  };

function Footer(){
    return(
  <footer style={styles.footerStyle}>
      Done by Meghedi Hacopi @2020
  </footer>
    )
}

export default Footer;