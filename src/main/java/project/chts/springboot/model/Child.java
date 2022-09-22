package project.chts.springboot.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

//import java.sql.Date;

@Entity
@Table(name = "child")
public class Child {
	
	@OneToOne(cascade = CascadeType.ALL)
	//@JoinColumn(name = "child_id")
	private UserList userlist;
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int child_id;
	
	@Column(name = "first_Name")
	private String firstName;
	
	@Column(name = "last_Name")
	private String lastName;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "adhar_no")
	private long adhar_no;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "d_o_b")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date birthdate;
	
	@Column(name = "registrationNo")
	private long registrationNo;
	
	public Child() {
		
	}
	
	
	public Child(String firstName, String lastName, String gender, long adhar_no, int age, Date birthdate,
			long registrationNo) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.adhar_no = adhar_no;
		this.age = age;
		this.birthdate = birthdate;
		this.registrationNo = registrationNo;
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
	public long getRegistrationNo() {
		return registrationNo;
	}
	public void setRegistrationNo(long registrationNo) {
		this.registrationNo = registrationNo;
	}

	
}
