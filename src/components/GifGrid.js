import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      <hr />
      {loading && <p>loading...</p>}
      <div className="gifSection">
        {data.map((cat) => (
          <GifGridItem key={cat.id} {...cat} />
        ))}
      </div>
    </>
  );
};
