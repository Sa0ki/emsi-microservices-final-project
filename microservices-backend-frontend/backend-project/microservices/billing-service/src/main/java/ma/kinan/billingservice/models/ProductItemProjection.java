package ma.kinan.billingservice.models;

import org.springframework.data.rest.core.config.Projection;

/**
 * @author Eren
 **/
@Projection(name = "fullProductItem", types = ProductItem.class)
public interface ProductItemProjection {
    Long getId();
    Integer getQuantityItem();
    Long getProductId();
    Bill getBill();
}
