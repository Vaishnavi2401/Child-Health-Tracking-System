package project.chts.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "family")
public class Family {
	
	@Id
	private int childId;
	
	@Column(name = "Father_Name")
	private String fatherName;
	
	@Column(name = "Mother_Name")
	private String motherName;
	
	@Column(name = " Parents_Mobile_No")
	private long parentsMobileNo;
	
	@Column(name = "Siblings") 
	private int siblings;
	
	@Column(name = "Occupation")
	private String occupation;
	
	public Family() {
		
		
	}
	
	public Family(String fatherName, String motherName, long parentsMobileNo, int siblings, String occupation) {
		super();
		this.fatherName = fatherName;
		this.motherName = motherName;
		this.parentsMobileNo = parentsMobileNo;
		this.siblings = siblings;
		this.occupation = occupation;
	}
	public int getChildId() {
		return childId;
	}
	public void setChildId(int childId) {
		this.childId = childId;
	}
	public String getFatherName() {
		return fatherName;
	}
	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}
	public String getMotherName() {
		return motherName;
	}
	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}
	public long getParentsMobileNo() {
		return parentsMobileNo;
	}
	public void setParentsMobileNo(long parentsMobileNo) {
		this.parentsMobileNo = parentsMobileNo;
	}
	public int getSiblings() {
		return siblings;
	}
	public void setSiblings(int siblings) {
		this.siblings = siblings;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	
	

}
