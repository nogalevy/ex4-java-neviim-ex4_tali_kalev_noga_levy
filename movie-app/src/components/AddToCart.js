
const AddToCart = ({addToCart, index}) => {
    return (
        <div className="card-footer">
            <button onClick={()=>addToCart(index)} className="btn  card-title text-dark"> +  </button>
        </div>
    );
};

export default AddToCart;
