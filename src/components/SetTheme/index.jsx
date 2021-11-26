import { useStateValue } from "../../contexts/StateContext";

function SetTheme() {
  const [state, dispatch] = useStateValue();

  const handleTheme = () => {
    if (state.theme === "light") {
      dispatch({
        type: "setTheme",
        theme: "dark",
      });
    } else {
      dispatch({
        type: "setTheme",
        theme: "light",
      });
    }
  };

  return (
    <div>
      Tema:
      <button onClick={handleTheme}>
        {state.theme === "light" ? "Escuro" : "Claro"}
      </button>
    </div>
  );
}

export default SetTheme;
