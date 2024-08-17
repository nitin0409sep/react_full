function customrender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

    for(let prop in reactElement.props){
        //!`` console.log(reactElement.props.prop); // undefiend, as it will search for props.prop not with key
        domElement.setAttribute(prop, reactElement.props['prop']); 
    }

  mainContainer.append(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me",
};

const mainContainer = document.getElementById("root");

customrender(reactElement, mainContainer);
