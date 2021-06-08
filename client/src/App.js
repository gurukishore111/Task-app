import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import List from './components/Lists/List';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="listsItem">
        {[1, 2, 3, 4, 5, 6].map((data) => (
          <div data-bs-toggle="modal" data-bs-target="#myModal" key={data}>
            <List />
          </div>
        ))}
      </div>
      <Footer />
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="MyModalLabel"
        aria-hidden="true"
      >
        <Form />
      </div>
    </div>
  );
}

export default App;
