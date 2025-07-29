package backend.infrastructure.api.mapper;
import backend.domain.models.DomainCustomer;
import backend.infrastructure.api.dto.CustomerDTO;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component("apiCustomerMapper")
@NoArgsConstructor
public class CustomerMapper implements BaseMapper<DomainCustomer, CustomerDTO> {

    @Override
    public CustomerDTO toDto(DomainCustomer entity) {
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setId(entity.getId());
        customerDTO.setName(entity.getName());
        customerDTO.setCreatedAt(entity.getCreatedAt());
        customerDTO.setUpdatedAt(entity.getUpdatedAt());
        return customerDTO;
    }




    @Override
    public DomainCustomer toEntity(CustomerDTO dto) {
        DomainCustomer entity = new DomainCustomer();
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        return entity;
    }
}
