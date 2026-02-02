
import Progect from "../components/progect/Progect";
import project02 from "./../img/projects/02.jpg";
import project03 from "./../img/projects/03.jpg";
import project04 from "./../img/projects/04.jpg";
import project05 from "./../img/projects/05.jpg";
import project06 from "./../img/projects/06.jpg";

const Progects = () => {
    return (<main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">

                <Progect />
                <Progect />
                <Progect />

            </ul>
        </div>
    </main>);
}

export default Progects;