package hac.repo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.io.Serializable;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.PositiveOrZero;
import static hac.Constants.EMAIL_MANDATORY;
import static hac.Constants.FIRST_NAME_MANDATORY;
import static hac.Constants.LAST_NAME_MANDATORY;
import static hac.Constants.EMAIL_VALID;
import static hac.Constants.PAYMENT_POSITIVE;

/**
 * a purchase is a record of a user buying a product. You should not need to edit this file
 * but if you feel like you need to, please get in touch with the teacher.
 */
@Entity
public class Purchase implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = FIRST_NAME_MANDATORY)
    private String firstName;

    @NotEmpty(message = LAST_NAME_MANDATORY)
    private String lastName;

    @NotEmpty(message = EMAIL_MANDATORY)
    @Email(message = EMAIL_VALID)
    private String email;

    @PositiveOrZero(message = PAYMENT_POSITIVE)
    private Double payment = 0.0;

    public Purchase(String email, Double total, String firstName, String lastName) {
        this.email = email;
        this.payment = total;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Purchase() {

    }

    // getters and setters
    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Double getPayment() {
        return payment;
    }

    public String getEmail() {
        return email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName=firstName;
    }

    public void setLastName(String lastName) {
        this.lastName=lastName;
    }

    public void setPayment(Double payment) {
        this.payment=payment;
    }

    public void setEmail(String email) {
        this.email=email;
    }

}


