package ma.kinan.customerservice.models;

import org.springframework.data.rest.core.config.Projection;

/**
 * @author Eren
 **/
@Projection(name = "fullCustomer", types = Customer.class)
public interface CustomerProjection {
    Long getId();
    String getFirstName();
    String getLastName();
    String getEmail();
    Integer getAge();
}
