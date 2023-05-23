package hac.beans;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Component
public class ShoppingCart {

    private Map<Integer, CartItem> shoppingCart;

    public ShoppingCart(){
        this.shoppingCart = new HashMap<>();
    }

    public Map<Integer, CartItem> getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(Map<Integer, CartItem> shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public void add (CartItem item){
        shoppingCart.put(item.getId(), item);
    }

    public void deleteById (Integer id){
        shoppingCart.remove(id);
    }

    public void clear (){
        shoppingCart.clear();
    }
}
