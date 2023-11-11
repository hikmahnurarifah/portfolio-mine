import data from "../../data/index.json";

export default function MyHobby() {
  return (
    <section className="hobby--section" id="MyHobby">
      <div className="hero--section--content">
        <p className="section--title">Hobby</p>
        <h2 className="hobby--section--heading">My Hobbies</h2>
      </div>
      <div className="hobby--section--container">
        {data?.hobby?.map((item, index) => (
          <div key={index} className="hobby--section--card">
            <div className="hobby--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="hobby--section--card--content">
              <h3 className="hobby--section--title">{item.title}</h3>
              <p className="hobby--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}