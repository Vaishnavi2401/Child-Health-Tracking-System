package project.chts.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class VitalScreening {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int child_id;
	
	//@Column(name = "pulse-beats/min")
	private int pulse;
	
	//@Column(name = "rr/min")
	private int rr;
	private double hb;
	
	//@Column(name = "bp-mm_Hg")
	private int bp;
	
	//@Column(name = "O2_sats-%")
	private int o2sats;
	
	//@Column(name = "Temperature-C")
	private double temp;
	
	public VitalScreening() {
		
	}
	
	public VitalScreening(int pulse, int rr, double hb, int bp, int o2sats, double temp) {
		super();
		this.pulse = pulse;
		this.rr = rr;
		this.hb = hb;
		this.bp = bp;
		this.o2sats = o2sats;
		this.temp = temp;
	}
	public int getChild_id() {
		return child_id;
	}
	public void setChild_id(int child_id) {
		this.child_id = child_id;
	}
	public int getPulse() {
		return pulse;
	}
	public void setPulse(int pulse) {
		this.pulse = pulse;
	}
	public int getRr() {
		return rr;
	}
	public void setRr(int rr) {
		this.rr = rr;
	}
	public double getHb() {
		return hb;
	}
	public void setHb(double hb) {
		this.hb = hb;
	}
	public int getBp() {
		return bp;
	}
	public void setBp(int bp) {
		this.bp = bp;
	}
	public int getO2sats() {
		return o2sats;
	}
	public void setO2sats(int o2sats) {
		this.o2sats = o2sats;
	}
	public double getTemp() {
		return temp;
	}
	public void setTemp(double temp) {
		this.temp = temp;
	}

}
