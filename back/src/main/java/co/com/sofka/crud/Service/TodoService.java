package co.com.sofka.crud.Service;


import co.com.sofka.crud.Model.Todo;
import co.com.sofka.crud.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    ////buscar todos por id grupo
    public ArrayList<Todo> TodosByIdGrupos(Long idGrupo){
        return repository.findBygroupListId(idGrupo);
    }


    public Iterable<Todo> list(){
        return repository.findAll();
    }

    public Todo save(Todo todo){
        return repository.save(todo);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public Todo get(Long id){
        return repository.findById(id).orElseThrow();
    }

}
