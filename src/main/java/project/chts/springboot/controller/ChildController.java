package project.chts.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.chts.springboot.exception.ChildNotFoundException;
import project.chts.springboot.model.Child;
import project.chts.springboot.repository.ChildRepository;
import project.chts.springboot.service.ChildService;



@RestController
@RequestMapping("/v1/")
public class ChildController {
	
	 @Autowired
	private ChildService childService;
	
	//get all Child
	@GetMapping("/childList")
	public List<Child> getAllChilds(){
		return childService.findAllChild();
	}	
	
	// create child rest api
	@PostMapping("/child")
		public Child createChild(@RequestBody Child child) {
			return childService.saveChild(child);	
			
		}
		
		// get child by id rest api
		@GetMapping("/child/{id}")
		public ResponseEntity<Child> getChildById(@PathVariable Integer id) {
			Child child = childService.findById(id);
			return ResponseEntity.ok(child);
		}
		
		// update child rest api
		
		@PutMapping("/child1/{id}")
		public ResponseEntity<Child> updateChild(@PathVariable Integer id, @RequestBody Child childDetails){
			Child child = childService.updateChild(id,childDetails);
			return ResponseEntity.ok(child);
		}
		
		// delete child rest api
		@DeleteMapping("/child/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteChild(@PathVariable Long id){
			Child child = childService.deleteChild(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
