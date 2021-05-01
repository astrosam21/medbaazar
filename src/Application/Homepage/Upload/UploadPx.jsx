import React, { Component } from "react";
import { connect } from "react-redux";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import PanoramaIcon from "@material-ui/icons/Panorama";
import DescriptionIcon from "@material-ui/icons/Description";
class UploadPx extends Component {
  filesArray = [];
  state = {
    formArray: [],
  };
  uploadFile = (e) => {
    this.filesArray.push(e.target.files);
    for (let i = 0; i < this.filesArray[0].length; i++) {
      this.formArray.push(this.filesArray[0][i]);
    }
    this.setState({ formArray: this.formArray });
    this.filesArray = [];
  };
  render() {
    return (
      <div>
        <GridContainer justify="center">
          <GridItem md={6}>
            <h2>Attach Prescription</h2>
            <Card style={{ padding: 20 }}>
              <h5 style={{ marginTop: 0 }}>UPLOAD</h5>
              <p>
                Please upload images of valid prescription from your doctor.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <label for={"file"}>
                  <Button
                    component={"span"}
                    style={{ margin: 30 }}
                    justIcon
                    round
                    color="info"
                  >
                    <PanoramaIcon />
                  </Button>
                </label>
                <input
                  id="file"
                  style={{ display: "none" }}
                  type="file"
                  multiple
                  className="file"
                  onAbort={() => {}}
                  onChange={(e) => {
                    if (e.target.files !== undefined) {
                      this.uploadFile(e);
                    }
                  }}
                  accept="/*"
                />

                <Button style={{ margin: 30 }} justIcon round color="info">
                  <DescriptionIcon />
                </Button>
              </div>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <Button round size="lg">
            Continue
          </Button>
        </GridContainer>
      </div>
    );
  }
}

export default UploadPx;
