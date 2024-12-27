import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFrontView, setIsFrontView] = useState(true);  
  const dropdownRef = useRef(null);

  const toggleImage = () => {
    setIsFrontView(!isFrontView);
  };

  

  const handleClick = () => {
    setIsStarted(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <div>
      {/* Overlay for light white background */}
      {isDropdownOpen && <div style={styles.overlay}></div>}

      <div style={styles.dropdownContainer} ref={dropdownRef}>
        <button style={styles.dropdownButton} onClick={toggleDropdown}>
          Collections ▼
        </button>
        {isDropdownOpen && (
          <div style={styles.dropdownMenu}>
            <a href="#" style={styles.dropdownItem}>
              Apple Watch Series 10
            </a>
            <a href="#" style={styles.dropdownItem}>
              Apple Watch Hermès Series 10
            </a>
            <a href="#" style={{ ...styles.dropdownItem, ...styles.dropdownItemLast }}>
              Apple Watch SE
            </a>
          </div>
        )}
      </div>
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

        <div
          style={{
            ...styles.watchContainer,
            ...(isStarted && styles.watchContainerShifted),
          }}
        >
          <div>
            {isFrontView ? (
              <img
                src="/Apple-watch-series-10.webp"
                alt="Front View of Apple Watch"
                style={{
                  ...styles.watchImage,
                  ...(isStarted && styles.watchImageShifted),
                }}
              />
            ) : (
              <img
                src="/-original-imah4jndwgy9yfhz.webp"
                alt="Side View of Apple Watch"
                style={{
                  ...styles.sideWatchImage,
                }}
              />
            )}
          </div>

          {isStarted && (
            <>
              <div>
                <button style={styles.button} onClick={toggleImage}>
                  {isFrontView ? "Switch to Side View" : "Switch to Front View"}
                </button>
              </div>
              <p style={styles.headerText}>APPLE WATCH SERIES 10</p>
              <p style={styles.headerText}>46mm Jet Black Aluminum Case with Black Solo Loop</p>
              <h1 style={styles.headerText}>From $429</h1>
              <div>
                <button style={styles.button}>Size</button>
                <button style={styles.button}>Case</button>
                <button style={styles.button}>Band</button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffffff",
    height: "100vh",
    fontFamily: "San Francisco, Arial, sans-serif",
    overflowX: "hidden",
  },
  header: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "50px",
    width: "90%",
    margin: "30px",
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
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(148, 148, 148, 0.7)", // Light white transparent background
    zIndex: 50, // Ensure it is behind the dropdown
  },
  dropdownContainer: {
    position: "absolute",
    top: "20px",
    right: "50%",
    transform: "translateX(50%)",
    zIndex: 100, // Ensure dropdown is above other content
  },
  dropdownButton: {
    fontSize: "16px",
    backgroundColor: "transparent",
    border: "none",
    padding: "10px 20px",
    color: "#1d1d1f",
    cursor: "pointer",
    fontWeight: "600",
    borderRadius: "8px",
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
    zIndex: 10,
    width: "200px",
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
    position: "relative",
    width: "100%",
    maxWidth: "700px",
  },
  watchContainerShifted: {
    transform: "translateY(-55%) scale(0.8)", // Moves up by 50%
    transition: "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  watchImage: {
    width: "100%",
    maxWidth: "400px",
    height: "400px",
    display: "block",
    margin: "0 auto",
    transition: "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)", // Smooth transition for size
  },
  sideWatchImage: {
    width: "100%",
    maxWidth: "300px",
    height: "400px",
    display: "block",
    margin: "0 auto",
    transform: "scale(0.6)",
  },
  watchImageShifted: {
    transform: "scale(0.8)", // Scales down to 70% of the original size
  },
};

export default App;
