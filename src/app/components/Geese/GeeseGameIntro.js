import React from "react";

const GeeseGameIntro = (props) => {
    return (
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Gänse</h1>
                    <hr/>
                </div>
                <div className="col-12">
                    <p className="lead">
                        Die Wildgänse bilden ein Untergruppe in der Familie der Entenvögel. Eine Besonderheit der Wildgänse ist, dass diese Schwimmvögel zwar zum Ruhen und
                        zur Aufzucht ihrer Jungen auf Gewässer angewiesen sind, sie aber ihre Nahrung fast nur an Land suchen. Man kann die Wildgänse zusätzlich noch in 
                        Feldgänse und sogenannte "bunte Gänse" unterscheiden. Die Feldgänse nehmen fast ausschließlich pflanzliche Nahrung zu sich, die sie auf Feldern suchen,
                        während die bunten Gänse auch tierische Nahrung auf Gewässern zu sich nehmen. Die Wildgänse leben in der Regel in lebenslanger Ehe und sind üblicherweise 
                        Bodenbrüter im Uferbereich (Ausnahmen gibt es bei den Halbgänsen). Die Brutzeit der Gänse beträgt ca. 4 Wochen (zwischen 27 und 29 Tagen). Die Wildgänse unterliegen laut BJG dem Jagdrecht.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GeeseGameIntro;