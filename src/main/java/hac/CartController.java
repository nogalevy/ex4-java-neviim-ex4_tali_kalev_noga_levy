package hac;

import hac.beans.CartItem;
import hac.beans.ShoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class CartController {
    @Autowired //NOGA: ?
    @Qualifier("sessionBeanCart")
    private ShoppingCart shoppingCart;

    @GetMapping("/cart")
    public ArrayList<CartItem> showPurchases() {
        return shoppingCart.getShoppingCart();
    }

    @PostMapping("/cart")
    public ResponseEntity<CartItem> addPurchase(@RequestBody final CartItem cartItem) {
        //add to session
        shoppingCart.add(cartItem);
        System.out.println("added "+ cartItem.getTitle());
        return ResponseEntity.ok(cartItem) ;
    }

    //TODO: delete by id

    //TODO: delete all
}
