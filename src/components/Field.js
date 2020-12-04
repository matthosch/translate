import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const labelText = this.context.language === "english" ? "Name" : "Naam";

    return (
      <div className="ui field">
        <label>{labelText}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
