import Button from "./Button";
import "./styles/Phrase.css";
function Phrase({ phrase, handleSetPhrase }) {
  return (
    <div>
      <section>
        <article className="title">
          <h1>
            <p>{phrase.author}</p>
          </h1>
        </article>
        <article className="card">
          <div className="text">{phrase.phrase}</div>
        </article>
        <article className="btn">
          <Button handleSetPhrase={handleSetPhrase} />
        </article>
      </section>
    </div>
  );
}
export default Phrase;
