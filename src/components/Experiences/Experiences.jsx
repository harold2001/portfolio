import Experience from "./Experience"

function Experiences() {
  return (
    <div className="contenedor-card">
      <h3 className="text-xl mb-6">Experiences</h3>
      <div className="flex flex-col gap-8">
        <Experience />
        <Experience />
      </div>
    </div>
  )
}

export default Experiences