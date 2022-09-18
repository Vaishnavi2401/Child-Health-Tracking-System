package project.chts.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import project.chts.springboot.exception.ImmunisationException;
import project.chts.springboot.model.Immunisation;
import project.chts.springboot.repository.ImmunisationRepository;

public class ImmunisationController {

	@Autowired
	private ImmunisationRepository immunisationRepository;
	
	//get all Immunisation
	@GetMapping("/immunisation")
	public List<Immunisation> getAllImmunation(){
		return immunisationRepository.findAll();
	}	
	
	// create Immunisation rest api
		@PostMapping("/immunisation")
		public Immunisation createImmunisation(@Valid @RequestBody Immunisation immunisation) {
			return immunisationRepository.save(immunisation);
		}
		
		// get Immunisation by id rest api
		@GetMapping("/immunisation/{id}")
		public ResponseEntity<Immunisation> getImmunisationById(@PathVariable Integer id) {
			Immunisation immunisation = immunisationRepository.findById(id)
					.orElseThrow(() -> new ImmunisationException("Immunisation record not exist with id :" + id));
			return ResponseEntity.ok(immunisation);
		}
		
		// update Immunisation rest api
		
		@PutMapping("/immunisation/{id}")
		public ResponseEntity<Immunisation> updateImmunisation(@PathVariable Integer id, @RequestBody Immunisation immunisationDetails){
			Immunisation immunisation = immunisationRepository.findById(id)
					.orElseThrow(() -> new ImmunisationException("Immunisation record not exist with id :" + id));
			
			immunisation.setName_of_vaccine_scheduled(immunisationDetails.getName_of_vaccine_scheduled());
			immunisation.setVaccine_given(immunisationDetails.isVaccine_given());
			immunisation.setScheduled_date_from(immunisationDetails.getScheduled_date_from());
			immunisation.setScheduled_date_to(immunisationDetails.getScheduled_date_to());
			immunisation.setWindow_period_day_from(immunisationDetails.getWindow_period_day_from());
			immunisation.setWindow_period_day_to(immunisationDetails.getWindow_period_day_to());
			
			Immunisation updatedImmunisation = immunisationRepository.save(immunisation);
			return ResponseEntity.ok(updatedImmunisation);
		}
		
		// delete Immunisation rest api
		@DeleteMapping("/immunisation/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteImmunisation(@PathVariable Integer id){
			Immunisation immunisation = immunisationRepository.findById(id)
					.orElseThrow(() -> new ImmunisationException("Immunisation record not exist with id :" + id));
			
			immunisationRepository.delete(immunisation);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
}
