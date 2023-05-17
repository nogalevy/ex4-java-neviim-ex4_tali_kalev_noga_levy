package hac;

import hac.beans.CartItem;
import hac.beans.ShoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//import java.util.ArrayList;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CartController {
    @Autowired //NOGA: ?
    @Qualifier("sessionBeanCart")
    private ShoppingCart shoppingCart;

    @GetMapping("/cart")
    public Map<Integer, CartItem> getShoppingCart() {
        return shoppingCart.getShoppingCart();
    }

    @PostMapping("/cart")
    public ResponseEntity<CartItem> addNewItem(@RequestBody final CartItem cartItem) {
        //add to session
        shoppingCart.add(cartItem);
        System.out.println("added "+ cartItem.getTitle());
        return ResponseEntity.ok(cartItem) ;
    }

    @DeleteMapping("/cart/{id}")
    public ResponseEntity<Integer> deleteItemById(@PathVariable Integer id) {
        shoppingCart.deleteById(id);
        return ResponseEntity.ok(id);
    }

    //TODO: delete all
}
