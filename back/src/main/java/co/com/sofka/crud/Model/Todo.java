package co.com.sofka.crud.Model;
import javax.persistence.*;

@Entity
@Table(name="Todos")
public class Todo {

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Column(unique = true,nullable = false,name="id")
    private Long id;

    @Column(name="Nombre")
    private String name;

    @Column(name="Completado")
    private boolean completed;

    @Column(name="Grupo_Id")
    private Long groupListId;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Long getGroupListId() {
        return groupListId;
    }

    public void setGroupListId(Long groupListId) {
        this.groupListId = groupListId;
    }
}