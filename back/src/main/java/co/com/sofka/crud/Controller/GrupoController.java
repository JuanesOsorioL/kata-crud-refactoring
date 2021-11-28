package co.com.sofka.crud.Controller;

import co.com.sofka.crud.Model.Grupo;
import co.com.sofka.crud.Service.GrupoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class GrupoController {

    @Autowired
    private GrupoService gruposervice;

    @GetMapping(value = "api/grupo")//consultar un grupo
    public ArrayList<Grupo> list(){
        return gruposervice.list();
    }

/*   @GetMapping(value = "api/grupos")//consultar grupos
    //public ArrayList<Grupo> lista(){
   public void lista(){
      gruposervice.listacompleta();
    }*/

    @PostMapping(value = "api/grupos")//agregar grupo
    public Grupo save(@RequestBody Grupo grupo){
        return gruposervice.save(grupo);
    }

    @DeleteMapping(value = "api/{id}/grupos")
    public void delete(@PathVariable("id")Long id){
        gruposervice.delete(id);
    }
}
