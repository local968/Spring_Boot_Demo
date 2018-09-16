package com.liancheng.link.algorithm;

import java.util.ArrayList;
import java.util.ListIterator;

public class Josephus {
    public static void pass(int m, int n) {
        int i, j, mPrime, numLeft;
        ArrayList<Integer> L = new ArrayList<Integer>();
        for (i = 1; i <= n; i++) {
            L.add(i);
        }

        ListIterator<Integer> inter = L.listIterator();
        Integer item = 0;

        numLeft = n;
        mPrime = m % n;

        for (i = 0; i < n; i++) {
            mPrime = m % numLeft;
            if (mPrime <= numLeft / 2) {
                if (inter.hasNext()) {
                    item = inter.next();
                }
                for (j = 0; j < mPrime; j++) {
                    if (!inter.hasNext()) {
                        inter = L.listIterator();
                    }
                    item = inter.next();
                }
            } else {
                for (j = 0; j < numLeft - mPrime; j++) {
                    if (!inter.hasPrevious()) {
                        inter = L.listIterator();
                    }
                    item = inter.previous();
                }
            }

            System.out.print("Removed" + item + " ");
            inter.remove();
            if (!inter.hasNext()) {
                inter = L.listIterator();
            }
            ;
            System.out.println();
            for (Integer x : L) {
                System.out.print("x" + " ");
            }
            System.out.println();
            numLeft--;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        pass(1,5);
    }
}
