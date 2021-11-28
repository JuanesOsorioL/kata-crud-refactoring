package co.com.sofka.crud.Service;

import co.com.sofka.crud.Model.Grupo;
import co.com.sofka.crud.Repository.GrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class GrupoService {

    @Autowired
    private GrupoRepository gruporepository;
    //private TodoService todoRepository;

//solo un grupo
    public ArrayList<Grupo> list(){
        return (ArrayList<Grupo>) gruporepository.findAll();
    }


    public Grupo save(Grupo grupo){
        return gruporepository.save(grupo);
    }

    public void delete(Long id){
        gruporepository.delete(get(id));
    }

    public Grupo get(Long id){
        return gruporepository.findById(id).orElseThrow();
    }
}
