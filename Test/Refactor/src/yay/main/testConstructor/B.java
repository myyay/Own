package yay.main.testConstructor;

public class B {

	public static A a = new A();
	
	public B() {
		System.out.println("B~~构造！");
	}
	
	public void fB(int i){
		System.out.println("fB:" + i);
	}
	
}
