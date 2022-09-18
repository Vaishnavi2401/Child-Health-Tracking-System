package project.chts.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.chts.springboot.exception.BmiScreeningException;
import project.chts.springboot.model.BmiScreening;
import project.chts.springboot.repository.BmiScreeningRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BmiScreeningController {

	@Autowired
	private BmiScreeningRepository bmiscreeningRepository;
	
	//get all bmiscreening
	@GetMapping("/bmiscreening")
	public List<BmiScreening> getAllBmis(){
		return bmiscreeningRepository.findAll();
	}	
	
	// create bmiscreening rest api
		@PostMapping("/bmiscreening")
		public BmiScreening createBmis(@Valid @RequestBody BmiScreening bmiscreening) {
			return bmiscreeningRepository.save(bmiscreening);
		}
		
		// get bmiscreening by id rest api
		@GetMapping("/bmiscreening/{id}")
		public ResponseEntity<BmiScreening> getBmiScreeningById(@PathVariable Integer id) {
			BmiScreening bmiscreening = bmiscreeningRepository.findById(id)
					.orElseThrow(() -> new BmiScreeningException("Bmi record not exist with id :" + id));
			return ResponseEntity.ok(bmiscreening);
		}
		
		// update bmiscreening rest api
		
		@PutMapping("/bmiscreening/{id}")
		public ResponseEntity<BmiScreening> updateBmiScreening(@PathVariable Integer id, @RequestBody BmiScreening bmiscreeningDetails){
			BmiScreening bmiscreening = bmiscreeningRepository.findById(id)
					.orElseThrow(() -> new BmiScreeningException("Bmi record exist with id :" + id));
			
			bmiscreening.setHeight(bmiscreeningDetails.getHeight());
			bmiscreening.setWeight(bmiscreeningDetails.getWeight());
			bmiscreening.setBmi(bmiscreeningDetails.getBmi());
			bmiscreening.setHeight_for_age(bmiscreeningDetails.getHeight_for_age());
			bmiscreening.setWeight_for_age(bmiscreeningDetails.getWeight_for_age());
			bmiscreening.setArm_size(bmiscreeningDetails.getArm_size());
			
			BmiScreening updatedBmiScreening = bmiscreeningRepository.save(bmiscreening);
			return ResponseEntity.ok(updatedBmiScreening);
		}
		
		// delete bmiscreening rest api
		@DeleteMapping("/bmiscreening/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteBmiScreening(@PathVariable Integer id){
			BmiScreening bmiscreening = bmiscreeningRepository.findById(id)
					.orElseThrow(() -> new BmiScreeningException("Bmi record not exist with id :" + id));
			
			bmiscreeningRepository.delete(bmiscreening);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		

}
