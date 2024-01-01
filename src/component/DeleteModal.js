import React from "react";
import Button from "./Button";
import "../styles/EditModal.css";

class DeleteModal extends React.Component {
    delById = (id) => {
        this.props.del(id);
      };
  render() {
    const { data, close } = this.props;
   
    if (this.props.delete) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Anda Yakin?</h3>
            <div className="btn-group" style={styelOne}>
              <Button
                text="Hapus"
                variant="primary"
                action={() => this.delById(data.id)}
              />
              <Button
                text="Batal"
                variant="warning"
                action={close}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const styelOne = {
  marginTop: "25px",
};

export default DeleteModal;
