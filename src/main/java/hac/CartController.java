package hac;

import hac.beans.CartItem;
import hac.beans.ShoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class CartController {
    final String SUCCESS_MSG = "success";

    @Autowired
    @Qualifier("sessionBeanCart")
    private ShoppingCart shoppingCart;

    /**
     * get cart api returns the list of cart from session
     * @return Map of Integer and CartItem
     */
    @GetMapping("/cart")
    public Map<Integer, CartItem> getShoppingCart() {
        return shoppingCart.getShoppingCart();
    }


    /**
     * post cart - gets new item - instance of CartItem and add to map
     * @param cartItem {@link CartItem}
     * @return status 200 and cartItem or error bad request if already exist in map
     */
    @PostMapping("/cart")
    public ResponseEntity<CartItem> addNewItem(@RequestBody final CartItem cartItem) {
        //add to session
         if(shoppingCart.getShoppingCart().containsKey(cartItem.getId())){
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
         }
        shoppingCart.add(cartItem);
        return ResponseEntity.ok(cartItem) ;
    }

    /**
     * gets id and remove it from map
     * @param id {@link Integer}
     * @return the deleted id
     */
    @DeleteMapping("/cart/{id}")
    public ResponseEntity<Integer> deleteItemById(@PathVariable Integer id) {
        shoppingCart.deleteById(id);
        return ResponseEntity.ok(id);
    }

    /**
     * clear all map instance
     * @return String - status ok
     */
    @DeleteMapping("/cart")
    public ResponseEntity<String> deleteItemById() {
        shoppingCart.clear();
        return ResponseEntity.ok(SUCCESS_MSG);
    }
}
