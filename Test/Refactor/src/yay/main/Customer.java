package yay.main;

import java.util.Enumeration;
import java.util.Vector;

import com.sun.org.apache.bcel.internal.generic.NEW;

public class Customer {

	private String name;
	private Vector rentals = new Vector<>();

	public Customer(String name){
		this.name = name;
	}

	public void addRental(Rental rental){
		rentals.addElement(rental);
	}


	public String getName() {
		return name;
	}

	public String statement(){
		//double totalAmount = 0;
		//int frequentRenterPoints = 0;
		String result = "Rental Record For " + getName() + "\n";
		Enumeration rentals = this.rentals.elements();
		
		while (rentals.hasMoreElements()) {
			//double thisAmount = 0;
			Rental each = (Rental)rentals.nextElement();

			//frequentRenterPoints += each.getFrequentRenterPoints();
			
			result += "\t" + each.getMovie().getTitle() + "\t" 
					+ String.valueOf(each.getCharge()) + "\n";
			//totalAmount += each.getCharge();

		}//while end
		
		
		result += "Amount owed is " + String.valueOf(getTotalCharge()) + "\n";
		result += "You earned " + String.valueOf(getTotalFrequentRenterPoints()) 
				+ " frequent renter points";
		return result;


	}
	
	private double getTotalCharge() {
		double result = 0;
		Enumeration rentals = this.rentals.elements();
		
		while (rentals.hasMoreElements()) {
			Rental each = (Rental)rentals.nextElement();
			
			result += each.getCharge();

		}//while end
		
		return result;
	}
	
	private int getTotalFrequentRenterPoints(){
		int result = 0;
		Enumeration rentals = this.rentals.elements();
		
		while (rentals.hasMoreElements()) {
			Rental each = (Rental)rentals.nextElement();
			
			result += each.getFrequentRenterPoints();

		}//while end
		
		return result;
	}
	

	public static void main(String[] args) {
		Customer cust = new Customer("abc");
		Movie movie1 = new Movie("片1", Movie.CHILDRENS);
		Rental rental = new Rental(movie1, 5);
		cust.addRental(rental);
		System.out.println(cust.statement());
	}


}








