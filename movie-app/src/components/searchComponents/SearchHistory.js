import {Action} from "../../consts/consts";
import {XLg} from "react-bootstrap-icons";


/**
 *
 * @param show bool to show history or not depending on type
 * @param historyState array of recently searched words
 * @param historyDispatch dispatch to change historyState
 * @param setSubmitValue string to search using fetch api
 * @returns {JSX.Element} displaying search history dropdown
 * @constructor
 */
export default function SearchHistory({show, historyState, historyDispatch, setSubmitValue}){

    /**
     * renders search history items in dropdown
     * @returns {*}
     */
    const renderDropdown = () => {
        const reversedList = historyState.list.slice().reverse();

        return (
            reversedList.map((item, index) => {
                return (
                    <li className="container d-flex justify-content-between align-items-center" key={index}>
                        <div className="dropdown-item" onClick={(e) => {
                            setSubmitValue(item);
                            console.log("add")
                        } }>
                            {item}
                        </div>
                        <div className="mt-1 btn" onClick={() => {
                            historyDispatch({type:Action.DELETE, payload: item});
                        }}>
                            <XLg className="text-secondary"/>
                        </div>
                    </li>
                );
            })
        );
    };

    return(
        <ul className={`dropdown-menu dropdown-menu-dark ${show  && historyState.list && historyState.list.length > 0 ? "visible" : "invisible"}`}>
            {renderDropdown()}
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <div
                    className="dropdown-item"
                    onClick={() => historyDispatch({ type: Action.CLEAR })}
                >
                    Clear Search History
                </div>
            </li>
        </ul>

    );
}