package backend.infrastructure.persistence.adapter;

import backend.infrastructure.persistence.entities.Hall;
import backend.infrastructure.persistence.entities.Seat;
import backend.infrastructure.persistence.mapper.SeatMapper;
import backend.infrastructure.persistence.repositorys.IHallJpaRepository;
import backend.domain.models.DomainHall;
import backend.domain.models.DomainSeat;
import backend.domain.ports.repositorys.IHallRepository;
import backend.infrastructure.persistence.mapper.HallMapper;
import backend.infrastructure.persistence.repositorys.ISeatJpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class HallRepositoryAdapter implements IHallRepository {
    private final IHallJpaRepository hallJpaRepository;
    private final HallMapper mapper;
    private final ISeatJpaRepository iSeatJpaRepository;


    @Autowired
    public HallRepositoryAdapter(IHallJpaRepository hallJpaRepository, HallMapper mapper, ISeatJpaRepository iSeatJpaRepository) {
        this.hallJpaRepository = hallJpaRepository;
        this.mapper = mapper;
        this.iSeatJpaRepository = iSeatJpaRepository;
}

    @Override
    public DomainHall save(DomainHall entity) {
        Hall hallEntity = mapper.toEntity(entity);
        Hall savedEntity = hallJpaRepository.save(hallEntity);
        return mapper.toDomain(savedEntity);
    }

    @Override
    public Optional<DomainHall> findById(Long id) {
        return hallJpaRepository.findById(id).map(mapper::toDomain);
    }

    @Override
    public List<DomainHall> findAll() {
        return hallJpaRepository.findAll().stream()
                .map(mapper::toDomain)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        hallJpaRepository.deleteById(id);
    }

    @Override
    public boolean isAllSeatsFullByHallId(Long id) {
        List<Seat> seats = iSeatJpaRepository.findAll().stream().filter(m -> m.getHall().getId() == id).toList();
        for (Seat seat : seats) {
            if (!seat.isBooked()) {
                return false;
            }
        }
        return true;
    }

    @Transactional
    @Override
    public List<DomainSeat> showEmptySeats(Long id) {
        final SeatMapper seatMapper = new SeatMapper(hallJpaRepository);
        Hall hall =  hallJpaRepository.findById(id).orElseThrow();
        return hall.getSeats()
                .stream()
                .map(seatMapper::toDomain)
                .filter(m -> !m.isBooked())
                .toList();
    }
    public DomainHall update(DomainHall dto, Long id){
        DomainHall databaseElement = findById(id).orElseThrow(
                () -> new RuntimeException("Entity with that id couldnt find" + id)
        );
        Hall entity = mapper.toEntity(databaseElement);
        Hall savedEntity = hallJpaRepository.save(mapper.update(entity, dto));
        return mapper.toDomain(savedEntity);

    }
}
