import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";

function SetTheme({ setTheme }) {
  const { theme } = useContext(StateContext);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      Tema:
      <button onClick={handleTheme}>
        {theme === "light" ? "Escuro" : "Claro"}
      </button>
    </div>
  );
}

export default SetTheme;
