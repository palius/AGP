declare namespace JSX {
    interface Element {}

    interface IntrinsicElements{
        div: any;
    }
}

interface movieData {
    title: string,
    year: number,
    rating: number
}

interface dbMovieData extends movieData {
    id: string
}