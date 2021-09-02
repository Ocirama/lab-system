package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.Order;
import lt.ocirama.labsystem.model.entities.local.OrderEntity;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Component
public class OrderConverter {

    public List<Order> convert(List<OrderEntity> orders) {
        return orders.stream()
                .map(this::convert)
                .collect(toList());
    }

    public Order convert(OrderEntity order) {
        if (order == null) {
            throw new IllegalArgumentException("Order is required");
        }
        return new Order(
                order.getId(),
                order.getProtocolId(),
                order.getCustomer(),
                order.getTest(),
                order.getSampleType(),
                order.getOrderAmount(),
                order.getYear(),
                order.getDate());

    }
}
