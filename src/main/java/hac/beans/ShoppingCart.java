package hac.beans;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class ShoppingCart {

    private Map<Integer, CartItem> shoppingCart;

    /**
     * constructor
     */
    public ShoppingCart(){
        this.shoppingCart = new HashMap<>();
    }

    /**
     * shoppingCart getter
     * @return Map<Integer, CartItem> shopping cart
     */
    public Map<Integer, CartItem> getShoppingCart() {
        return shoppingCart;
    }

    /**
     * {@link ShoppingCart } setter
     * @param shoppingCart Map<{Integer, CartItem}
     */
    public void setShoppingCart(Map<Integer, CartItem> shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    /**
     * add new CartItem to map
     * @param item CartItem
     */
    public void add (CartItem item){
        shoppingCart.put(item.getId(), item);
    }

    /**
     * gets id and remove from map
     * @param id Integer
     */
    public void deleteById (Integer id){
        shoppingCart.remove(id);
    }

    /**
     * clear all shoppingCart map
     */
    public void clear (){
        shoppingCart.clear();
    }
}
