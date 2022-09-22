package project.chts.springboot.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


@Entity
@Table(name = "school")

public class School {
	
	@Id
	private int registeredNo;
	
	@Column(name = "Contact_No")
	private long contactNo;
	
	@Column(name = "School_Name")
	private String schoolName;
	
	
	@Column(name = "Block")
	private String block; 
	
	public School() {
		
		
	}
	
	
	public School(long contactNo, String schoolName, String block) {
		super();
		this.contactNo = contactNo;
		this.schoolName = schoolName;
		this.block = block;
	}
	public int getRegisteredNo() {
		return registeredNo;
	}
	public void setRegisteredNo(int registeredNo) {
		this.registeredNo = registeredNo;
	}
	public long getContactNo() {
		return contactNo;
	}
	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}
	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	public String getBlock() {
		return block;
	}
	public void setBlock(String block) {
		this.block = block;
	}
	

}
