package project.chts.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.chts.springboot.exception.AuditoryScreeningException;
import project.chts.springboot.model.AuditoryScreening;
import project.chts.springboot.repository.AuditoryScreeningRepository;

@Service
public class AuditoryScreeningService {

	@Autowired
	private AuditoryScreeningRepository auditoryScreeningRepository;

	public List<AuditoryScreening> findAllAuditoryScreening() {
		
		return auditoryScreeningRepository.findAll();
	}

	public AuditoryScreening saveAuditoryScreening(AuditoryScreening auditoryScreening) {
		return auditoryScreeningRepository.save(auditoryScreening);
	}
	
	public AuditoryScreening findById(Integer id) {
		AuditoryScreening auditoryScreening= auditoryScreeningRepository.findById(id)
				.orElseThrow(() -> new AuditoryScreeningException("AuditoryScreening record not exist with id :" + id));
		return auditoryScreening;
	}
	
	public AuditoryScreening updateAuditoryScreening(Integer id, AuditoryScreening auditoryScreeningDetails ) {
		
		AuditoryScreening auditoryScreening = auditoryScreeningRepository.findById(id)
				.orElseThrow(() -> new AuditoryScreeningException("AuditoryScreening record not exist with id :" + id));
				
		auditoryScreening.setAllergic_reaction(auditoryScreeningDetails.isAllergic_reaction());
		auditoryScreening.setCleft_ip(auditoryScreeningDetails.isCleft_ip());
		auditoryScreening.setCleft_palate(auditoryScreeningDetails.isCleft_palate());
		auditoryScreening.setCongenital_abnormality_of_ear(auditoryScreeningDetails.isCongenital_abnormality_of_ear());
		auditoryScreening.setHearing_loss(auditoryScreeningDetails.isHearing_loss());
		auditoryScreening.setTongue_tie(auditoryScreeningDetails.isTongue_tie());
		
		return auditoryScreening;
	}
	
	public AuditoryScreening deleteAuditoryScreening(Integer id) {
		AuditoryScreening auditoryScreening = auditoryScreeningRepository.findById(id)
			.orElseThrow(() -> new AuditoryScreeningException("AuditoryScreening record not exist with id :" + id));
		auditoryScreeningRepository.delete(auditoryScreening);
		return auditoryScreening;
	}
	
}
