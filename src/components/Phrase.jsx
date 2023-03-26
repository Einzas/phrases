import Button from "./Button";
import Planet from "./Planet";
import "./styles/Phrase.css";
function Phrase({ phrase, handleSetPhrase }) {
  return (
    <div>
      <section>
        <article className="title">
          <h1>
            <p>INFOGALAX</p>
          </h1>
        </article>
        <article className="card">
          <div className="text">{phrase.phrase}</div>
        </article>
        <article className="btn">
          <Button handleSetPhrase={handleSetPhrase} />
        </article>
        <article className="planet">
          <Planet author={phrase.author}  />
        </article>
      </section>
    </div>
  );
}
export default Phrase;
