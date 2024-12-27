// import React from 'react';

// const App = () => {
//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <img 
//           src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
//           alt="Apple Logo" 
//           style={styles.logo} 
//         />
//         <span style={styles.headerText}>WATCH</span>
//       </header>

//       <div style={styles.content}>
//         <h3 style={styles.title}>Apple Watch Studio</h3>
//         <h1 style={styles.mainText}>
//           Choose a case. <br />
//           Pick a band. <br />
//           Create your own style.
//         </h1>
//         <button style={styles.button}>Get started</button>
//         <img 
//         src="/Apple-watch-series-10.webp" 
//           alt="Apple Watch" 
//           style={styles.watchImage} 
//         />
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: 'San Francisco, Arial, sans-serif',
//     backgroundColor: '#ffffff',
//     height: '100vh',
//     padding: '30px',
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     gap: '3px',
//     marginBottom: '50px',
//   },
//   logo: {
//     height: '18px',
//     marginBottom: '5px',
//   },
//   headerText: {
//     fontSize: '18px',
//     fontWeight: 'bold',
//   },
//   content: {
//     display:'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems:'flex-start',
//     maxWidth: '650px',
//     margin: '0 auto',
//   },
//   title: {
//     fontSize: '18px',
//     marginBottom: '0',
//     fontWeight:500,
//   },
//   mainText: {
//     paddingTop:'0px',
//     fontSize: '59px',
//     marginTop: '5px',
//     marginBottom: '20px',
//     paddingBottom: '20px',
//     color:'#212121',
//   },
//   button: {
//     backgroundColor: '#0071e3',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '24px',
//     padding: '10px 20px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginBottom :'0px',
//   },
//   watchImage: {
//     marginTop: '0px',
//     paddingTop: '0px',
//     width: '100%',
//     maxWidth: '1000px',
//     objectFit: 'contain',
//   },
// };

// export default App;



import React, { useState } from "react";

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsStarted(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple Logo"
          style={styles.logo}
        />
        <span style={styles.headerText}>WATCH</span>
      </header>

      {/* Dropdown Container Outside of Content */}
      <div style={styles.dropdownContainer}>
        <button style={styles.dropdownButton} onClick={toggleDropdown}>
          Collections ▼
        </button>
        {isDropdownOpen && (
          <div style={styles.dropdownMenu}>
            <a href="#" style={styles.dropdownItem}>
              Series 10
            </a>
            <a href="#" style={styles.dropdownItem}>
              Series 9
            </a>
            <a href="#" style={styles.dropdownItem}>
              SE
            </a>
          </div>
        )}
      </div>

      <div style={styles.content}>
        {/* Text Content */}
        <div
          style={{
            ...styles.textContent,
            ...(isStarted && styles.textContentHidden),
          }}
        >
          <h3 style={styles.title}>Apple Watch Studio</h3>
          <div style={styles.mainTextContainer}>
            <h1 style={styles.mainText}>Choose a case.</h1>
            <h1 style={styles.mainText}>Pick a band.</h1>
            <h1 style={styles.mainText}>Create your own style.</h1>
          </div>
          <button style={styles.button} onClick={handleClick}>
            Get started
          </button>
        </div>
        

        {/* Watch Image */}
        <div
          style={{
            ...styles.watchContainer,
            ...(isStarted && styles.watchContainerShifted),
          }}
        >
          <img
            src="/Apple-watch-series-10.webp"
            alt="Apple Watch"
            style={{
              ...styles.watchImage,
              ...(isStarted && styles.watchImageShifted),
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffffff",
    padding: "30px",
    height: "100vh",
    fontFamily: "San Francisco, Arial, sans-serif",
  },
  header: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "50px",
    width: "100%",
  },
  logo: {
    height: "18px",
    marginBottom: "2px",
  },
  headerText: {
    fontSize: "18px",
    fontWeight: "bold",
    marginLeft: "3px",
    color: "#1d1d1f",
  },
  dropdownContainer: {
    position: "absolute",
    top: "30px",
    right: "50%",
    transform: "translateX(50%)",
    zIndex: 100, // Ensure dropdown is above other content
  },
  dropdownButton: {
    fontSize: "16px",
    backgroundColor: "transparent",
    border: "none",
    color: "#1d1d1f",
    cursor: "pointer",
    fontWeight: "600",
  },
  dropdownMenu: {
    position: "absolute",
    top: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    zIndex: 10,
  },
  dropdownItem: {
    display: "block",
    padding: "10px 20px",
    color: "#1d1d1f",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    borderBottom: "1px solid #f1f1f1",
  },
  content: {
    position: "relative",
    marginTop: "70px",
    width: "100%",
    maxWidth: "1450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textContent: {
    opacity: 1,
    transition: "opacity 0.8s ease-out",
  },
  textContentHidden: {
    opacity: 0,
    pointerEvents: "none", // Ensures the text section becomes inactive
  },
  title: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#1d1d1f",
    marginBottom: "0px",
  },
  mainTextContainer: {
    marginBottom: "30px",
  },
  mainText: {
    fontSize: "58px",
    fontWeight: "600",
    color: "#1d1d1f",
    margin: "10px 0",
    lineHeight: "0.9",
  },
  button: {
    backgroundColor: "#0071e3",
    color: "#ffffff",
    border: "none",
    borderRadius: "980px",
    padding: "12px 22px",
    fontSize: "17px",
    fontWeight: "400",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  watchContainer: {
    transform: "translateY(0) scale(1)", // Initial state
    transition: "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    width: "100%",
    maxWidth: "600px",
  },
  watchContainerShifted: {
    transform: "translateY(-68%) scale(0.6)", // Moves up by 50%
    transition: "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  watchImage: {
    width: "800px",
    height: "auto",
    display: "block",
    margin: "0 auto",
    marginRight: '150px',
    transition: "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)", // Smooth transition for size
  },
  watchImageShifted: {
    transform: "scale(0.7)", // Scales down to 70% of the original size
  },

  dropdownContainer: {
    position: "relative", // Changed to relative for better control
    display: "inline-block",
    textAlign: "center",
    zIndex: 100, // Ensure dropdown is above other content
  },
  dropdownButton: {
    fontSize: "16px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    color: "#333",
    cursor: "pointer",
    fontWeight: "600",
    borderRadius: "8px",
    padding: "10px 15px",
    transition: "background-color 0.3s, color 0.3s",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  dropdownButtonHover: {
    "&:hover": {
      backgroundColor: "#e0e0e0",
      color: "#000",
    },
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    zIndex: 10,
    minWidth: "180px", // Ensures menu has enough width
  },
  dropdownItem: {
    display: "block",
    padding: "12px 20px",
    color: "#333",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    borderBottom: "1px solid #f5f5f5",
  },
  dropdownItemHover: {
    "&:hover": {
      backgroundColor: "#f0f0f0",
      color: "#0071e3",
    },
  },
  dropdownItemLast: {
    borderBottom: "none", // Removes border from the last item
  },




    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white
      zIndex: 50, // Ensure it sits below the dropdown
    },
    dropdownContainer: {
      position: "relative",
      display: "inline-block",
      textAlign: "center",
      zIndex: 100, // Ensure dropdown is above the overlay
    },
    dropdownButton: {
      fontSize: "16px",
      backgroundColor: "transparent",
      border: "none",
      color: "#1d1d1f",
      cursor: "pointer",
      fontWeight: "600",
      width: "150px", // Adjust width for better alignment
      textAlign: "center",
    },
    dropdownMenu: {
      position: "absolute",
      top: "40px", // Adjust the gap below the button
      left: "50%",
      transform: "translateX(-50%)", // Center the dropdown below the button
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)", // Subtle shadow
      borderRadius: "8px",
      zIndex: 100,
      width: "200px", // Width matches dropdown item text length
    },
    dropdownItem: {
      display: "block",
      padding: "12px 15px", // Adjust padding for spacing
      color: "#1d1d1f",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "500",
      textAlign: "center", // Center-align text
      borderBottom: "1px solid #f1f1f1",
      cursor: "pointer",
    },
    dropdownItemLast: {
      borderBottom: "none", // Remove border for the last item
    },

  
  
};

export default App;
