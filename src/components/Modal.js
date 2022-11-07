
export const Modal = () => {
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Note</h5>
                    </div>
                    <div className="modal-body">
                        <input className="form-control form-control-lg my-2" type="text" placeholder="Change title" aria-label=".form-control-lg example" />
                        <input className="form-control my-2" type="text" placeholder="Change description" aria-label="default input example" />
                        <input className="form-control form-control-sm my-2" type="text" placeholder="Change tag" aria-label=".form-control-sm example" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;
