export default function Cart(props) {

    return (
        <div className="container">
            <h3>checkout</h3>
            <form className="m-auto form-floating text-dark">
                <div class="row">
                    <div class="form-floating mb-3 col">
                        <input type="text" class="form-control" id="floatingFirst" placeholder="first name" />
                        <label for="floatingFirst">first name</label>
                    </div>
                    <div class="form-floating col">
                        <input type="text" class="form-control" id="floatingLast" placeholder="last name" />
                        <label for="floatingLast">last name</label>
                    </div>
                </div>
                <div class="form-floating ">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="name@gmail.com" />
                    <label for="floatingEmail">email</label>
                </div>
                <div class="m-auto">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    );
}

