package ma.kinan.inventoryservice.models;

import org.springframework.data.rest.core.config.Projection;

/**
 * @author Eren
 **/
@Projection(name = "fullProduct", types = Product.class)
public interface ProductProjection {
    Long getId();
    String getName();
    Double getPrice();
    Integer getQuantity();
}
