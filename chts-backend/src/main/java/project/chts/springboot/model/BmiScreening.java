package project.chts.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BmiScreening {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int child_id;
	private double height;
	private double weight;
	private double bmi;
	private double height_for_age;
	private double weight_for_age;
	private double arm_size;

	public BmiScreening() {
		
	}
	
	
	public BmiScreening(double height, double weight, double bmi, double height_for_age, double weight_for_age,
			double arm_size) {
		super();
		this.height = height;
		this.weight = weight;
		this.bmi = bmi;
		this.height_for_age = height_for_age;
		this.weight_for_age = weight_for_age;
		this.arm_size = arm_size;
	}

	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public double getHeight() {
		return height;
	}
	public void setHeight(double height) {
		this.height = height;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
	public double getBmi() {
		return bmi;
	}

	public void setBmi(double bmi) {
		this.bmi = bmi;
	}
	public double getHeight_for_age() {
		return height_for_age;
	}
	public void setHeight_for_age(double height_for_age) {
		this.height_for_age = height_for_age;
	}
	public double getWeight_for_age() {
		return weight_for_age;
	}
	public void setWeight_for_age(double weight_for_age) {
		this.weight_for_age = weight_for_age;
	}
	public double getArm_size() {
		return arm_size;
	}
	public void setArm_size(double arm_size) {
		this.arm_size = arm_size;
	}
	
}
