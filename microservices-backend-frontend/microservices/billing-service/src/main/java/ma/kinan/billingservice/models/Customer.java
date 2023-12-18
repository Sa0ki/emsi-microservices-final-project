package ma.kinan.billingservice.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Eren
 **/
@Data @AllArgsConstructor @NoArgsConstructor @Builder
public class Customer {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Integer age;
}
