package project.chts.springboot.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Immunisation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int child_id;
	private String name_of_vaccine_scheduled;
	private boolean vaccine_given;    
	private Date scheduled_date_from;      
	private Date scheduled_date_to;         
	private Date window_period_day_from;   
	private Date window_period_day_to;
	
	public Immunisation() {
		
	}
	
	public Immunisation(String name_of_vaccine_scheduled, boolean vaccine_given, Date scheduled_date_from,
			Date scheduled_date_to, Date window_period_day_from, Date window_period_day_to) {
		super();
		this.name_of_vaccine_scheduled = name_of_vaccine_scheduled;
		this.vaccine_given = vaccine_given;
		this.scheduled_date_from = scheduled_date_from;
		this.scheduled_date_to = scheduled_date_to;
		this.window_period_day_from = window_period_day_from;
		this.window_period_day_to = window_period_day_to;
	}
	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public String getName_of_vaccine_scheduled() {
		return name_of_vaccine_scheduled;
	}
	public void setName_of_vaccine_scheduled(String name_of_vaccine_scheduled) {
		this.name_of_vaccine_scheduled = name_of_vaccine_scheduled;
	}
	public boolean isVaccine_given() {
		return vaccine_given;
	}
	public void setVaccine_given(boolean vaccine_given) {
		this.vaccine_given = vaccine_given;
	}
	public Date getScheduled_date_from() {
		return scheduled_date_from;
	}
	public void setScheduled_date_from(Date scheduled_date_from) {
		this.scheduled_date_from = scheduled_date_from;
	}
	public Date getScheduled_date_to() {
		return scheduled_date_to;
	}
	public void setScheduled_date_to(Date scheduled_date_to) {
		this.scheduled_date_to = scheduled_date_to;
	}
	public Date getWindow_period_day_from() {
		return window_period_day_from;
	}
	public void setWindow_period_day_from(Date window_period_day_from) {
		this.window_period_day_from = window_period_day_from;
	}
	public Date getWindow_period_day_to() {
		return window_period_day_to;
	}
	public void setWindow_period_day_to(Date window_period_day_to) {
		this.window_period_day_to = window_period_day_to;
	}  
	
}
