function Ability({ tech, percentage }) {
  return (
    <div className="flex justify-between items-center lg:w-[45%]">
      <div className="w-30%">
        <span>{tech}</span>
      </div>
      <div className="w-[70%] h-[10px] bg-[#C4C4C4] rounded-xl overflow-hidden">
        <div
          className="h-full bg-[#2F80ED] rounded-xl"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Ability;
