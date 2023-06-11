import '../App.css';

const Loading = () => (
  <div className="main_logo_container">
    <div className="logo-container">
      <img
        src="/logo.WebP"
        alt="Logo"
        fetchpriority="high" // eslint-disable-line
        className="light main_logo"
      />
    </div>
  </div>
);

export default Loading;
