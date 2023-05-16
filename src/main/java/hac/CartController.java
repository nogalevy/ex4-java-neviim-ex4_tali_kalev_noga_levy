package hac;

import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CartController {
//    @Autowired
//    private PurchaseRepository repository;  // this is the JPA repository (SQL database)

    @GetMapping("/cart")
    public int showPurchases() {
        return 3;
    }

    @PostMapping("/cart")
    public ResponseEntity<CartItem> addPurchase(@RequestBody final CartItem cartItem) {
        //TODO: add to session
        return ResponseEntity.ok(cartItem) ; // this is a JPA method to save a purchase to the database
    }
}
