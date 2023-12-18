package ma.kinan.billingservice.models;

import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

/**
 * @author Eren
 **/
@Projection(name = "fullBill", types = Bill.class)
public interface BillProjection {
    Long getId();
    Date getbillingDate();
    Long getCustomerId();
    List<ProductItem> getProductItems();
    Double getTotal();
}
