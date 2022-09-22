//package project.chts.springboot.model;
//
//
//import java.sql.Date;
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//import javax.validation.constraints.Email;
//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.Size;
//
//import org.springframework.format.annotation.DateTimeFormat;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//@Entity
//public class User {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int user_Id;
//	
//	@Column(name = "first_Name")
//	private String first_Name;
//	
//	@Column(name = "middle_Name")
//	private String middle_Name;
//	
//	@Column(name = "last_Name")
//	private String last_Name;
//	
//	@Column(name = "mobile_No")
//	private long mobile_No;
//	
//	@NotEmpty
//	@Email
//	@Column(name = "email_Id")
//	private String email_Id;
//	
//	@Column(name = "d_o_b")
//	@DateTimeFormat(pattern = "yyyy-MM-dd")
//	private Date d_o_b;
//	
//	@Column(name = "joining_Date")
//	@DateTimeFormat(pattern = "yyyy-MM-dd")
//	private Date joining_Date;
//	
//	@Column(name = "group_Name")
//	private String group_Name;
//	
//	@NotEmpty 
//	@Size(min = 8, message = "password should have atleast 8 characters")
//	@Column(name = "password")
//	private String password;
//	
//	@Column(name = "gender")
//	private String gender;
//	
//	@Column(name = "maritual_Status")
//	private String maritual_Status;
//	
//	
//	@OneToMany(mappedBy = "user",fetch = FetchType.EAGER,orphanRemoval = true,cascade = CascadeType.PERSIST)
//	@JsonIgnoreProperties("user")
//	private List<School> addressList = new ArrayList<School>();
//	
//	@OneToOne(mappedBy = "user",orphanRemoval = true)
//	@JsonIgnoreProperties("user")
//	private AddChild addchild;
//
//	
//	public List<Child> getChild() {
//		return child;
//	}
//
//	public void setChild(List<Child> child) {
//		this.child = child;
//	}
//
//
//	@OneToMany(mappedBy="user" ,cascade = CascadeType.ALL)
//	  @JsonIgnoreProperties("user") 
//	  private List<Child> child;
//	
//	public User()
//	{
//		
//	}
//
//	
//	
//	
//
//	public User(String first_Name, String middle_Name, String last_Name, long mobile_No, @NotEmpty @Email String email_Id,
//		Date d_o_b, Date joining_Date, String group_Name,
//		@NotEmpty @Size(min = 8, message = "password should have atleast 8 characters") String password, String gender,
//		String maritual_Status) {
//	super();
//	this.first_Name = first_Name;
//	this.middle_Name = middle_Name;
//	this.last_Name = last_Name;
//	this.mobile_No = mobile_No;
//	this.email_Id = email_Id;
//	this.d_o_b = d_o_b;
//	this.joining_Date = joining_Date;
//	this.group_Name = group_Name;
//	this.password = password;
//	this.gender = gender;
//	this.maritual_Status = maritual_Status;
//}
//
//
//
//
//
//	public int getUser_Id() {
//		return user_Id;
//	}
//
//
//	public void setUser_Id(int user_Id) {
//		this.user_Id = user_Id;
//	}
//
//
//	public String getFirst_Name() {
//		return first_Name;
//	}
//
//
//	public void setFirst_Name(String first_Name) {
//		this.first_Name = first_Name;
//	}
//
//
//	public String getMiddle_Name() {
//		return middle_Name;
//	}
//
//
//	public void setMiddle_Name(String middle_Name) {
//		this.middle_Name = middle_Name;
//	}
//
//
//	public String getLast_Name() {
//		return last_Name;
//	}
//
//
//	public void setLast_Name(String last_Name) {
//		this.last_Name = last_Name;
//	}
//
//
//	public long getMobile_No() {
//		return mobile_No;
//	}
//
//
//	public void setMobile_No(long mobile_No) {
//		this.mobile_No = mobile_No;
//	}
//
//
//	public String getEmail_Id() {
//		return email_Id;
//	}
//
//
//	public void setEmail_Id(String email_Id) {
//		this.email_Id = email_Id;
//	}
//
//
//	public Date getD_o_b() {
//		return d_o_b;
//	}
//
//
//	public void setD_o_b(Date d_o_b) {
//		this.d_o_b = d_o_b;
//	}
//
//
//	public Date getJoining_Date() {
//		return joining_Date;
//	}
//
//
//	public void setJoining_Date(Date joining_Date) {
//		this.joining_Date = joining_Date;
//	}
//
//
//	public String getGroup_Name() {
//		return group_Name;
//	}
//
//
//	public void setGroup_Name(String group_Name) {
//		this.group_Name = group_Name;
//	}
//
//
//	public String getPassword() {
//		return password;
//	}
//
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//
//	public String getGender() {
//		return gender;
//	}
//
//
//	public void setGender(String gender) {
//		this.gender = gender;
//	}
//
//
//	public String getMaritual_Status() {
//		return maritual_Status;
//	}
//
//
//	public void setMaritual_Status(String maritual_Status) {
//		this.maritual_Status = maritual_Status;
//	}
//
//	
//	
//}
