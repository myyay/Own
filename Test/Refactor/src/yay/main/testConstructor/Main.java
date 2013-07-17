package yay.main.testConstructor;

public class Main {
	
	public static A a = new A();
	public static B b = new B();
	
	public static void main(String[] args) {
		System.out.println("进入main函数！");
		System.out.println("构造 a1");
		A a1 = new A();
		System.out.println("构造 b1");
		B b1 = new B();
		System.out.println("构造 b1完毕");
//		
		a1.fA(2);
		b1.fB(3);
		
	}
	

}
