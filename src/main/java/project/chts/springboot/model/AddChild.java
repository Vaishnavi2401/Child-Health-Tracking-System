package project.chts.springboot.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

public class AddChild {
	
	private int child_id;
	private String firstName;
	private String lastName;
	private String gender;
	private long adhar_no;
	private int age;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date birthdate;
	
	private String fatherName;
	private String motherName;
	private long parentsMobileNo;
	private int siblings;
	private String occupation;
	
	private long registrationNo;
	private long contactNo;
	private String schoolName;
	private String block; 
	
	
	public AddChild() {
		
	}
	
	public AddChild(int child_id, String firstName, String lastName, String gender, long adhar_no, int age,
			Date birthdate, String fatherName, String motherName, long parentsMobileNo, int siblings, String occupation,
			long registrationNo, long contactNo, String schoolName, String block) {
		super();
		this.child_id = child_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.adhar_no = adhar_no;
		this.age = age;
		this.birthdate = birthdate;
		this.fatherName = fatherName;
		this.motherName = motherName;
		this.parentsMobileNo = parentsMobileNo;
		this.siblings = siblings;
		this.occupation = occupation;
		this.registrationNo = registrationNo;
		this.contactNo = contactNo;
		this.schoolName = schoolName;
		this.block = block;
	}
	@Override
	public String toString() {
		return "AddChild [child_id=" + child_id + ", firstName=" + firstName + ", lastName=" + lastName + ", gender="
				+ gender + ", adhar_no=" + adhar_no + ", age=" + age + ", birthdate=" + birthdate + ", fatherName="
				+ fatherName + ", motherName=" + motherName + ", parentsMobileNo=" + parentsMobileNo + ", siblings="
				+ siblings + ", occupation=" + occupation + ", registrationNo=" + registrationNo + ", contactNo="
				+ contactNo + ", schoolName=" + schoolName + ", block=" + block + "]";
	}
	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getAdhar_no() {
		return adhar_no;
	}
	public void setAdhar_no(long adhar_no) {
		this.adhar_no = adhar_no;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Date getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
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
	public long getRegistrationNo() {
		return registrationNo;
	}
	public void setRegistrationNo(long registrationNo) {
		this.registrationNo = registrationNo;
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
