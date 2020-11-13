package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter
@AllArgsConstructor
public class Order {
    private Integer id;
    private String protocolId;
    private String customer;
    private String test;
    private String sampleType;
    private int orderAmount;
    private int year;
    private Date date;
}
