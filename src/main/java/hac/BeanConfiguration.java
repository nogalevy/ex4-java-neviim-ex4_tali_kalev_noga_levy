package hac;

import hac.beans.ShoppingCart;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.SessionScope;

@Configuration
public class BeanConfiguration {
    /* BEAN using ctor - session scope */
    @Bean
    @SessionScope
    public ShoppingCart sessionBeanCart () {
        ShoppingCart shpc = new ShoppingCart();
//      TODO: delete or something  m.add(new CartItem("I'm session bean Messages"));
        return shpc;
    }
}
