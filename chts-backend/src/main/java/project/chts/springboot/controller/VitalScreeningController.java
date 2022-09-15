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

import project.chts.springboot.exception.UserNotFoundException;
import project.chts.springboot.exception.VitalScreeningException;
import project.chts.springboot.model.VitalScreening;
import project.chts.springboot.repository.VitalScreeningRepository;

@RestController
@RequestMapping("/api/v1/")
public class VitalScreeningController {

	@Autowired
	private VitalScreeningRepository vitalscreeningRepository;
	
	//get all VitalScreening
	@GetMapping("/vitalscreening")
	public List<VitalScreening> getAllScreening(){
		return vitalscreeningRepository.findAll();
	}	
	
	// create VitalScreening rest api
		@PostMapping("/vitalscreening")
		public VitalScreening createScreening(@RequestBody VitalScreening vitalscreening) {
			return vitalscreeningRepository.save(vitalscreening);
		}
		
		// get VitalScreening by id rest api
		@GetMapping("/vitalscreening/{id}")
		public ResponseEntity<VitalScreening> getVitalScreeningById(@PathVariable Integer id) {
			VitalScreening vitalscreening = vitalscreeningRepository.findById(id)
					.orElseThrow(() -> new UserNotFoundException("Record not exist with id :" + id));
			return ResponseEntity.ok(vitalscreening);
		}
		
		// update VitalScreening rest api
		
		@PutMapping("/vitalscreening/{id}")
		public ResponseEntity<VitalScreening> updateVitalScreening(@PathVariable Integer id, @RequestBody VitalScreening vitalscreeningDetails){
			VitalScreening vitalscreening = vitalscreeningRepository.findById(id)
					.orElseThrow(() -> new VitalScreeningException("Record not exist with id :" + id));
			
			vitalscreening.setPulse(vitalscreeningDetails.getPulse());
			vitalscreening.setRr(vitalscreeningDetails.getRr());
			vitalscreening.setHb(vitalscreeningDetails.getHb());
			vitalscreening.setBp(vitalscreeningDetails.getBp());
			vitalscreening.setO2sats(vitalscreeningDetails.getO2sats());
			vitalscreening.setTemp(vitalscreeningDetails.getTemp());
			
			VitalScreening updatedVitalScreening = vitalscreeningRepository.save(vitalscreening);
			return ResponseEntity.ok(updatedVitalScreening);
		}
		
		// delete vitalscreening rest api
		@DeleteMapping("/vitalscreening/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteVitalScreening(@PathVariable Integer id){
			VitalScreening vitalscreening = vitalscreeningRepository.findById(id)
					.orElseThrow(() -> new VitalScreeningException("Record not exist with id :" + id));
			
			vitalscreeningRepository.delete(vitalscreening);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
}
