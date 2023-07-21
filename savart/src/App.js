/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import SavartLogo from "./Assets/savartlogo.svg";
import graph from "./Assets/image 2.png";
import graph2 from "./Assets/image1.png";
import britlogo from "./Assets/britlogo.png";
import "./searchbar.css";
import CurrentTrend from "./components/Current";
import Bookmark from "./components/Bookmark";
import RecentList from "./components/Recent";
import laptop from "./Assets/laptop.png"

function App() {
  const currentList = [
    {
      name: "Britannia Industries",
      title: "Britannia",
      price: "4267.50",
      imgUrl: "img1",
    },
    {
      name: "Lumax Industries India Ltd",
      title: "Britannia",
      price: "4267.50",
      imgUrl: "img2",
    },
    {
      name: "Avenue Supermarts Ltd",
      title: "Britannia",
      price: "4267.50",
      imgUrl: "img3",
    },
  ];
  const bookmarkList = [
    {
      name: "Britannia Industries",
      title: "Britannia",
      price: "4267.50",
      imgUrl: "img1",
    },
    {
      name: "Lumax Industries India Ltd",
      title: "Britannia",
      price: "4267.50",
      imgUrl: "img2",
    },
    {
      name: "Avenue Supermarts Ltd",
      title: "Britannia",
      price: "4267.50",
      imgUrl: "img3",
    },
  ];
  const recentList = [
    {
      name: "Britannia Industries",
      title: "Britannia",
      price: "4267.50",
      imgUrl: "img1",
    },
    {
      name: "Lumax Industries India Ltd",
      title: "Britannia",
      price: "4267.50",
      imgUrl: "img2",
    },
    {
      name: "Avenue Supermarts Ltd",
      title: "Britannia",
      price: "4267.50",
      imgUrl: "img3",
    },
  ];

  return (
    <div className="App">
      <div className="navbar">
        {/* display:flex flex-direction: column */}
        <div id="right-nav">
          <img src={SavartLogo} alt="savartlogo" />
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Benefits</a>
          <a href="#">...</a>
        </div>
        <div id="left-nav">
          <a href="tel:+91-9573720665">+91-9573720665</a>
          <button class="button rounded-corners" type="button">
            Get Started
          </button>
        </div>
        <div></div>
      </div>

      <div className="mainContainer">
        <div className="mainContainer_left">
          <div>
            <h1>
              Driven by <font color="#0000ffcf">Research</font> Accelerated by{" "}
              <font color="#0000ffcf">AI </font>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="mainContainer_right">
          <div className="circle1"></div>
          <img src={graph} alt="graph" />
          <img src={graph2} alt="graph2" />
        </div>
      </div>

      <div className="searchbar">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="searchstock" />
          <button type="submit"></button>
        </form>
      </div>

      {/* <div>
        <div className="row1">
          <h2>Currently Trending</h2>
        </div>
        <div className="row2">
          <h2>Your Bookmarks</h2>
        </div>
        <div className="row3">
          <h2>Resently Viewed</h2>
        </div>
      </div> */}
      <div className="blocks">
      <div className="curr-trend-head">
        <h1>Currently Trending</h1>
      </div>
      
      <CurrentTrend
        imgUrl={currentList[0].imgUrl}
        name={currentList[0].name}
        title={currentList[0].title}
        price={currentList[0].price}
      ></CurrentTrend>
      <CurrentTrend
        imgUrl={currentList[1].imgUrl}
        name={currentList[1].name}
        title={currentList[1].title}
        price={currentList[1].price}
      ></CurrentTrend>
      <CurrentTrend
        imgUrl={currentList[2].imgUrl}
        name={currentList[2].name}
        title={currentList[2].title}
        price={currentList[2].price}
      ></CurrentTrend>

      <div>
        <h1>Your Bookmark</h1>
      </div>
      <Bookmark
        imgUrl={bookmarkList[0].imgUrl}
        name={bookmarkList[0].name}
        title={bookmarkList[0].title}
        price={bookmarkList[0].price}
      ></Bookmark>
      <Bookmark
        imgUrl={bookmarkList[0].imgUrl}
        name={bookmarkList[0].name}
        title={bookmarkList[0].title}
        price={bookmarkList[0].price}
      ></Bookmark>
      <Bookmark
        imgUrl={bookmarkList[0].imgUrl}
        name={bookmarkList[0].name}
        title={bookmarkList[0].title}
        price={bookmarkList[0].price}
      ></Bookmark>
      <div>
        <h1>Recently Viewed</h1>
      </div>

      <RecentList
        imgUrl={bookmarkList[0].imgUrl}
        name={bookmarkList[0].name}
        title={bookmarkList[0].title}
        price={bookmarkList[0].price}
      ></RecentList>
      <RecentList
        imgUrl={bookmarkList[0].imgUrl}
        name={bookmarkList[0].name}
        title={bookmarkList[0].title}
        price={bookmarkList[0].price}
      ></RecentList>
      <RecentList
        imgUrl={bookmarkList[0].imgUrl}
        name={bookmarkList[0].name}
        title={bookmarkList[0].title}
        price={bookmarkList[0].price}
      ></RecentList>
      </div>

      <div className="footer">
        <img src={laptop}></img>
      </div>

      {/* <CurrentTrend/> */}
    </div>
  );
}

export default App;
