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



@RestController
@RequestMapping("/api/v1/")
public class ChildController {
	
	@Autowired
	private ChildRepository childRepository;
	
	//get all Child
	@GetMapping("/child")
	public List<Child> getAllChilds(){
		return childRepository.findAll();
	}	
	
	// create child rest api
		@PostMapping("/child")
		public Child createChilds(@RequestBody Child child) {
			return childRepository.save(child);
		}
		
		// get child by id rest api
		@GetMapping("/child/{id}")
		public ResponseEntity<Child> getChildById(@PathVariable Integer id) {
			Child child = childRepository.findById(id)
					.orElseThrow(() -> new ChildNotFoundException("Child not exist with id :" + id));
			return ResponseEntity.ok(child);
		}
		
		// update child rest api
		
		@PutMapping("/child/{id}")
		public ResponseEntity<Child> updateChild(@PathVariable Integer id, @RequestBody Child childDetails){
			Child child = childRepository.findById(id)
					.orElseThrow(() -> new ChildNotFoundException("Child not exist with id :" + id));
			
			child.setAdhar_no(childDetails.getAdhar_no());
			child.setAge(childDetails.getAge());
			child.setBirthday(childDetails.getBirthday());
			child.setFirstName(childDetails.getFirstName());
			child.setGender(childDetails.getGender());
			child.setLastName(childDetails.getLastName());
			child.setRegistrationNo(childDetails.getRegistrationNo());
			
			Child updatedChild = childRepository.save(child);
			return ResponseEntity.ok(updatedChild);
		}
		
		// delete child rest api
		@DeleteMapping("/child/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteChild(@PathVariable Integer id){
			Child child = childRepository.findById(id)
					.orElseThrow(() -> new ChildNotFoundException("Child not exist with id :" + id));
			
			childRepository.delete(child);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
