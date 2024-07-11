import React, { PureComponent } from "react";

type Props = {};

export default class FileManager extends PureComponent<Props> {
  render() {
    return (
      <div className="file_manager_container">
        <h1 className="h1_heavy" id="oktopus_title">
          Oktopus
        </h1>
        <div className="file_manager_content">
          <h2 className="h2_heavy">Home</h2>
        </div>
      </div>
    );
  }
}
