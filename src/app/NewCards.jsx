

const NewCards = () => {
  return (
    <div style={{ marginTop:"50vh"}}>
      {["red", "green", "blue", "black", "yellow"].map((item, key) => {
        return <Cards key={key} colour={item} />;
      })}
    </div>
  );
};
const Cards = (props) => {
  return (
    <div style={{ position: "sticky", top: "50px", height: "100vh",display:"flex",justifyContent:"center"}}>
      <div style={{ backgroundColor: props.colour, width: "1000px", height: "500px" }}></div>
    </div>
  );
};
export default NewCards;
