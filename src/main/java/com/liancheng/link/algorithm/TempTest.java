package com.liancheng.link.algorithm;

public class TempTest {

    public int i = 0;

    public Example add0(Example e) {

        e.i++;

        return e;

    }

    public void add1(Example e) {

        e.i++;

    }

    public void modify0(Example e) {

        Example b = e;//将e行参对象的地址赋给句柄b

        b.i++;//也同时修改了e.i和实参的值

    }

    public void modify1(Example e) {

        e = new Example();

        e.i++;

    }

    public static void main(String[] args) {

        Example ex = new Example();

        TempTest a = new TempTest();

        ex = a.add0(ex);//等价于a.add0(ex)，无需返回值，因为通过传递的对象地址（句柄），直接修改了ex中i的值

        a.add1(ex);//add0，add1都在其中的方法体中直接修改了ex.i的值,因此add0的返回值有点多余

        a.modify0(ex);//对ex所产生的影响同add1

        a.modify1(ex);//对ex没有产生任何影响（而且这就是等价于什么也没有做）.

        System.out.print(ex);

//这可能会让一部分人搞不清了。为什么呢？因为是对象地址的副本"值传递"，在modify1中e=new Example();实际上e仅仅是保存ex对象地址的副本的一个句柄，当对e赋值时仅仅是对堆栈中e的赋值（对ex指针副本的变量e赋值），而并没有改变ex的句柄的指向，当方法调用完毕堆栈弹出，e就将要被垃圾回收，没有任何用处。当然你可以将它作为返回值，这就是另外一回事了。


    }

};