import React from "react";
class MyPureComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldComponentUpdate = this.props !== nextProps || this.state !== nextState; 
    console.log("Component Update: " + shouldComponentUpdate)
    return shouldComponentUpdate;
  }

  render() {
    console.log("Render: " + this.props.children)
    return this.props.children;
  }
}

export default MyPureComponent;