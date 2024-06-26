/**
 * movie card modal - shows the movie title and description (overview)
 * @param id
 * @param img
 * @param title
 * @param description
 * @returns {JSX.Element}
 * @constructor
 */
export default function MovieModal({id, img, title, description}){
    return (
    <div className="modal fade" id={`movie${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content text-bg-light">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="card mb-3 w-100 text-bg-light" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img} className="img-fluid rounded-start" alt={title}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Overview:</h5>
                                    <p className="card-text">{description || "no description"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    )
}
