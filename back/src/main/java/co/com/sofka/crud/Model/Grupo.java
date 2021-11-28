package co.com.sofka.crud.Model;

import javax.persistence.*;

@Entity
@Table(name="Grupo")
public class Grupo {

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Column(unique = true,nullable = false,name="idGrupo")
    private Long idGrupo;

    @Column(name="nombreGrupo")
    private String nameGroup;

    public Long getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(Long idGrupo) {
        this.idGrupo = idGrupo;
    }

    public String getNameGroup() {
        return nameGroup;
    }

    public void setNameGroup(String nameGroup) {
        this.nameGroup = nameGroup;
    }
}