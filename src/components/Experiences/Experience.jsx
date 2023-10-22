import img from "/img/funval.png"

function Experience() {
  return (
    <div className="flex gap-3">
      <div className="w-[35%] pt-5">
        <img src={img} alt="FUNVAL" />
      </div>
      <div className="w-[65%] flex flex-col gap-5 text-paragraph">
        <div>
          <span>Feb 2017 - Current</span>
          <p className="font-bold text-black">Front-end developer</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil,
          aliquid sunt hic incidunt cumque.
        </p>
      </div>
    </div>
  );
}

export default Experience;
