import React, { Component } from 'react'; //import React Component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: this.props.pets
    };
  }

  adopt(name) {
    console.log('foo')
    this.setState(() => {
      let newPets = this.state.pets;
      for (let i = 0; i < newPets.length; i++) {
        if (newPets[i].name === name) newPets[i] = {...newPets[i], adopted: true};
      }
      return {pets: newPets}
    });
  }

  render() {
    let breeds = this.props.pets.map(x => {
      return x.breed;
    }).filter((x, index, array) => {
      return array.indexOf(x) === index;
    }).sort();
    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <BreedNav breeds={breeds}/>
              <AboutNav />
            </div>
            <div  id="petList" className="col-9" >
              <PetList adopt={this.adopt.bind(this)} pets={this.props.pets}/>
            </div>
          </div>
        </main>

        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </div>
    );
  }
}

export default App;


const AboutNav = () => {
  return (
    <nav id="aboutLinks">
      <h2>About</h2>
      <ul className="list-unstyled">
        <li><a href="#/">How to Adopt</a></li>
        <li><a href="#/">Volunteering</a></li>
        <li><a href="#/">Events</a></li>
        <li><a href="#/">Donate</a></li>
        <li><a href="#/">About Us</a></li>
      </ul>
    </nav>
  )
}

const BreedNav = (props) => {
  return (
    <nav id="breedLinks">
      <h2>Pick a Breed</h2>
      <ul className="list-unstyled">
        {props.breeds.map((x, index) => {
          return <li key={index}><a href={'#'}>{x}</a></li>
        })}
      </ul>
    </nav>
  )
}

const PetCard = (props) => {
  return (
    <div className="card" onClick={props.adoptCallback}>
      <img className="card-img-top" src={props.data.img} alt={props.data.name}/>
      <div className="card-body">
        <h3 className="card-title">{props.data.name}{(props.data.adopted ?
          " (Adopted)" : "")}</h3>
        <p className="card-text">{props.data.sex} {props.data.breed}</p>
      </div>
    </div>
  )
}

const PetList = (props) => {
  return (
    <div>
      <h2>Dogs for Adoption</h2>
      <div className="card-deck">
        {props.pets.map((x, index) => {
          return <PetCard adoptCallback={() => props.adopt(x.name)} key={index} data={x} />
        })}
      </div>
    </div>
  )
}