export default function Cart(props) {

    return (
        <div className="container">
            <h3>checkout</h3>
            <form className="m-auto form-floating text-dark">
                <div className="row">
                    <div className="form-floating mb-3 col">
                        <input type="text" className="form-control" id="floatingFirst" placeholder="first name" />
                        <label for="floatingFirst">first name</label>
                    </div>
                    <div className="form-floating col">
                        <input type="text" className="form-control" id="floatingLast" placeholder="last name" />
                        <label for="floatingLast">last name</label>
                    </div>
                </div>
                <div className="form-floating ">
                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@gmail.com" />
                    <label for="floatingEmail">email</label>
                </div>
                <div className="m-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    );
}

