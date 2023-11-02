




const styles = {
  backgroundImage: "url(src/assets/images/pattern-bg-mobile.png)",
  height: "20rem",
};

if (window.innerWidth >= 768) {
  styles.backgroundImage = "url(src/assets/images/pattern-bg-desktop.png) ";
}

function Jumbotron({ children }) {
  return (
    <div
      className="flex items-center py-9 px-4 bg-cover bg-center bg-no-repeat text-center"
      style={styles}
    >
      <div className="max-w-xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-white mb-5">
          {" "}
          IP Address Tracker
        </h1>
        {children}
      </div>
    </div>
  );
}

export default Jumbotron;
