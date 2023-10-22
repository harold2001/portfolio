function Me() {
  return (
    <div className="contenedor-card flex flex-col gap-4 justify-center items-center lg:flex-row">
      <img
        src="/img/me.jpg"
        alt="Harold Carazas"
        className="rounded-xl w-[300px]"
      />
      <div className="flex flex-col gap-3 text-paragraph">
        <div>
          <h2 className="text-title text-xl">Harold Carazas</h2>
          <small>Full Stack developer</small>
        </div>

        <div>
          <div className="flex gap-4">
            <img src="/icons/envelope.svg" alt="" />
            <span>hcarazasnires@gmail.com</span>
          </div>
          <div className="flex gap-4">
            <img src="/icons/telephone.svg" alt="" />
            <span>+51 993779470</span>
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo at est
          maiores eligendi voluptates velit eos nam, quas adipisci dolor!
        </p>
      </div>
    </div>
  );
}

export default Me;
