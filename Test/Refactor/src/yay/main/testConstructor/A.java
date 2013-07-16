package yay.main.testConstructor;

public class A {

	public B b = new B();
	
	public A() {
		System.out.println("A~~构造！");
	}
	
	public void fA(int i) {
		System.out.println("fA:" + i);
	}
	
	
}
