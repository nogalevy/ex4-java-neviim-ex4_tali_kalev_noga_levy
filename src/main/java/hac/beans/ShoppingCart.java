package hac.beans;

import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class ShoppingCart {

    private ArrayList<CartItem> shoppingCart;

    public ShoppingCart(){
        this.shoppingCart = new ArrayList<>();
    }

    public ArrayList<CartItem> getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ArrayList<CartItem> shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public void add (CartItem item){
        shoppingCart.add(item);
    }
}
