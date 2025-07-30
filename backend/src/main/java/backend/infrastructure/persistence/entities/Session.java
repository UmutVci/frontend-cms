package backend.infrastructure.persistence.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "sessions")
public class Session extends BaseEntity {

       @Column(nullable = false)
       private LocalDateTime startTime;

       @ManyToOne(fetch = FetchType.LAZY)
       @JoinColumn(name = "movie_id", nullable = false)
       @OnDelete(action = OnDeleteAction.CASCADE)
       @JsonBackReference
       private Movie movie;

       @ManyToOne(fetch = FetchType.LAZY)
       @JoinColumn(name = "hall_id", nullable = false)
       @OnDelete(action = OnDeleteAction.CASCADE)
       @JsonBackReference
       private Hall hall;

    private Double price;

}

