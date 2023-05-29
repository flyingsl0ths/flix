import MovieOpenOutline from "../../assets/MovieOpenOutline.svg";
import CalendarMonth from "../../assets/CalendarMonth.svg";
import Actor from "../../assets/Actor.svg";
import Filmstrip from "../../assets/Filmstrip.svg";
import Pill from "../Pill";

export type MovieInfo = {
  readonly cast: readonly string[];
  readonly directors: readonly string[];
  readonly genres: readonly string[];
  readonly plot: string;
  readonly poster: string;
  readonly released: string;
  readonly title: string;
};

export default function Movie(props: MovieInfo): JSX.Element {
  return (
    <div className="w-1/2 m-5 p-6 flex rounded-lg shadow-lg items-center select-none">
      <img
        className="w-1/4 h-1/4 rounded-lg"
        src={props.poster}
        alt="The movie's promotional image"
      />
      <div className="p-6 flex flex-col space-y-2 overflow-auto">
        <div className="flex flex-row items-center space-x-2">
          <div className="flex flex-row items-center space-x-2 font-bold">
            <img className="w-5" src={Filmstrip} alt="" />
            <h1 className="text-lg">{props.title}</h1>
          </div>

          <span className="font-light">|</span>

          <div className="flex flex-row items-center space-x-2">
            <img className="w-5" src={CalendarMonth} alt="" />
            <h2 className="text-md font-light">{props.released}</h2>
          </div>
        </div>

        <p className="mb-5 text-base">{props.plot}</p>

        {props.directors.map((director, index) => (
          <Pill key={index}>
            <img className="w-5" src={MovieOpenOutline} />
            <h2 className="text-sm hover:transition-colors hover:text-sky-400">
              {director}
            </h2>
          </Pill>
        ))}

        <div className="p-1 flex flex-row space-x-2 overflow-auto">
          {props.cast.map((cast, index) => (
            <Pill key={index}>
              <img className="w-4" src={Actor} />
              <h2 className="text-xs hover:transition-colors hover:text-sky-400">
                {cast}
              </h2>
            </Pill>
          ))}
        </div>

        <div className="p-1 flex flex-row space-x-2 overflow-auto">
          {props.genres.map((genre, index) => (
            <Pill key={index}>
              <h2 className=" text-sm">{genre}</h2>
            </Pill>
          ))}
        </div>
      </div>
    </div>
  );
}
