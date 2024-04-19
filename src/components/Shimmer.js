import './Shimmer.css'
const Shimmer = () => {
  return (
    <div className="flex flex-wrap py-[11px] px-24 mt-20 justify-center">
      {Array(20)
        .fill("")
        .map(function (i, ind) {
          return <div className="ShimmerCard" key={ind}></div>;
        })}
    </div>
  );
};
export default Shimmer;
