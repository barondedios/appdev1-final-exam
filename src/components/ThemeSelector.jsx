export default function ThemeSelector({ setTheme }) {
  return (
    <div className="flexrow-container">
      <div className="standard-theme theme-selector" onClick={() => setTheme("standard")}></div>
      <div className="light-theme theme-selector" onClick={() => setTheme("light")}></div>
      <div className="darker-theme theme-selector" onClick={() => setTheme("darker")}></div>
    </div>
  );
}
