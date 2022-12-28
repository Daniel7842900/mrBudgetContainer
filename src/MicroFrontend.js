import React from "react";

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => {
        return res.json();
      })
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";

        script.src = `${host}${manifest["files"]["main.js"]}`;
        document.head.appendChild(script);

        // This is technically onload's callback function
        //In callback function, 'this' is lost. So we need to bind 'this'.
        script.onload = this.renderMicroFrontend.bind(this);
      });
  }

  renderMicroFrontend() {
    const { name } = this.props;
    window[`render${name}`](`${name}-container`);
  }

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
