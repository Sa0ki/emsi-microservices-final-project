package ma.kinan.billingservice.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Eren
 **/
@Data @AllArgsConstructor @NoArgsConstructor @Builder
public class Product {
    private Long id;
    private String name;
    private Integer quantity;
    private Double price;
}
