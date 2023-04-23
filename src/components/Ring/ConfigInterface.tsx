import { useTransition } from "react";
import { useRingConfig } from "./ConfigContext";

const ConfigInterface = () => {
  const [, startTransition] = useTransition();
  const {
    diamond,
    headColor,
    bodyColor,
    setHeadColor,
    setBodyColor,
    setDiamond,
  } = useRingConfig();

  const changeHeadMetal = (e) => {
    console.log(e.target.value);
    startTransition(() => {
      setHeadColor(e.target.value);
    });
  };
  const changeBodyMetal = (e) => {
    console.log(e.target.value);
    startTransition(() => {
      setBodyColor(e.target.value);
    });
  };
  const changeDiamond = (e) => {
    console.log(e.target.value);
    startTransition(() => {
      setDiamond(e.target.value);
    });
  };

  return (
    <div
      style={{
        position: "absolute",
        border: "1px solid yellowgreen",
        zIndex: 1,
        right: "2rem",
        padding: "2rem",
        color: "black",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <h3>Configure your favourite Ring</h3>
      <section>
        <fieldset>
          <legend>Head Metal</legend>
          <div onClick={changeHeadMetal}>
            <input
              id="metal1"
              type="radio"
              name="headmetal"
              value="gold"
              checked={headColor == "gold"}
            ></input>
            <label htmlFor="metal1">Gold</label>

            <input
              id="metal2"
              type="radio"
              name="headmetal"
              value="silver"
              checked={headColor == "silver"}
            ></input>
            <label htmlFor="metal2">Silver</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Body Metal</legend>
          <div onClick={changeBodyMetal}>
            <input
              id="bodymetal1"
              type="radio"
              name="bodymetal"
              value="gold"
              checked={bodyColor == "gold"}
            ></input>
            <label htmlFor="bodymetal1">Gold</label>

            <input
              id="bodymetal2"
              type="radio"
              name="bodymetal"
              value="silver"
              checked={bodyColor == "silver"}
            ></input>
            <label htmlFor="bodymetal2">Silver</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Diamond</legend>
          <div onClick={changeDiamond}>
            <input
              id="diamond1"
              type="radio"
              name="diamond"
              value="1"
              checked={diamond == 1}
            ></input>
            <label htmlFor="diamond1">Diamond 1</label>

            <input
              id="diamond2"
              type="radio"
              name="diamond"
              value="2"
              checked={diamond == 2}
            ></input>
            <label htmlFor="diamond2">Diamond 2</label>

            <input
              id="diamond3"
              type="radio"
              name="diamond"
              value="3"
              checked={diamond == 3}
            ></input>
            <label htmlFor="diamond3">Diamond 3</label>
          </div>
        </fieldset>
      </section>
    </div>
  );
};

export default ConfigInterface;
