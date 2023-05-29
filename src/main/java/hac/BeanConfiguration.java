package hac;

import hac.beans.ShoppingCart;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.SessionScope;

@Configuration
public class BeanConfiguration {
    /* BEAN using ctor - session scope */

    /**
     * create new session instance of {@link ShoppingCart}
     * @return ShoppingCart
     */
    @Bean
    @SessionScope
    public ShoppingCart sessionBeanCart () {
        ShoppingCart shpc = new ShoppingCart();
        return shpc;
    }
}
