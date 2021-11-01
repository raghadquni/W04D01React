import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ToDo from "./component/ToDo";


class App extends React.Component {

  render() {
  return (
    <>
    <Header />
    <ToDo />
    <Footer />
    </>
  )
}
}
export default App;


