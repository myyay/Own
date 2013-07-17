package yay.main.extend;
public class StaticInitialization {
	public static void main(String[] args) {
		System.out.println("new Cupboard");
		new Cupboard();
		System.out.println("new Cupboard");
		new Cupboard();
		table.f2(1);
		cupboard.f3(1);
	}
	static Table table= new Table();
	static Cupboard cupboard= new Cupboard();
	
}
class Bowl{
	Bowl(int markert){
		System.out.println("Bowl("+markert+")");
	}
	void f1(int markert){
		System.out.println("fi("+markert+")");
	}
}
class Table{
	Bowl bowl3 = new Bowl(3);
	static Bowl bowl1 = new Bowl(1);
	Table(){
		System.out.println("Table()");
	}
	void f2(int markert){
		System.out.println("f2("+markert+")");
	}
	 static Bowl bowl2 = new Bowl(2);
}
class Cupboard{
	 Bowl bowl3 = new Bowl(3);
	 static Bowl bowl4 = new Bowl(4);
	 Cupboard(){
		System.out.println("Cupboard()");
		bowl4.f1(2);
	}
	void f3(int markert){
		System.out.println("f3("+markert+")");
	}
	 static Bowl bowl5 = new Bowl(5);
}