package co.com.sofka.crud.Repository;

import co.com.sofka.crud.Model.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    public abstract ArrayList<Todo> findBygroupListId(Long groupListId);
}
