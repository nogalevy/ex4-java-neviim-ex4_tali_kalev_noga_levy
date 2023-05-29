/**
 * Spinner element
 * @returns {JSX.Element}
 * @constructor
 */

export default function Spinner(){
    return (
        <div className="spinner-border m-auto" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
