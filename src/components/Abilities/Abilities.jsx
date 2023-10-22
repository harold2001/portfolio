import Ability from "./Ability";

function Abilities() {
  return (
    <div className="contenedor-card lg:max-h-[250px]">
      <h3 className="font-bold mb-3">FRONT END</h3>
      <div className="flex flex-col gap-3 flex-wrap justify-center lg:flex-row lg:justify-between">
        <Ability tech={"React"} percentage={"70"} />
        <Ability tech={"Javascript"} percentage={"80"} />
        <Ability tech={"Javascript"} percentage={"80"} />
        <Ability tech={"Javascript"} percentage={"80"} />
        <Ability tech={"Javascript"} percentage={"80"} />
        <Ability tech={"Javascript"} percentage={"80"} />
        <Ability tech={"Javascript"} percentage={"80"} />
        <Ability tech={"Javascript"} percentage={"80"} />
      </div>
    </div>
  );
}

export default Abilities;
