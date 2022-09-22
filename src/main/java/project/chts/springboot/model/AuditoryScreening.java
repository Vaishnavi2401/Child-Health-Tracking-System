package project.chts.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Auditory_Screening")
public class AuditoryScreening {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int child_id;
	private boolean allergic_reaction;
	private boolean cleft_ip;
	private boolean cleft_palate;
	private boolean congenital_abnormality_of_ear;
	private boolean hearing_loss;
	private boolean tongue_tie;
	
	public AuditoryScreening() {
		
	}
	
	
	
	public AuditoryScreening(boolean allergic_reaction, boolean cleft_ip, boolean cleft_palate,
			boolean congenital_abnormality_of_ear, boolean hearing_loss, boolean tongue_tie) {
		super();
		this.allergic_reaction = allergic_reaction;
		this.cleft_ip = cleft_ip;
		this.cleft_palate = cleft_palate;
		this.congenital_abnormality_of_ear = congenital_abnormality_of_ear;
		this.hearing_loss = hearing_loss;
		this.tongue_tie = tongue_tie;
	}



	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public boolean isAllergic_reaction() {
		return allergic_reaction;
	}
	public void setAllergic_reaction(boolean allergic_reaction) {
		this.allergic_reaction = allergic_reaction;
	}
	public boolean isCleft_ip() {
		return cleft_ip;
	}
	public void setCleft_ip(boolean cleft_ip) {
		this.cleft_ip = cleft_ip;
	}
	public boolean isCleft_palate() {
		return cleft_palate;
	}
	public void setCleft_palate(boolean cleft_palate) {
		this.cleft_palate = cleft_palate;
	}
	public boolean isCongenital_abnormality_of_ear() {
		return congenital_abnormality_of_ear;
	}
	public void setCongenital_abnormality_of_ear(boolean congenital_abnormality_of_ear) {
		this.congenital_abnormality_of_ear = congenital_abnormality_of_ear;
	}
	public boolean isHearing_loss() {
		return hearing_loss;
	}
	public void setHearing_loss(boolean hearing_loss) {
		this.hearing_loss = hearing_loss;
	}
	public boolean isTongue_tie() {
		return tongue_tie;
	}
	public void setTongue_tie(boolean tongue_tie) {
		this.tongue_tie = tongue_tie;
	}
	
	

}
