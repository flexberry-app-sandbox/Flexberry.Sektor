package Sektor.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Sektor.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ПричинУвольн
 */
@Entity(name = "IISSektorПричинУвольн")
@Table(schema = "public", name = "ПричинУвольн")
public class PrichinUvoln {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаполн")
    private Date датазаполн;

    @Column(name = "ПричУвольн")
    private String причувольн;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Specialist")
    @Convert("Specialist")
    @Column(name = "Специалист", length = 16, unique = true, nullable = false)
    private UUID _specialistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Specialist", insertable = false, updatable = false)
    private Specialist specialist;

    @OneToMany(mappedBy = "prichinuvoln", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Rekomendac> rekomendacs;


    public PrichinUvoln() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаполн() {
      return датазаполн;
    }

    public void setДатаЗаполн(Date датазаполн) {
      this.датазаполн = датазаполн;
    }

    public String getПричУвольн() {
      return причувольн;
    }

    public void setПричУвольн(String причувольн) {
      this.причувольн = причувольн;
    }


}