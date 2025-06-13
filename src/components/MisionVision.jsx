import "../assets/styles.css"; // Asegúrate de tener este CSS importado

export default function MisionVision() {
  return (
    <section className="mision-vision">
      <div className="container-mision">
        <h1>Misión y Visión</h1>
        <br />
        <div className="content-columns">
          <div className="column">
            <h2>Misión</h2>
            <p>
              Ser una institución educativa líder, comprometida con la formación integral de profesionales competentes y éticos, capaces de innovar y contribuir al desarrollo sostenible de la sociedad, a través de una enseñanza de calidad, investigación relevante y vinculación con el entorno.
            </p>
          </div>
          <div className="column">
            <h2>Visión</h2>
            <p>
              Para el año 2035, ser reconocida como un referente nacional e internacional en la generación de conocimiento, la promoción de la cultura y la formación de líderes con pensamiento crítico y capacidad de adaptación, que impacten positivamente en los desafíos globales y locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
