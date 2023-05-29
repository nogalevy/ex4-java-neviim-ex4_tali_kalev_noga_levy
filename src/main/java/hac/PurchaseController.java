package hac;

import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PurchaseController {
    @Autowired
    private PurchaseRepository repository;  // this is the JPA repository (SQL database)

    /**
     * gets purchase data and save it in database
     * @param purchase {@link Purchase}
     * @return
     */
    @PostMapping("/purchases")
    public Purchase addPurchase(@RequestBody final Purchase purchase) {
        return repository.save(purchase); // this is a JPA method to save a purchase to the database
    }
}
